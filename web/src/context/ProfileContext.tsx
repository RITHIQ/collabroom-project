/**
 * ProfileContext.tsx
 * Global context that stores the live avatar URL and display name.
 * Loaded once on mount, updated after profile saves so the entire
 * app (Sidebar, Navbar, etc.) reflects changes instantly.
 */
import { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { supabase } from '../services/supabaseClient';
import { useAppSelector } from '../store';

interface ProfileCtx {
  avatarUrl: string;
  displayName: string;
  refreshProfile: () => Promise<void>;
}

const ProfileContext = createContext<ProfileCtx>({
  avatarUrl: '',
  displayName: '',
  refreshProfile: async () => {},
});

export function ProfileProvider({ children }: { children: React.ReactNode }) {
  const { user } = useAppSelector(s => s.auth);
  const [avatarUrl, setAvatarUrl]     = useState('');
  const [displayName, setDisplayName] = useState('');

  const refreshProfile = useCallback(async () => {
    if (!user?.id) return;
    try {
      // Pull avatar from profiles table first
      const { data: profile } = await supabase
        .from('profiles')
        .select('avatar_url, full_name')
        .eq('user_id', user.id)
        .maybeSingle();

      if (profile?.avatar_url) setAvatarUrl(profile.avatar_url);
      if (profile?.full_name)  setDisplayName(profile.full_name);

      // Override with role-specific photo if available
      if (user.role === 'creator') {
        const { data: c } = await supabase
          .from('creators')
          .select('profile_photo, display_name')
          .eq('user_id', user.id)
          .maybeSingle();
        if (c?.profile_photo) setAvatarUrl(c.profile_photo);
        if (c?.display_name)  setDisplayName(c.display_name);
      } else if (user.role === 'brand') {
        const { data: b } = await supabase
          .from('brands')
          .select('logo_url, company_name')
          .eq('user_id', user.id)
          .maybeSingle();
        if (b?.logo_url)    setAvatarUrl(b.logo_url);
        if (b?.company_name) setDisplayName(b.company_name);
      }
    } catch {
      // silently ignore — fallback to initials
    }
  }, [user?.id, user?.role]);

  // Load on mount and whenever user changes
  useEffect(() => {
    void refreshProfile();
  }, [refreshProfile]);

  return (
    <ProfileContext.Provider value={{ avatarUrl, displayName, refreshProfile }}>
      {children}
    </ProfileContext.Provider>
  );
}

export const useProfile = () => useContext(ProfileContext);
