'use client';
import { CheckCircle2, Clock, Users, Globe, HeartHandshake, Award, Handshake, ShieldCheck } from 'lucide-react';
import styles from './WhyUs.module.css';

const features = [
  { icon: Clock, title: 'Fast Approvals', desc: 'Loan approvals within 24–48 hours with minimal paperwork and digital processing.', color: '#1B3FA0' },
  { icon: ShieldCheck, title: 'Fully Licensed', desc: 'Registered and supervised by regulatory authorities ensuring your money is always safe.', color: '#1B3FA0' },
  { icon: Handshake, title: 'Community Driven', desc: 'Built for the grassroots — micro finance, group loans, and consumer schemes designed for everyday families.', color: '#C9A84C' },
  { icon: Users, title: '50,000+ Clients', desc: 'Decades of trust built through transparent dealings, genuine care, and consistent results.', color: '#1B3FA0' },
  { icon: Globe, title: 'Island-wide Network', desc: 'Accessible across the nation with expert advisors ready to serve you wherever you are.', color: '#1B3FA0' },
  { icon: HeartHandshake, title: 'Customer First', desc: 'Every decision is made with your best interests in mind. We listen, advise, and deliver.', color: '#C9A84C' },
  { icon: Award, title: 'Award-Winning', desc: 'Recognized nationally for excellence in finance, customer service, and corporate governance.', color: '#1B3FA0' },
  { icon: CheckCircle2, title: 'Transparent', desc: 'No hidden fees, no surprises. Every term, rate, and charge is clearly communicated upfront.', color: '#1B3FA0' },
];

export default function WhyUs() {
  return (
    <section className={styles.section}>
      <div className={styles.bgDeco} />
      <div className={`container ${styles.container}`}>
        <div className={styles.header}>
          <div>
            <div className="section-eyebrow">Why Orient Life?</div>
            <h2 className="section-heading">
              The Orient Life<br /><em>Advantage</em>
            </h2>
            <div className="divider-line" />
            <p className="section-subtext">
              We combine financial expertise with genuine care to deliver outcomes that truly matter for you and your family.
            </p>
          </div>

          <div className={styles.bigStat}>
            <div className={styles.bigStatNumber}>20+</div>
            <div className={styles.bigStatLabel}>Years of Excellence</div>
            <div className={styles.bigStatDesc}>
              Trusted by individuals, families, and businesses across the nation since 2004.
            </div>
          </div>
        </div>

        <div className={styles.grid}>
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div key={f.title} className={styles.card}>
                <div className={styles.iconWrap} style={{ background: `${f.color}10`, color: f.color }}>
                  <Icon size={24} />
                </div>
                <div className={styles.content}>
                  <h4 className={styles.title}>{f.title}</h4>
                  <p className={styles.desc}>{f.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
