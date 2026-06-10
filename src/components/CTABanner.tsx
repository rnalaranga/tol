'use client';
import Link from 'next/link';
import { ArrowRight, Phone } from 'lucide-react';
import styles from './CTABanner.module.css';

export default function CTABanner() {
  return (
    <section className={styles.section}>
      <div className={styles.bgGlow} />

      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          <div className="section-eyebrow" style={{ color: 'var(--gold-light)' }}>
            Take the First Step
          </div>
          <h2 className={styles.title}>
            Ready to Build Your<br /><em>Financial Future?</em>
          </h2>
          <p className={styles.desc}>
            Speak to one of our expert advisors today. Whether you are looking to invest, get a loan,
            or plan for retirement — we have the perfect solution for you.
          </p>

          <div className={styles.actions}>
            <Link href="/contact" className="btn-gold">
              Get Free Consultation <ArrowRight size={18} />
            </Link>
            <a href="tel:+94112345678" className={styles.callBtn}>
              <div className={styles.callIcon}><Phone size={20} /></div>
              <div>
                <div className={styles.callLabel}>Call Us Now</div>
                <div className={styles.callNumber}>+94 11 2 345 678</div>
              </div>
            </a>
          </div>

          <div className={styles.metaRow}>
            <div className={styles.metaItem}>
              <strong>Free</strong> Consultation
            </div>
            <div className={styles.metaDivider} />
            <div className={styles.metaItem}>
              <strong>24/7</strong> Support
            </div>
            <div className={styles.metaDivider} />
            <div className={styles.metaItem}>
              <strong>Fast</strong> Approval
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
