'use client';
import Link from 'next/link';
import { Users } from 'lucide-react';
import styles from './WelcomeSection.module.css';

export default function WelcomeSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.eyebrow}>Welcome to The Orient Life</div>
          <h2 className={styles.title}>
            Where Trust Meets<br />
            <em>Financial Excellence</em>
          </h2>
          <div className={styles.divider} />
          <blockquote className={styles.quote}>
            Life is short — let us help you make the right financial choices, at the right time.
          </blockquote>
          <p className={styles.desc}>
            Orient Life Pvt Ltd is a trusted financial services provider committed to uplifting
            the lives of Sri Lankan families through simple, accessible, and transparent finance.
            From micro finance to consumer products and business funding — we are here for you.
          </p>
          <div className={styles.btns}>
            <Link href="/about" className="btn-primary">Explore Our Story</Link>
            <Link href="/contact" className="btn-outline">Contact Us</Link>
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.decoRing} />
          <div className={styles.imgFrame}>
            <img src="/images/slide2.png" alt="Orient Life" className={styles.img} />
          </div>
          <div className={styles.floatCard}>
            <div className={styles.floatCardIcon}>
              <Users size={22} color="#fff" />
            </div>
            <div>
              <div className={styles.floatCardNum}>50,000+</div>
              <div className={styles.floatCardLbl}>Happy Clients</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
