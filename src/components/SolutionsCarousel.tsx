'use client';
import Link from 'next/link';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import styles from './SolutionsCarousel.module.css';

const solutions = [
  { image: '/images/hero2.png', cat: 'Micro Finance', title: 'Micro Finance', desc: 'Empowering local entrepreneurs with no-collateral daily/weekly collection loans.', link: '/services#micro' },
  { image: '/images/slide2.png', cat: 'Business', title: 'SME Loans', desc: 'Fast working capital for small businesses to expand and grow in a competitive market.', link: '/services#business' },
  { image: '/images/hero1.png', cat: 'Consumer', title: 'Sahana Scheme', desc: 'Get your dream appliances & consumer goods on easy monthly instalments — zero interest, zero hassle.', link: '/consumer#sahana' },
  { image: '/images/slide3.png', cat: 'Personal', title: 'Personal Loans', desc: 'Flexible personal finance with simple documentation and quick approval — designed around your needs.', link: '/services#personal' },
  { image: '/images/hero1.png', cat: 'Leasing', title: 'Vehicle Leasing', desc: 'Drive your dream vehicle with affordable leasing and vehicle loan packages tailored to your budget.', link: '/services#leasing' },
  { image: '/images/slide1.png', cat: 'Group', title: 'Group Loans', desc: 'Collaborative financing solutions designed to empower women and community groups.', link: '/services#micro' },
];

const VISIBLE = 3;

export default function SolutionsCarousel() {
  const [start, setStart] = useState(0);
  const prev = () => setStart(p => Math.max(0, p - 1));
  const next = () => setStart(p => Math.min(solutions.length - VISIBLE, p + 1));
  const visible = solutions.slice(start, start + VISIBLE);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.eyebrow}>Our Solutions</div>
          <h2 className={styles.title}>Tailored Financial Products<br />for Every Stage of Life</h2>
          <p className={styles.desc}>We understand your needs and challenges — that is why we offer solutions that truly fit your life.</p>
          <div className={styles.divider} />
        </div>

        <div className={styles.carouselWrap}>
          <button className={styles.navBtn} onClick={prev} disabled={start === 0} aria-label="Previous"><ChevronLeft size={20} /></button>
          <div className={styles.cards}>
            {visible.map(s => (
              <div key={s.title} className={styles.card}>
                <div className={styles.cardImg}>
                  <img src={s.image} alt={s.title} />
                  <span className={styles.cardCat}>{s.cat}</span>
                </div>
                <div className={styles.cardBody}>
                  <h3 className={styles.cardTitle}>{s.title}</h3>
                  <p className={styles.cardDesc}>{s.desc}</p>
                  <Link href={s.link} className={styles.cardLink}>Read More <ArrowRight size={14} /></Link>
                </div>
              </div>
            ))}
          </div>
          <button className={styles.navBtn} onClick={next} disabled={start >= solutions.length - VISIBLE} aria-label="Next"><ChevronRight size={20} /></button>
        </div>
      </div>
    </section>
  );
}
