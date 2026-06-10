import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTABanner from '@/components/CTABanner';
import styles from './news.module.css';
import { ArrowRight, Calendar, Clock, Tag } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Latest News & Updates | Orient Life',
  description: 'Stay informed with the latest updates, announcements, and Micro Finance news from Orient Life.',
};

const allNews = [
  {
    tag: 'Community',
    date: 'May 20, 2026',
    readTime: '4 min read',
    title: 'New Micro Loans Launched for Community Societies',
    excerpt: 'Orient Life introduces a dedicated micro-loan scheme for registered community societies, empowering local groups to fund collective projects with zero collateral.',
    color: '#C9A84C',
  },
  {
    tag: 'Consumer Products',
    date: 'April 20, 2026',
    readTime: '3 min read',
    title: 'Introducing Sahana — Get Consumer Goods on Zero-Interest Monthly Instalments',
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
    title: 'Orient Life Opens 48th Branch in Jaffna — Expanding Island-wide',
    excerpt: 'In our continued commitment to serve all Sri Lankans, Orient Life proudly inaugurates its 48th branch, bringing premium financial services to the Northern Province.',
    color: '#1B3FA0',
  },
  {
    tag: 'Micro Finance',
    date: 'March 15, 2026',
    readTime: '5 min read',
    title: 'Empowering Women: Group Loan Initiative Reaches 10,000 Milestone',
    excerpt: 'Our Micro Finance group loan program has successfully empowered over 10,000 women entrepreneurs across Sri Lanka, fostering rural economic growth.',
    color: '#C9A84C',
  },
  {
    tag: 'Community',
    date: 'February 22, 2026',
    readTime: '3 min read',
    title: 'Orient Life Sponsors Annual Farmer Welfare Program',
    excerpt: 'Supporting our agricultural backbone, Orient Life sponsored the annual farmer welfare program in Polonnaruwa, providing essential equipment and training.',
    color: '#1B3FA0',
  },
  {
    tag: 'Digital',
    date: 'January 10, 2026',
    readTime: '2 min read',
    title: 'Launch of New Online Loan Portal for Faster Approvals',
    excerpt: 'Experience seamless borrowing with our new digital portal. Apply for personal and business loans online and get approvals within 24 hours.',
    color: '#1B3FA0',
  }
];

export default function NewsPage() {
  return (
    <>
      <Navbar />
      
      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <img src="/images/contact-banner.png" alt="Orient Life News" className={styles.heroImg} />
          <div className={styles.heroOverlay}>
            <div className={`container ${styles.heroContainer}`}>
              <div className={styles.heroGlass}>
                <div className="section-eyebrow">News & Insights</div>
                <h1 className={styles.heroTitle}>Stay <em>Informed</em></h1>
              </div>
            </div>
          </div>
        </section>

        {/* News Grid */}
        <section className={`section ${styles.newsSection}`}>
          <div className="container">
            <div className={styles.grid}>
              {allNews.map((article, i) => (
                <article key={i} className={styles.card}>
                  <div className={styles.cardTop} style={{ background: `linear-gradient(135deg, ${article.color}15, ${article.color}05)` }}>
                    <div className={styles.tag} style={{ color: article.color, background: `${article.color}10`, border: `1px solid ${article.color}25` }}>
                      <Tag size={12} />
                      {article.tag}
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

        <CTABanner />
      </main>
      
      <Footer />
    </>
  );
}
