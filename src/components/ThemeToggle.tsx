'use client';
import { useEffect, useState } from 'react';
import styles from './ThemeToggle.module.css';

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem('tol-theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = saved ? saved === 'dark' : prefersDark;
    setDark(isDark);
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    updateMetaThemeColor(isDark);
  }, []);

  function updateMetaThemeColor(isDark: boolean) {
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', isDark ? '#12141F' : '#1B3FA0');
  }

  function toggle() {
    const next = !dark;
    setDark(next);
    document.documentElement.setAttribute('data-theme', next ? 'dark' : 'light');
    localStorage.setItem('tol-theme', next ? 'dark' : 'light');
    updateMetaThemeColor(next);
  }

  if (!mounted) return null;

  return (
    <button
      className={styles.toggle}
      onClick={toggle}
      aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={dark ? 'Light Mode' : 'Dark Mode'}
    >
      <div className={`${styles.track} ${dark ? styles.trackDark : ''}`}>
        <div className={styles.thumb}>
          <span className={styles.icon}>{dark ? '🌙' : '☀️'}</span>
        </div>
      </div>
    </button>
  );
}
