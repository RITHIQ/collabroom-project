/**
 * ProfileEdit.tsx
 * Premium profile editor — photo upload, headline, social links,
 * location, industry, niches, preferences. Saves to Supabase.
 */
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Camera, Save, Loader, User, MapPin, Globe, Instagram,
  Youtube, Twitter, Linkedin, Briefcase, Star, Zap, CheckCircle,
} from 'lucide-react';
import { useAppSelector } from '../store';
import { userService } from '../services/userService';
import { supabase } from '../services/supabaseClient';
import toast from 'react-hot-toast';

const nicheOptions = [
  'Beauty', 'Tech', 'Fitness', 'Food', 'Travel', 'Gaming',
  'Finance', 'Fashion', 'Education', 'Lifestyle', 'Photography',
  'Music', 'Parenting', 'Sports', 'Health', 'Automotive',
];

const industryOptions = [
  'Technology', 'Fashion & Apparel', 'Beauty & Cosmetics', 'Food & Beverage',
  'Health & Wellness', 'Sports & Fitness', 'Entertainment', 'Finance',
  'Travel & Hospitality', 'Education', 'Automotive', 'Gaming',
  'Home & Lifestyle', 'E-commerce', 'Media & Publishing', 'Other',
];

const Section = ({
  title, subtitle, icon, children,
}: {
  title: string; subtitle?: string; icon: React.ReactNode; children: React.ReactNode;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    className="card"
    style={{ padding: 28, marginBottom: 20 }}
  >
    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14, marginBottom: 24 }}>
      <div style={{
        width: 40, height: 40, borderRadius: 10, flexShrink: 0,
        background: 'var(--color-primary-light)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: 'var(--color-primary)',
      }}>{icon}</div>
      <div>
        <div style={{ fontWeight: 700, fontSize: '1rem' }}>{title}</div>
        {subtitle && <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', marginTop: 2 }}>{subtitle}</div>}
      </div>
    </div>
    {children}
  </motion.div>
);

const FormRow = ({ children, cols = 2 }: { children: React.ReactNode; cols?: number }) => (
  <div style={{ display: 'grid', gridTemplateColumns: `repeat(${cols}, 1fr)`, gap: 16 }}>
    {children}
  </div>
);

const Field = ({
  label, children, full,
}: {
  label: string; children: React.ReactNode; full?: boolean;
}) => (
  <div style={{ gridColumn: full ? '1 / -1' : undefined }}>
    <label className="label" style={{ marginBottom: 6, display: 'block' }}>{label}</label>
    {children}
  </div>
);

