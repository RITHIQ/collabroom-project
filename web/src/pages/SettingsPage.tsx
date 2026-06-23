/**
 * SettingsPage.tsx
 * Account settings only — notifications, security, theme, danger zone.
 * Profile editing is handled separately in ProfileEdit.tsx
 */
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Bell, Shield, LogOut, Trash2, Moon, Sun, ExternalLink,
  Mail, Smartphone, Lock,
} from 'lucide-react';
import { useAppDispatch, useAppSelector } from '../store';
import { logoutUser } from '../store/slices/authSlice';
import { toggleTheme } from '../store/slices/themeSlice';
import { useNavigate, Link } from 'react-router-dom';
import toast from 'react-hot-toast';

const Section = ({
  title, subtitle, icon, children,
}: {
  title: string; subtitle?: string; icon: React.ReactNode; children: React.ReactNode;
}) => (
  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="card" style={{ padding: 24, marginBottom: 16 }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20, paddingBottom: 16, borderBottom: '1px solid var(--color-border)' }}>
      <div style={{
        width: 36, height: 36, borderRadius: 9, flexShrink: 0,
        background: 'var(--color-primary-light)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: 'var(--color-primary)',
      }}>{icon}</div>
      <div>
        <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>{title}</div>
        {subtitle && <div style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)', marginTop: 1 }}>{subtitle}</div>}
      </div>
    </div>
    {children}
  </motion.div>
);

const Toggle = ({ on, onChange }: { on: boolean; onChange: () => void }) => (
  <button
    onClick={onChange}
    style={{
      width: 48, height: 26, borderRadius: 13, flexShrink: 0,
      background: on ? 'var(--color-primary)' : 'var(--color-border)',
      border: 'none', cursor: 'pointer', position: 'relative',
      transition: 'background 0.25s',
    }}
  >
    <div style={{
      width: 20, height: 20, borderRadius: '50%', background: '#fff',
      position: 'absolute', top: 3,
      left: on ? 25 : 3,
      transition: 'left 0.25s',
      boxShadow: '0 1px 4px rgba(0,0,0,0.2)',
    }} />
  </button>
);

const NotifRow = ({
  label, desc, value, onChange,
}: {
  label: string; desc: string; value: boolean; onChange: () => void;
}) => (
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 0', borderBottom: '1px solid var(--color-border-subtle)' }}>
    <div>
      <div style={{ fontWeight: 600, fontSize: '0.88rem' }}>{label}</div>
      <div style={{ fontSize: '0.76rem', color: 'var(--color-text-secondary)', marginTop: 2 }}>{desc}</div>
    </div>
    <Toggle on={value} onChange={onChange} />
  </div>
);

