'use client';
import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './Hero.module.css';

const slides = [
  {
    image: '/images/slide1.jpg',
    title: "Empowering Sri Lanka with\nMicro Finance Solutions",
    subtitle: 'Accessible daily collection loans and small business financing to uplift your life.',
  },
  {
    image: '/images/slide2.jpg',
    title: 'Fueling Dreams\nAt the Grassroots',
    subtitle: 'Group loans and micro-credit facilities for rural entrepreneurs.',
  },
  {
    image: '/images/slide3.jpg',
    title: 'Consumer Goods\nMade Affordable',
    subtitle: 'Own appliances, electronics and furniture through our zero-interest Sahana Scheme.',
  },
];

export default function Hero() {
  const [cur, setCur] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCur(p => (p + 1) % slides.length), 7000);
    return () => clearInterval(t);
  }, []);

  const prev = () => setCur(p => (p - 1 + slides.length) % slides.length);
  const next = () => setCur(p => (p + 1) % slides.length);

  return (
    <div className={styles.sliderWrap}>
      {slides.map((s, i) => (
        <div key={i} className={`${styles.slide} ${i === cur ? styles.slideActive : ''}`}>
          <img src={s.image} alt={`slide-${i}`} className={styles.slideImg} />
          <div className={styles.slideOverlay} />
          <div className={styles.sliderQuote}>
            <h2>
              {s.title.split('\n').map((line, j) => (
                <span key={j}>{line}{j < s.title.split('\n').length - 1 && <br />}</span>
              ))}
            </h2>
            <p>{s.subtitle}</p>
          </div>
        </div>
      ))}

      <button className={`${styles.arrow} ${styles.arrowPrev}`} onClick={prev} aria-label="Previous">
        <ChevronLeft size={22} />
      </button>
      <button className={`${styles.arrow} ${styles.arrowNext}`} onClick={next} aria-label="Next">
        <ChevronRight size={22} />
      </button>

      <div className={styles.indicators}>
        {slides.map((_, i) => (
          <button key={i} onClick={() => setCur(i)}
            className={`${styles.dot} ${i === cur ? styles.dotActive : ''}`} />
        ))}
      </div>
    </div>
  );
}
