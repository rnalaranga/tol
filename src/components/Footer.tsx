import Link from 'next/link';
import { Phone, Mail, MapPin, Share2, MessageCircle, Globe, Heart, PlayCircle, ArrowRight } from 'lucide-react';
import styles from './Footer.module.css';

const quickLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Micro Finance', href: '/services#micro' },
  { label: 'Personal Loans', href: '/services#personal' },
  { label: 'Business Loans', href: '/services#business' },
  { label: 'Consumer Products', href: '/consumer' },
  { label: 'Vehicle Leasing', href: '/services#leasing' },
  { label: 'Contact Us', href: '/contact' },
];

const services = [
  { label: 'Micro Finance', href: '/services#micro' },
  { label: 'Personal Finance', href: '/services' },
  { label: 'Business Solutions', href: '/services#business' },
  { label: 'Sahana Scheme', href: '/consumer#sahana' },
  { label: 'Consumer Products', href: '/consumer' },
  { label: 'Insurance Products', href: '/services#insurance' },
  { label: 'Branch Locator', href: '/contact' },
];

const socials = [
  { icon: Share2, href: '#', label: 'Facebook' },
  { icon: MessageCircle, href: '#', label: 'Twitter' },
  { icon: Globe, href: '#', label: 'LinkedIn' },
  { icon: Heart, href: '#', label: 'Instagram' },
  { icon: PlayCircle, href: '#', label: 'YouTube' },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div className="container">
          <div className={styles.grid}>
            {/* Brand column */}
            <div className={styles.brandCol}>
              <Link href="/" className={styles.logo}>
                <img src="/logo-white.png" alt="The Orient Life Logo" className={styles.logoImg} />
                <div className={styles.logoText}>
                  <span className={styles.logoMain}>The Orient Life</span>
                  <span className={styles.logoSub}>Pvt Ltd</span>
                </div>
              </Link>
              <p className={styles.brandDesc}>
                Orient Life Pvt Ltd is a trusted micro finance and consumer services company committed to
                uplifting lives through accessible, transparent, and community-focused financial solutions.
              </p>
              <div className={styles.socials}>
                {socials.map((s) => {
                  const Icon = s.icon;
                  return (
                    <a key={s.label} href={s.href} className={styles.socialBtn} aria-label={s.label}>
                      <Icon size={17} />
                    </a>
                  );
                })}
              </div>
              <div className={styles.newsletter}>
                <p className={styles.newsletterLabel}>Get Financial Tips in Your Inbox</p>
                <div className={styles.newsletterForm}>
                  <input type="email" placeholder="Your email address" className={styles.newsletterInput} />
                  <button className={styles.newsletterBtn} aria-label="Subscribe">
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </div>

            {/* Quick links */}
            <div>
              <h4 className={styles.colTitle}>Quick Links</h4>
              <ul className={styles.linkList}>
                {quickLinks.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className={styles.link}>
                      <ArrowRight size={13} /> {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className={styles.colTitle}>Our Services</h4>
              <ul className={styles.linkList}>
                {services.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className={styles.link}>
                      <ArrowRight size={13} /> {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className={styles.colTitle}>Contact Us</h4>
              <div className={styles.contactList}>
                <div className={styles.contactItem}>
                  <div className={styles.contactIcon}><Phone size={15} /></div>
                  <div>
                    <div className={styles.contactLabel}>Phone</div>
                    <a href="tel:0740677678" className={styles.contactValue}>074 067 7678</a>
                  </div>
                </div>
                <div className={styles.contactItem}>
                  <div className={styles.contactIcon}><Mail size={15} /></div>
                  <div>
                    <div className={styles.contactLabel}>Email</div>
                    <a href="mailto:info@tol.lk" className={styles.contactValue}>info@tol.lk</a>
                  </div>
                </div>
                <div className={styles.contactItem}>
                  <div className={styles.contactIcon}><MapPin size={15} /></div>
                  <div>
                    <div className={styles.contactLabel}>Head Office</div>
                    <div className={styles.contactValue}>No 31 Station Rd,<br />Negombo 11500</div>
                  </div>
                </div>
              </div>

              <div className={styles.hours}>
                <div className={styles.hoursTitle}>Business Hours</div>
                <div className={styles.hoursRow}>
                  <span>Mon – Fri</span>
                  <span>9:00 AM – 5:00 PM</span>
                </div>
                <div className={styles.hoursRow}>
                  <span>Saturday</span>
                  <span>9:00 AM – 1:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <div className="container">
          <div className={styles.bottomInner}>
            <div className={styles.copyrightBlock}>
              <p className={styles.copyright}>
                © {new Date().getFullYear()} The Orient Life Pvt Ltd. All rights reserved.
              </p>
              <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', marginTop: '4px', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                Designed and Developed by <strong style={{ color: 'rgba(255,255,255,0.7)' }}>RASHITHA NALARANGA</strong>
              </p>
            </div>
            <div className={styles.legalLinks}>
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/terms">Terms of Use</Link>
              <Link href="/disclaimer">Disclaimer</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