export default function ProfileEdit() {
  const { user } = useAppSelector(s => s.auth);
  const isCreator = user?.role === 'creator';
  const isBrand   = user?.role === 'brand';

  const [saving, setSaving]   = useState(false);
  const [loading, setLoading] = useState(true);
  const [saved, setSaved]     = useState(false);

  // ── Shared ──────────────────────────────────────────────────────────
  const [displayName, setDisplayName] = useState('');
  const [bio, setBio]                 = useState('');
  const [location, setLocation]       = useState('');
  const [website, setWebsite]         = useState('');
  const [avatarUrl, setAvatarUrl]     = useState('');
  const [uploading, setUploading]     = useState(false);

  // ── Creator ──────────────────────────────────────────────────────────
  const [username, setUsername]         = useState('');
  const [tagline, setTagline]           = useState('');
  const [niches, setNiches]             = useState<string[]>([]);
  const [availability, setAvailability] = useState('available');
  const [instagramUrl, setInstagramUrl] = useState('');
  const [youtubeUrl, setYoutubeUrl]     = useState('');
  const [twitterUrl, setTwitterUrl]     = useState('');
  const [linkedinUrl, setLinkedinUrl]   = useState('');
  const [totalFollowers, setTotalFollowers] = useState('');

  // ── Brand ────────────────────────────────────────────────────────────
  const [companyName, setCompanyName] = useState('');
  const [handle, setHandle]           = useState('');
  const [industry, setIndustry]       = useState('');
  const [companySize, setCompanySize] = useState('');

  // ── Load ─────────────────────────────────────────────────────────────
  useEffect(() => {
    if (!user?.id) return;
    const load = async () => {
      try {
        const profile = await userService.getMyProfile(user.id);
        setDisplayName(profile?.full_name || '');
        setAvatarUrl(profile?.avatar_url || '');

        if (isCreator) {
          const c = await userService.getMyCreatorProfile(user.id);
          if (c) {
            setDisplayName(c.display_name || profile?.full_name || '');
            setUsername(c.username || '');
            setBio(c.bio || '');
            setLocation(c.location || '');
            setTagline(c.tagline || '');
            setNiches(c.niches || []);
            setAvailability(c.availability || 'available');
            setAvatarUrl(c.profile_photo || profile?.avatar_url || '');
            setInstagramUrl(c.instagram_url || '');
            setYoutubeUrl(c.youtube_url || '');
            setTwitterUrl(c.twitter_url || '');
            setLinkedinUrl(c.linkedin_url || '');
            setTotalFollowers(c.total_followers ? String(c.total_followers) : '');
          }
        } else if (isBrand) {
          const b = await userService.getMyBrandProfile(user.id);
          if (b) {
            setCompanyName(b.company_name || '');
            setHandle(b.handle || '');
            setBio(b.description || '');
            setIndustry(b.industry || '');
            setCompanySize(b.company_size || '');
            setWebsite(b.website || '');
            setLocation(b.location || '');
            setAvatarUrl(b.logo_url || profile?.avatar_url || '');
            setInstagramUrl(b.instagram_url || '');
            setLinkedinUrl(b.linkedin_url || '');
          }
        }
      } catch (err: unknown) {
        toast.error((err as Error).message);
      } finally {
        setLoading(false);
      }
    };
    void load();
  }, [user?.id, isCreator, isBrand]);

  // ── Photo upload ─────────────────────────────────────────────────────
  const handleAvatarUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.[0] || !user?.id) return;
    const file = e.target.files[0];
    if (file.size > 5 * 1024 * 1024) { toast.error('Image must be under 5MB'); return; }
    setUploading(true);
    try {
      const ext  = file.name.split('.').pop();
      const path = `avatars/${user.id}.${ext}`;
      const { error } = await supabase.storage.from('uploads').upload(path, file, { upsert: true });
      if (error) { toast.error(error.message); return; }
      const { data } = supabase.storage.from('uploads').getPublicUrl(path);
      setAvatarUrl(data.publicUrl);
      toast.success('Profile photo updated!');
    } finally {
      setUploading(false);
    }
  };

  // ── Save ─────────────────────────────────────────────────────────────
  const handleSave = async () => {
    if (!user?.id) return;
    setSaving(true);
    try {
      await userService.updateProfile(user.id, {
        full_name: displayName,
        avatar_url: avatarUrl || undefined,
      });

      if (isCreator) {
        await userService.upsertCreatorProfile(user.id, {
          display_name: displayName,
          username,
          bio,
          location,
          tagline,
          niches,
          availability,
          profile_photo: avatarUrl || undefined,
          instagram_url: instagramUrl || null,
          youtube_url: youtubeUrl || null,
          twitter_url: twitterUrl || null,
          linkedin_url: linkedinUrl || null,
          total_followers: totalFollowers ? Number(totalFollowers) : null,
        });
      } else if (isBrand) {
        await userService.upsertBrandProfile(user.id, {
          company_name: companyName,
          handle,
          description: bio,
          industry,
          company_size: companySize,
          website,
          location,
          logo_url: avatarUrl || undefined,
          instagram_url: instagramUrl || null,
          linkedin_url: linkedinUrl || null,
        });
      }

      setSaved(true);
      toast.success('Profile saved successfully! 🎉');
      setTimeout(() => setSaved(false), 3000);
    } catch (err: unknown) {
      toast.error((err as Error).message);
    } finally {
      setSaving(false);
    }
  };

  if (loading) return (
    <div style={{ padding: 32, maxWidth: 860, margin: '0 auto' }}>
      <div className="skeleton" style={{ height: 40, width: 200, borderRadius: 8, marginBottom: 24 }} />
      {[1, 2, 3, 4].map(i => (
        <div key={i} className="skeleton" style={{ height: 160, borderRadius: 14, marginBottom: 20 }} />
      ))}
    </div>
  );

  return (
    <div style={{ padding: 32, maxWidth: 860, margin: '0 auto' }}>
      {/* Page header */}
      <div style={{ marginBottom: 28 }}>
        <h1 style={{ fontSize: '1.65rem', fontWeight: 800, marginBottom: 6 }}>Edit Profile</h1>
        <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
          Your public profile is visible to {isCreator ? 'brands looking to collaborate with you' : 'creators you want to work with'}.
        </p>
      </div>

      {/* ── 1. Photo & Identity ───────────────────────────────────────── */}
      <Section title="Photo & Identity" subtitle="Your profile picture and public name" icon={<User size={18} />}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 24, marginBottom: 24 }}>
          {/* Avatar */}
          <label htmlFor="avatar-upload" style={{ cursor: uploading ? 'wait' : 'pointer', flexShrink: 0 }}>
            <div style={{
              width: 96, height: 96, borderRadius: 24,
              background: avatarUrl ? 'transparent' : 'var(--color-bg-secondary)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: 'var(--color-primary)', overflow: 'hidden',
              border: '2px solid var(--color-border)', position: 'relative',
              boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
            }}>
              {avatarUrl
                ? <img src={avatarUrl} alt="avatar" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                : <Camera size={30} />
              }
              <div style={{
                position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.5)',
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                opacity: 0, transition: 'opacity 0.2s', gap: 4,
              }}
                onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
                onMouseLeave={e => (e.currentTarget.style.opacity = '0')}
              >
                {uploading
                  ? <Loader size={20} color="#fff" style={{ animation: 'spin 1s linear infinite' }} />
                  : <Camera size={20} color="#fff" />
                }
                <span style={{ fontSize: '0.65rem', color: '#fff', fontWeight: 600 }}>Change</span>
              </div>
            </div>
            <input id="avatar-upload" type="file" accept="image/*" onChange={handleAvatarUpload} style={{ display: 'none' }} />
          </label>

          {/* Name / Email info */}
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: 800, fontSize: '1.1rem', marginBottom: 4 }}>{displayName || 'Your Name'}</div>
            <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', marginBottom: 8 }}>{user?.email}</div>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              padding: '4px 10px', borderRadius: 20,
              background: 'var(--color-primary-light)', color: 'var(--color-primary)',
              fontSize: '0.75rem', fontWeight: 700, textTransform: 'capitalize',
            }}>
              <Star size={11} />
              {user?.role} Account
            </div>
            <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', marginTop: 8 }}>
              Click the photo to upload a new one (max 5MB)
            </div>
          </div>
        </div>

        <FormRow cols={2}>
          <Field label="Display Name *">
            <input className="input" value={displayName} onChange={e => setDisplayName(e.target.value)}
              placeholder={isCreator ? 'Your full name' : 'Company name'} />
          </Field>
          {isCreator && (
            <Field label="Username / Handle">
              <div style={{ position: 'relative' }}>
                <span style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-muted)', fontWeight: 600, fontSize: '0.9rem' }}>@</span>
                <input className="input" value={username} onChange={e => setUsername(e.target.value)}
                  placeholder="yourhandle" style={{ paddingLeft: 28 }} />
              </div>
            </Field>
          )}
          {isBrand && (
            <Field label="Brand Handle">
              <div style={{ position: 'relative' }}>
                <span style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-muted)', fontWeight: 600, fontSize: '0.9rem' }}>@</span>
                <input className="input" value={handle} onChange={e => setHandle(e.target.value)}
                  placeholder="yourhandle" style={{ paddingLeft: 28 }} />
              </div>
            </Field>
          )}
        </FormRow>

        {isCreator && (
          <div style={{ marginTop: 16 }}>
            <Field label="Headline / Tagline">
              <input className="input" value={tagline} onChange={e => setTagline(e.target.value)}
                placeholder="e.g. Lifestyle & Travel Creator · 450K across platforms" />
            </Field>
          </div>
        )}

        <div style={{ marginTop: 16 }}>
          <Field label={isCreator ? 'About You' : 'About Your Brand'} full>
            <textarea className="input" rows={4} value={bio} onChange={e => setBio(e.target.value)}
              placeholder={isCreator
                ? 'Tell brands about your content, audience demographics, and what makes your collaborations unique…'
                : 'Tell creators what your brand stands for, your target audience, and the type of content you value…'}
              style={{ resize: 'vertical' }}
            />
          </Field>
        </div>
      </Section>

      {/* ── 2. Location & Contact ─────────────────────────────────────── */}
      <Section title="Location & Contact" subtitle="Help people find and reach you" icon={<MapPin size={18} />}>
        <FormRow cols={2}>
          <Field label="Location">
            <input className="input" value={location} onChange={e => setLocation(e.target.value)}
              placeholder="e.g. Mumbai, India" />
          </Field>
          <Field label="Website">
            <div style={{ position: 'relative' }}>
              <Globe size={15} style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-muted)' }} />
              <input className="input" type="url" value={website} onChange={e => setWebsite(e.target.value)}
                placeholder="https://yourwebsite.com" style={{ paddingLeft: 36 }} />
            </div>
          </Field>
        </FormRow>
      </Section>

      {/* ── 3. Social Media Links ─────────────────────────────────────── */}
      <Section title="Social Media Links" subtitle="Link your social profiles to boost credibility" icon={<Globe size={18} />}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {isCreator && (
            <>
              <Field label="Instagram">
                <div style={{ position: 'relative' }}>
                  <Instagram size={16} style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: '#E1306C' }} />
                  <input className="input" value={instagramUrl} onChange={e => setInstagramUrl(e.target.value)}
                    placeholder="https://instagram.com/yourprofile" style={{ paddingLeft: 38 }} />
                </div>
              </Field>
              <Field label="YouTube">
                <div style={{ position: 'relative' }}>
                  <Youtube size={16} style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: '#FF0000' }} />
                  <input className="input" value={youtubeUrl} onChange={e => setYoutubeUrl(e.target.value)}
                    placeholder="https://youtube.com/@yourchannel" style={{ paddingLeft: 38 }} />
                </div>
              </Field>
              <Field label="X / Twitter">
                <div style={{ position: 'relative' }}>
                  <Twitter size={16} style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-secondary)' }} />
                  <input className="input" value={twitterUrl} onChange={e => setTwitterUrl(e.target.value)}
                    placeholder="https://twitter.com/yourhandle" style={{ paddingLeft: 38 }} />
                </div>
              </Field>
            </>
          )}
          <Field label="LinkedIn">
            <div style={{ position: 'relative' }}>
              <Linkedin size={16} style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: '#0A66C2' }} />
              <input className="input" value={linkedinUrl} onChange={e => setLinkedinUrl(e.target.value)}
                placeholder="https://linkedin.com/in/yourprofile" style={{ paddingLeft: 38 }} />
            </div>
          </Field>
          {isCreator && (
            <Field label="Total Followers / Reach">
              <input className="input" type="number" value={totalFollowers}
                onChange={e => setTotalFollowers(e.target.value)}
                placeholder="e.g. 450000 (combined across all platforms)" />
            </Field>
          )}
        </div>
      </Section>

      {/* ── 4a. Creator: Niches & Availability ───────────────────────── */}
      {isCreator && (
        <Section title="Niches & Preferences" subtitle="Tell brands what type of content you create" icon={<Zap size={18} />}>
          <div style={{ marginBottom: 20 }}>
            <label className="label" style={{ display: 'block', marginBottom: 10 }}>Your Content Niches</label>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {nicheOptions.map(n => (
                <button type="button" key={n}
                  onClick={() => setNiches(prev => prev.includes(n) ? prev.filter(x => x !== n) : [...prev, n])}
                  className={`niche-chip ${niches.includes(n) ? 'active' : ''}`}
                  style={{ fontSize: '0.8rem', padding: '6px 14px' }}>
                  {n}
                </button>
              ))}
            </div>
          </div>

          <Field label="Collaboration Availability">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                { value: 'available', label: 'Open to Collaborations', desc: 'Actively looking for brand deals', color: '#10B981' },
                { value: 'selective', label: 'Selective', desc: "Only for the right fit — DM to discuss", color: '#F59E0B' },
                { value: 'unavailable', label: 'Not Available', desc: 'Currently not taking new projects', color: '#EF4444' },
              ].map(opt => (
                <button type="button" key={opt.value}
                  onClick={() => setAvailability(opt.value)}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 14, padding: '14px 16px',
                    borderRadius: 10, cursor: 'pointer', textAlign: 'left',
                    border: `1.5px solid ${availability === opt.value ? opt.color : 'var(--color-border)'}`,
                    background: availability === opt.value ? `${opt.color}10` : 'var(--color-bg-secondary)',
                    transition: 'all 0.2s',
                  }}>
                  <div style={{ width: 10, height: 10, borderRadius: '50%', background: opt.color, flexShrink: 0 }} />
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '0.88rem' }}>{opt.label}</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', marginTop: 1 }}>{opt.desc}</div>
                  </div>
                  {availability === opt.value && (
                    <CheckCircle size={16} style={{ marginLeft: 'auto', color: opt.color, flexShrink: 0 }} />
                  )}
                </button>
              ))}
            </div>
          </Field>
        </Section>
      )}

      {/* ── 4b. Brand: Industry & Company Info ───────────────────────── */}
      {isBrand && (
        <Section title="Industry & Company" subtitle="Help creators understand your business" icon={<Briefcase size={18} />}>
          <FormRow cols={2}>
            <Field label="Industry">
              <select className="input" value={industry} onChange={e => setIndustry(e.target.value)} style={{ cursor: 'pointer' }}>
                <option value="">Select your industry</option>
                {industryOptions.map(i => <option key={i}>{i}</option>)}
              </select>
            </Field>
            <Field label="Company Size">
              <select className="input" value={companySize} onChange={e => setCompanySize(e.target.value)} style={{ cursor: 'pointer' }}>
                <option value="">Select size</option>
                {['1-10', '11-50', '51-200', '201-500', '500+'].map(s => <option key={s}>{s}</option>)}
              </select>
            </Field>
          </FormRow>
        </Section>
      )}

      {/* ── Save Button ───────────────────────────────────────────────── */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 16, paddingBottom: 40 }}>
        <button
          className="btn btn-primary"
          onClick={handleSave}
          disabled={saving || uploading}
          style={{ padding: '12px 32px', fontSize: '0.95rem', minWidth: 160 }}
        >
          {saving
            ? <><Loader size={15} style={{ animation: 'spin 1s linear infinite' }} /> Saving…</>
            : saved
              ? <><CheckCircle size={15} /> Saved!</>
              : <><Save size={15} /> Save Profile</>
          }
        </button>
        <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
          Changes are saved to your public profile instantly.
        </span>
      </div>
    </div>
  );
}
