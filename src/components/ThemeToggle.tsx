'use client';
import { useEffect, useState } from 'react';
import styles from './ThemeToggle.module.css';

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [dark, setDark] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem('tol-theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = saved ? saved === 'dark' : prefersDark;
    setDark(isDark);
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    updateMetaThemeColor(isDark);

    // Show friendly message on load
    setShowTooltip(true);
    const timer = setTimeout(() => {
      setShowTooltip(false);
    }, 2500);

    return () => clearTimeout(timer);
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

  const isDarkTheme = mounted ? dark : false;

  return (
    <div style={{ position: 'relative', display: 'flex' }}>
      <button
        className={styles.toggle}
        onClick={toggle}
        aria-label={isDarkTheme ? 'Switch to light mode' : 'Switch to dark mode'}
        title={isDarkTheme ? 'Light Mode' : 'Dark Mode'}
      >
        <div className={`${styles.track} ${isDarkTheme ? styles.trackDark : ''}`}>
          <div className={styles.thumb}>
            {mounted && (
              <span className={styles.icon}>{isDarkTheme ? '🌙' : '☀️'}</span>
            )}
          </div>
        </div>
      </button>

      {/* Friendly Tooltip */}
      {mounted && (
        <div className={`${styles.tooltip} ${showTooltip ? styles.tooltipVisible : ''}`}>
          You can switch between Dark and Light Theme
        </div>
      )}
    </div>
  );
}
