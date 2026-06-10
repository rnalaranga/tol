'use client';
import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import styles from './Testimonials.module.css';

const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'Business Owner, Colombo',
    rating: 5,
    text: 'Orient Life completely transformed my business. The business loan process was seamless and the team was incredibly supportive throughout. I received the funds within 48 hours!',
    initials: 'RK',
    color: '#1B3FA0',
  },
  {
    name: 'Nirmala Perera',
    role: 'Homemaker, Kandy',
    rating: 5,
    text: 'Through the Sahana Scheme I was able to get a refrigerator and a washing machine for my family without any interest. The monthly payment is so easy and the staff were extremely helpful throughout.',
    initials: 'NP',
    color: '#C9A84C',
  },
  {
    name: 'Sanjay Fernando',
    role: 'Engineer, Galle',
    rating: 5,
    text: "Got my car through Orient Life's leasing facility. The interest rate was the best I found anywhere. The process from application to vehicle delivery took just 3 days. Absolutely brilliant!",
    initials: 'SF',
    color: '#1B3FA0',
  },
  {
    name: 'Priya Wickramasinghe',
    role: 'Doctor, Negombo',
    rating: 5,
    text: 'The personal loan I received helped me set up my private clinic. Orient Life understood my needs perfectly and structured a repayment plan that worked for my income cycle. Highly recommended.',
    initials: 'PW',
    color: '#1B3FA0',
  },
  {
    name: 'Mohamed Rizwan',
    role: 'Retailer, Batticaloa',
    rating: 5,
    text: 'Being in a remote area, I was worried about accessibility. Orient Life\'s branch in my town has been exceptional — friendly staff, quick service, and always ready to help.',
    initials: 'MR',
    color: '#C9A84C',
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => (a === 0 ? testimonials.length - 1 : a - 1));
  const next = () => setActive((a) => (a === testimonials.length - 1 ? 0 : a + 1));

  const t = testimonials[active];

  return (
    <section className={styles.section}>
      <div className={styles.bgGlow} />

      <div className="container">
        <div className={styles.header}>
          <div className="section-eyebrow" style={{ color: 'var(--gold-light)' }}>Testimonials</div>
          <h2 className="section-heading" style={{ color: '#fff' }}>
            What Our<br /><em>Clients Say</em>
          </h2>
          <div className="divider-line center" />
        </div>

        <div className={styles.card}>
          <div className={styles.quoteIcon}>
            <Quote size={40} />
          </div>

          <div className={styles.stars}>
            {[...Array(t.rating)].map((_, i) => (
              <Star key={i} size={22} fill="var(--gold)" color="var(--gold)" />
            ))}
          </div>

          <p className={styles.quoteText}>"{t.text}"</p>

          <div className={styles.author}>
            <div className={styles.avatar} style={{ background: t.color }}>
              {t.initials}
            </div>
            <div>
              <div className={styles.authorName}>{t.name}</div>
              <div className={styles.authorRole}>{t.role}</div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className={styles.navRow}>
          <button className={styles.navBtn} onClick={prev} aria-label="Previous">
            <ChevronLeft size={24} />
          </button>

          <div className={styles.dots}>
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`${styles.dot} ${i === active ? styles.dotActive : ''}`}
                onClick={() => setActive(i)}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>

          <button className={styles.navBtn} onClick={next} aria-label="Next">
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}
