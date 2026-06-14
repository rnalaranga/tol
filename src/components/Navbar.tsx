'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, ChevronDown, Share2, MessageCircle, Globe, Heart, Home, Briefcase } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import styles from './Navbar.module.css';

const navLinks = [
  { label: 'Home', href: '/' },
  {
    label: 'About',
    href: '/about',
    children: [
      { label: 'Company Profile', href: '/about#profile' },
      { label: 'Mission & Vision', href: '/about#mission' },
      { label: 'Our Leadership', href: '/about#leadership' },
    ],
  },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'Micro Finance', href: '/services#micro' },
      { label: 'Personal Loans', href: '/services#personal' },
      { label: 'Business Loans', href: '/services#business' },
      { label: 'Leasing', href: '/services#leasing' },
      { label: 'Insurance', href: '/services#insurance' },
    ],
  },
  {
    label: 'Consumer Products',
    href: '/consumer',
    children: [
      { label: 'Sahana Scheme', href: '/consumer#sahana' },
      { label: 'Electronics & Appliances', href: '/consumer#electronics' },
      { label: 'Furniture & Home', href: '/consumer#furniture' },
    ],
  },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      {/* Top bar */}
      <div className={styles.topBar}>
        <div className="container">
          <div className={styles.topBarInner}>
            <div className={styles.topBarLeft}>
              <span>📞 074 067 7678</span>
              <span>✉️ info@tol.lk</span>
            </div>
            <div className={styles.topBarRight}>
              <span>Mon–Fri: 9:00 AM – 5:00 PM</span>
              <div style={{ display: 'flex', gap: '12px', marginLeft: '24px' }}>
                <a href="#" style={{ color: 'inherit' }} aria-label="Facebook"><Share2 size={14} /></a>
                <a href="#" style={{ color: 'inherit' }} aria-label="Twitter"><MessageCircle size={14} /></a>
                <a href="#" style={{ color: 'inherit' }} aria-label="LinkedIn"><Globe size={14} /></a>
                <a href="#" style={{ color: 'inherit' }} aria-label="Instagram"><Heart size={14} /></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
        <div className="container">
          <div className={styles.navInner}>
            {/* Logo */}
            <Link href="/" className={styles.logo}>
              <img src={scrolled ? "/logo-blue.png" : "/logo-white.png"} alt="The Orient Life Logo" className={styles.logoImg} />
              <div className={styles.logoText}>
                <span className={styles.logoMain}>The Orient Life</span>
                <span className={styles.logoSub}>Pvt Ltd</span>
              </div>
            </Link>

            {/* Desktop nav */}
            <ul className={styles.navLinks}>
              {navLinks.map((link) => (
                <li
                  key={link.label}
                  className={styles.navItem}
                >
                  <Link href={link.href} className={styles.navLink}>
                    {link.label}
                    {link.children && <ChevronDown size={14} />}
                  </Link>
                  {link.children && (
                    <div className={styles.dropdownWrapper}>
                      <ul className={styles.dropdown}>
                        {link.children.map((child) => (
                          <li key={child.label}>
                            <Link href={child.href} className={styles.dropdownLink}>
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ))}
            </ul>

            {/* Theme Toggle + CTA */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', position: 'relative' }}>
              <ThemeToggle />
              <Link href="/contact" className={`btn btn-primary ${styles.ctaBtn}`}>
                <Phone size={16} />
                Get Started
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              className={styles.menuToggle}
              style={{ display: mobileOpen ? 'none' : '' }}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`${styles.mobileMenu} ${mobileOpen ? styles.mobileOpen : ''}`}>
          <div className={styles.mobileHeader}>
            <Link href="/" className={styles.logo} onClick={() => setMobileOpen(false)}>
              <img src="/logo-blue.png" alt="The Orient Life Logo" className={styles.logoImg} style={{ height: '42px' }} />
              <div className={styles.logoText}>
                <span className={styles.logoMain} style={{ color: 'var(--text-dark)' }}>The Orient Life</span>
              </div>
            </Link>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <ThemeToggle />
              <button
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
                style={{ padding: '8px', color: 'var(--text-dark)', display: 'flex' }}
              >
                <X size={28} />
              </button>
            </div>
          </div>

          <div style={{ flex: 1, overflowY: 'auto', paddingBottom: '100px' }}>
            <ul className={styles.mobileLinks}>
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className={styles.mobileLink}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                  {link.children && (
                    <ul className={styles.mobileSub}>
                      {link.children.map((child) => (
                        <li key={child.label}>
                          <Link
                            href={child.href}
                            className={styles.mobileSubLink}
                            onClick={() => setMobileOpen(false)}
                          >
                            — {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
            <Link href="/contact" className="btn btn-primary" style={{ margin: '16px 24px', display: 'flex', justifyContent: 'center' }} onClick={() => setMobileOpen(false)}>
              Get Started
            </Link>
            <div style={{ padding: '24px', display: 'flex', justifyContent: 'center', gap: '20px' }}>
              <a href="#" style={{ color: 'var(--text-muted)' }} aria-label="Facebook"><Share2 size={20} /></a>
              <a href="#" style={{ color: 'var(--text-muted)' }} aria-label="Twitter"><MessageCircle size={20} /></a>
              <a href="#" style={{ color: 'var(--text-muted)' }} aria-label="LinkedIn"><Globe size={20} /></a>
              <a href="#" style={{ color: 'var(--text-muted)' }} aria-label="Instagram"><Heart size={20} /></a>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Bar */}
      <div className={`${styles.bottomBar} ${scrolled ? styles.bottomBarScrolled : ''}`}>
        <Link href="/" className={styles.bottomLink}>
          <Home size={22} />
          <span>Home</span>
        </Link>
        <Link href="/services" className={styles.bottomLink}>
          <Briefcase size={22} />
          <span>Services</span>
        </Link>

        <Link href="/contact" className={styles.bottomLink}>
          <Phone size={22} />
          <span>Contact</span>
        </Link>
      </div>
    </>
  );
}
