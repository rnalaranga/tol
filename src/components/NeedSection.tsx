'use client';
import Link from 'next/link';
import { Car, DollarSign, ShoppingBag, Briefcase, ArrowRight } from 'lucide-react';
import styles from './NeedSection.module.css';

const needs = [
  {
    icon: Car,
    title: 'Need a Leasing?',
    desc: 'Drive your dream vehicle today with our flexible, low-interest vehicle leasing solutions tailored to your budget.',
    href: '/services#leasing',
    tag: 'Quick Approval',
  },
  {
    icon: DollarSign,
    title: 'Need Urgent Cash?',
    desc: 'Emergency funds within 24 hours. Our hassle-free personal loans come with minimal documentation and fast disbursement.',
    href: '/services#personal',
    tag: '24-Hour Disbursal',
  },
  {
    icon: ShoppingBag,
    title: 'Consumer Products?',
    desc: 'Get electronics, appliances, and furniture on zero-interest monthly instalments through our exclusive Sahana Scheme.',
    href: '/consumer#sahana',
    tag: 'Zero Interest',
  },
  {
    icon: Briefcase,
    title: 'Business Solutions?',
    desc: 'Fuel your enterprise with our business loans, working capital finance, and MSME-friendly flexible repayment structures.',
    href: '/services#business',
    tag: 'MSME Friendly',
  },
];

export default function NeedSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <div className="section-eyebrow">What do you need?</div>
          <h2 className="section-heading">
            Solutions Designed<br /><em>Around You</em>
          </h2>
          <div className="divider-line center" />
          <p className="section-subtext" style={{ margin: '0 auto' }}>
            Whatever your financial goal, Orient Life has a tailored solution to help you achieve it with confidence.
          </p>
        </div>

        <div className={styles.grid}>
          {needs.map((need, i) => {
            const Icon = need.icon;
            return (
              <Link
                href={need.href}
                key={need.title}
                className={styles.card}
              >
                <div className={styles.cardInner}>
                  <div className={styles.tagBadge}>{need.tag}</div>
                  <div className={styles.iconWrap}>
                    <Icon size={28} />
                  </div>
                  <h3 className={styles.cardTitle}>{need.title}</h3>
                  <p className={styles.cardDesc}>{need.desc}</p>
                  <div className={styles.viewBtn}>
                    View Details <ArrowRight size={16} />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
