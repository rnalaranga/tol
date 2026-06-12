'use client';
import Link from 'next/link';
import { ArrowRight, Calendar, Clock, Tag } from 'lucide-react';
import styles from './LatestNews.module.css';

const news = [
  {
    tag: 'Consumer Products',
    date: 'May 25, 2026',
    readTime: '3 min read',
    title: 'Sahana Scheme — Own Your Dream Appliance on Zero-Interest Instalments',
    excerpt: 'Orient Life launches the Sahana consumer scheme, enabling families to acquire electronics, appliances and furniture through affordable monthly payments with absolutely no interest.',
    color: '#C9A84C',
  },
  {
    tag: 'Business Finance',
    date: 'April 12, 2026',
    readTime: '4 min read',
    title: 'New MSME Loan Package Launched for Small Business Owners',
    excerpt: 'Orient Life introduces a specially crafted loan package for micro, small, and medium enterprises with ultra-low interest rates and flexible repayment plans.',
    color: '#1B3FA0',
  },
  {
    tag: 'Corporate News',
    date: 'March 28, 2026',
    readTime: '2 min read',
    title: 'The Orient Life Reaches 50,000 Active Community Members',
    excerpt: 'We are thrilled to announce a major milestone as our micro-finance and consumer goods network grows to support over 50,000 families across the nation.',
    color: '#1B3FA0',
  },
];

export default function LatestNews() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <div>
            <div className="section-eyebrow">Latest News</div>
            <h2 className="section-heading">
              Stay <em>Informed</em>
            </h2>
            <div className="divider-line" />
          </div>
          <Link href="/news" className="btn-outline">
            View All News <ArrowRight size={16} />
          </Link>
        </div>

        <div className={styles.grid}>
          {news.map((article, i) => (
            <article key={i} className={styles.card}>
              <div className={styles.cardTop} style={{ background: `linear-gradient(135deg, ${article.color}15, ${article.color}05)` }}>
                <div className={styles.tag} style={{ color: article.color, background: `${article.color}10`, border: `1px solid ${article.color}25` }}>
                  <Tag size={12} />
                  {article.tag}
                </div>
                <div className={styles.number} style={{ color: `${article.color}15` }}>
                  0{i + 1}
                </div>
              </div>

              <div className={styles.body}>
                <div className={styles.meta}>
                  <span><Calendar size={14} /> {article.date}</span>
                  <span><Clock size={14} /> {article.readTime}</span>
                </div>

                <h3 className={styles.title}>{article.title}</h3>
                <p className={styles.excerpt}>{article.excerpt}</p>

                <Link href="/news" className={styles.readMore} style={{ color: article.color }}>
                  Read More <ArrowRight size={14} />
                </Link>
              </div>
              <div className={styles.accent} style={{ background: article.color }} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
