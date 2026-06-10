'use client';
import Link from 'next/link';
import { ArrowRight, ShoppingBag, UserCheck, Building2, ShieldCheck, Car, Users } from 'lucide-react';
import styles from './ServicesGrid.module.css';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const services = [
  {
    icon: UserCheck,
    title: 'Personal Loans',
    desc: 'Quick personal loans with flexible repayment up to 60 months. Minimal documentation, fast approval within 48 hours.',
    features: ['Up to Rs. 5 Million', 'Low Interest Rates', '48-hour Approval'],
    href: '/services#personal',
    color: '#1a3fc4',
  },
  {
    icon: Building2,
    title: 'Business Loans',
    desc: 'Empower your business with working capital finance, term loans, and trade finance for enterprises of all sizes.',
    features: ['Up to Rs. 50 Million', 'Flexible Tenure', 'MSME Friendly'],
    href: '/services#business',
    color: '#6d28d9',
  },
  {
    icon: Car,
    title: 'Vehicle Leasing',
    desc: 'Drive your dream vehicle with our competitive leasing rates for cars, vans, trucks and heavy machinery.',
    features: ['Cars & Commercial', 'Low Down Payment', 'Island-wide Service'],
    href: '/services#leasing',
    color: '#0077b6',
  },
  {
    icon: ShoppingBag,
    title: 'Consumer Products',
    desc: 'Own electronics, appliances and furniture on zero-interest monthly instalments through the exclusive Sahana Scheme.',
    features: ['Zero Interest', 'Easy Monthly Pay', 'Wide Product Range'],
    href: '/consumer#sahana',
    color: '#c9a84c',
  },
  {
    icon: Users,
    title: 'Society & Group Loans',
    desc: 'Micro loans for registered community societies, enabling collective growth and shared financial empowerment.',
    features: ['No Collateral', 'Community Groups', 'Flexible Terms'],
    href: '/services#micro',
    color: '#059669',
  },
  {
    icon: ShieldCheck,
    title: 'Insurance',
    desc: 'Comprehensive life and general insurance products to protect what matters most — your family, health, and assets.',
    features: ['Life Insurance', 'General Insurance', '24/7 Claims Support'],
    href: '/services#insurance',
    color: '#dc2626',
  },
];

export default function ServicesGrid() {
  const ref = useScrollAnimation();

  return (
    <section className={`section ${styles.servicesSection}`} ref={ref}>
      <div className="container">
        <div className="text-center animate-in">
          <span className="section-label">Our Solutions</span>
          <h2 className="section-title">
            Comprehensive <span>Financial Services</span>
          </h2>
          <div className="divider center" />
          <p className="section-sub center">
            From micro finance to consumer products, from personal needs to enterprise goals — we offer
            a complete spectrum of financial solutions under one roof.
          </p>
        </div>

        <div className={styles.servicesGrid}>
          {services.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <div key={svc.title} className={`animate-in delay-${i + 1} ${styles.serviceCard}`}>
                <div className={styles.serviceTop}>
                  <div className={styles.iconBox} style={{ background: `${svc.color}18`, border: `1px solid ${svc.color}30` }}>
                    <Icon size={26} color={svc.color} />
                  </div>
                  <div className={styles.serviceNumber}>0{i + 1}</div>
                </div>
                <h3 className={styles.serviceTitle}>{svc.title}</h3>
                <p className={styles.serviceDesc}>{svc.desc}</p>
                <ul className={styles.featureList}>
                  {svc.features.map((f) => (
                    <li key={f} style={{ '--dot-color': svc.color } as React.CSSProperties}>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href={svc.href} className={styles.learnMore} style={{ color: svc.color }}>
                  Learn More <ArrowRight size={15} />
                </Link>
                <div className={styles.cardAccent} style={{ background: svc.color }} />
              </div>
            );
          })}
        </div>

        <div className="text-center animate-in" style={{ marginTop: '52px' }}>
          <Link href="/services" className="btn btn-primary">
            View All Services <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