export default function SettingsPage() {
  const dispatch  = useAppDispatch();
  const navigate  = useNavigate();
  const { user }  = useAppSelector(s => s.auth);
  const { theme } = useAppSelector(s => s.theme);

  const [notifPrefs, setNotifPrefs] = useState({
    campaigns:     true,
    payments:      true,
    messages:      true,
    applications:  true,
    announcements: false,
  });
  const [notifSaved, setNotifSaved] = useState(false);

  useEffect(() => {
    // Load saved notif prefs from localStorage
    try {
      const stored = localStorage.getItem('colabroom_notif_prefs');
      if (stored) setNotifPrefs(JSON.parse(stored));
    } catch { /* ignore */ }
  }, []);

  const toggleNotif = (key: keyof typeof notifPrefs) => {
    setNotifPrefs(prev => ({ ...prev, [key]: !prev[key] }));
    setNotifSaved(false);
  };

  const saveNotifPrefs = () => {
    localStorage.setItem('colabroom_notif_prefs', JSON.stringify(notifPrefs));
    setNotifSaved(true);
    toast.success('Notification preferences saved');
    setTimeout(() => setNotifSaved(false), 2500);
  };

  const handleLogout = async () => {
    await dispatch(logoutUser());
    navigate('/login', { replace: true });
  };

  return (
    <div style={{ padding: '32px', maxWidth: 680, margin: '0 auto' }}>
      <div style={{ marginBottom: 28 }}>
        <h1 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: 6 }}>Settings</h1>
        <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
          Manage account preferences, notifications, and security.
        </p>
      </div>

      {/* ── Account Info ─────────────────────────────────────────── */}
      <Section title="Account" subtitle="Your account details" icon={<Mail size={16} />}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div>
            <label className="label">Email address</label>
            <input className="input" value={user?.email || ''} disabled
              style={{ opacity: 0.6, cursor: 'not-allowed', marginTop: 6 }} />
            <p style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', marginTop: 4 }}>
              Email cannot be changed here. Contact support to update.
            </p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <div style={{ fontWeight: 600, fontSize: '0.88rem' }}>Account Role</div>
              <div style={{ fontSize: '0.78rem', color: 'var(--color-text-secondary)', marginTop: 2, textTransform: 'capitalize' }}>
                {user?.role} Account
              </div>
            </div>
            <Link to="/profile/edit" className="btn btn-secondary btn-sm" style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <ExternalLink size={13} /> Edit Profile
            </Link>
          </div>
        </div>
      </Section>

      {/* ── Appearance ───────────────────────────────────────────── */}
      <Section
        title="Appearance"
        subtitle={`Currently using ${theme === 'dark' ? 'dark' : 'light'} mode`}
        icon={theme === 'dark' ? <Moon size={16} /> : <Sun size={16} />}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontWeight: 600, fontSize: '0.88rem' }}>Theme</div>
            <div style={{ fontSize: '0.78rem', color: 'var(--color-text-secondary)', marginTop: 2 }}>
              Switch between dark and light mode
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <Sun size={14} color={theme === 'light' ? 'var(--color-primary)' : 'var(--color-text-muted)'} />
            <Toggle on={theme === 'dark'} onChange={() => dispatch(toggleTheme())} />
            <Moon size={14} color={theme === 'dark' ? 'var(--color-primary)' : 'var(--color-text-muted)'} />
          </div>
        </div>
      </Section>

      {/* ── Notifications ─────────────────────────────────────────── */}
      <Section title="Notifications" subtitle="Choose what you want to be notified about" icon={<Bell size={16} />}>
        <NotifRow label="Campaign updates"    desc="Applications, approvals, and status changes"
          value={notifPrefs.campaigns}     onChange={() => toggleNotif('campaigns')} />
        <NotifRow label="Payment alerts"      desc="Escrow locks, releases, and withdrawals"
          value={notifPrefs.payments}      onChange={() => toggleNotif('payments')} />
        <NotifRow label="New messages"        desc="Direct messages from brands and creators"
          value={notifPrefs.messages}      onChange={() => toggleNotif('messages')} />
        <NotifRow label="Application updates" desc="Status changes on campaigns you applied to"
          value={notifPrefs.applications}  onChange={() => toggleNotif('applications')} />
        <NotifRow label="Platform announcements" desc="ColabRoom news and new feature updates"
          value={notifPrefs.announcements} onChange={() => toggleNotif('announcements')} />

        <button
          className={`btn btn-sm ${notifSaved ? 'btn-secondary' : 'btn-primary'}`}
          style={{ marginTop: 18 }}
          onClick={saveNotifPrefs}
        >
          {notifSaved ? '✅ Preferences Saved' : 'Save Preferences'}
        </button>
      </Section>

      {/* ── Security ─────────────────────────────────────────────── */}
      <Section title="Security" subtitle="Your account is protected" icon={<Shield size={16} />}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div style={{
            display: 'flex', alignItems: 'flex-start', gap: 14,
            padding: '14px 16px', borderRadius: 10,
            background: 'rgba(16,185,129,0.06)', border: '1px solid rgba(16,185,129,0.2)',
          }}>
            <Smartphone size={18} style={{ color: '#10B981', marginTop: 2, flexShrink: 0 }} />
            <div>
              <div style={{ fontWeight: 700, fontSize: '0.88rem', color: '#10B981', marginBottom: 4 }}>
                OTP Authentication Active
              </div>
              <div style={{ fontSize: '0.78rem', color: 'var(--color-text-secondary)' }}>
                Your account uses email OTP-based login. No password is stored — highly secure.
              </div>
            </div>
          </div>

          <div style={{
            display: 'flex', alignItems: 'flex-start', gap: 14,
            padding: '14px 16px', borderRadius: 10,
            background: 'var(--color-bg-secondary)', border: '1px solid var(--color-border)',
          }}>
            <Lock size={18} style={{ color: 'var(--color-text-muted)', marginTop: 2, flexShrink: 0 }} />
            <div>
              <div style={{ fontWeight: 600, fontSize: '0.88rem', marginBottom: 4 }}>Need to change your email?</div>
              <div style={{ fontSize: '0.78rem', color: 'var(--color-text-secondary)' }}>
                To update your email address, contact{' '}
                <a href="mailto:support@colabroom.app" style={{ color: 'var(--color-primary)' }}>
                  support@colabroom.app
                </a>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ── Danger Zone ──────────────────────────────────────────── */}
      <div className="card" style={{ padding: 24, border: '1px solid rgba(239,68,68,0.25)', background: 'rgba(239,68,68,0.03)' }}>
        <h3 style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--color-error)', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 8 }}>
          <Trash2 size={16} /> Danger Zone
        </h3>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          <button className="btn btn-secondary btn-sm" onClick={handleLogout}>
            <LogOut size={14} /> Sign out
          </button>
          <button
            className="btn btn-sm"
            style={{ background: 'rgba(239,68,68,0.1)', color: 'var(--color-error)', border: '1px solid rgba(239,68,68,0.25)', borderRadius: 8, cursor: 'pointer', padding: '6px 14px', fontSize: '0.82rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: 6 }}
            onClick={() => toast.error('Account deletion requires email verification. Contact support@colabroom.app')}
          >
            <Trash2 size={13} /> Delete Account
          </button>
        </div>
      </div>
    </div>
  );
}
