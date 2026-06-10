import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTABanner from '@/components/CTABanner';
import styles from './consumer.module.css';
import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';

export const metadata = {
  title: 'Consumer Products & Sahana Scheme | Orient Life',
  description: 'Get electronics, appliances, and furniture on easy zero-interest monthly instalments through the Orient Life Sahana Scheme. Sahana Milata Gewimata.',
  keywords: 'Sahana Scheme, Consumer Products, Zero Interest, Monthly Instalments, Electronics Loans, Furniture Loans, Orient Life',
};

const categories = [
  {
    id: 'electronics',
    icon: '📺',
    title: 'Electronics & Appliances',
    desc: 'From smart TVs to refrigerators, washing machines to air conditioners — get any appliance you need today and pay comfortably each month.',
    items: ['Smart TVs', 'Refrigerators', 'Washing Machines', 'Air Conditioners', 'Fans & Coolers', 'Rice Cookers', 'Blenders', 'Water Pumps'],
    color: '#1B3FA0',
  },
  {
    id: 'furniture',
    icon: '🛋️',
    title: 'Furniture & Home',
    desc: 'Furnish your dream home with quality sofas, beds, wardrobes, and dining sets — all available on our easy monthly payment scheme.',
    items: ['Sofas & Lounge Sets', 'Beds & Mattresses', 'Wardrobes', 'Dining Tables', 'Cabinets', 'Study Tables', 'Shelving Units'],
    color: '#C9A84C',
  },
  {
    id: 'mobile',
    icon: '📱',
    title: 'Gadgets & Mobile',
    desc: 'Stay connected and productive with the latest smartphones, laptops, tablets, and accessories — all with zero added interest.',
    items: ['Smartphones', 'Laptops', 'Tablets', 'Printers', 'CCTV Systems', 'Solar Panels', 'Inverters'],
    color: '#1B3FA0',
  },
];

const steps = [
  { num: '01', title: 'Choose Your Product', desc: 'Browse our wide catalogue of approved consumer goods across our branch network.' },
  { num: '02', title: 'Quick Approval', desc: 'Submit minimal documents and receive approval within 24 hours.' },
  { num: '03', title: 'Simple Instalments', desc: 'Repay in equal monthly instalments — no hidden interest charges, ever.' },
  { num: '04', title: 'Take It Home Today', desc: 'Collect your product immediately or get doorstep delivery arranged.' },
];

const whyCards = [
  { icon: '✅', title: 'Zero Interest', desc: 'Pay only the product price split equally over months. No interest. No extra charges.' },
  { icon: '📋', title: 'Minimal Documents', desc: 'Just your NIC and a recent utility bill. Simple, fast, and hassle-free.' },
  { icon: '🏠', title: 'Doorstep Service', desc: 'Our agents come to your home for documentation and even delivery.' },
  { icon: '📅', title: 'Flexible Tenures', desc: 'Choose a 6, 12, 18 or 24-month repayment plan that fits your income.' },
  { icon: '🤝', title: 'Community First', desc: 'Designed specifically for everyday families and small earners in Sri Lanka.' },
  { icon: '🔒', title: 'Fully Transparent', desc: 'No surprises. Everything is explained clearly before you commit.' },
];

export default function ConsumerPage() {
  return (
    <>
      <Navbar />

      <main className={styles.main}>
        {/* Hero */}
        <section className={styles.hero}>
          <img src="/images/services-banner.png" alt="Consumer Products" className={styles.heroImg} />
          <div className={styles.heroOverlay}>
            <div className={`container ${styles.heroContainer}`}>
              <div className={styles.heroGlass}>
                <div className="section-eyebrow">Consumer Products</div>
                <h1 className={styles.heroTitle}>
                  Shop Today,<br /><em>Pay Comfortably</em>
                </h1>
              </div>
            </div>
          </div>
        </section>

        {/* Sahana Scheme Banner */}
        <section id="sahana" className={styles.sahanaHero}>
          <div className="container">
            <div className={styles.sahanaGrid}>
              <div>
                <div className={styles.sahanaBadge}>✦ Flagship Programme</div>
                <h2 className={styles.sahanaTitle}>
                  සහන මිලට<br />
                  <span>Gewimata</span>
                </h2>
                <p className={styles.sahanaDesc}>
                  The <strong>Orient Life Sahana Scheme</strong> makes it possible for every family to own quality electronics, appliances, and household goods — through <strong>easy, zero-interest monthly instalments</strong>. No burden. Just comfort.
                </p>
                <div className={styles.sahanaFeatures}>
                  {[
                    { icon: '🚫', title: 'Zero Interest', desc: 'Pay exactly the product price — nothing more' },
                    { icon: '⚡', title: '24-Hour Approval', desc: 'Fast processing, minimal paperwork' },
                    { icon: '🏘️', title: 'Island-wide Coverage', desc: 'Available at all 48 Orient Life branches' },
                  ].map(f => (
                    <div key={f.title} className={styles.sahanaFeature}>
                      <div className={styles.sahanaFeatureIcon}>{f.icon}</div>
                      <div className={styles.sahanaFeatureText}>
                        <h4>{f.title}</h4>
                        <p>{f.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className={styles.sahanaCtaRow} style={{ marginTop: '40px' }}>
                  <Link href="/contact" className="btn-gold">
                    Apply Now <ArrowRight size={16} />
                  </Link>
                  <Link href="#how" className="btn-outline" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.4)' }}>
                    How It Works
                  </Link>
                </div>
              </div>
              <div className={styles.sahanaIllustration}>
                {['📺', '🛋️', '❄️', '📱', '🧺', '💡', '🖨️', '🪑'].map(emoji => (
                  <div key={emoji} className={styles.sahanaProduct}>
                    <div className={styles.sahanaProductIcon}>{emoji}</div>
                    <div className={styles.sahanaProductName}>Sahana</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how" className={`section ${styles.howSection}`}>
          <div className="container">
            <div className="text-center" style={{ textAlign: 'center' }}>
              <div className="section-eyebrow">Simple Process</div>
              <h2 className="section-heading">How the Sahana Scheme Works</h2>
              <div className="divider-line center" />
            </div>
            <div className={styles.stepsGrid}>
              {steps.map(s => (
                <div key={s.num} className={styles.step}>
                  <div className={styles.stepNum}>{s.num}</div>
                  <h4 className={styles.stepTitle}>{s.title}</h4>
                  <p className={styles.stepDesc}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Product Categories */}
        <section id="categories" className="section">
          <div className="container">
            <div className="section-eyebrow">Browse Categories</div>
            <h2 className="section-heading">Available Product Ranges</h2>
            <div className="divider-line" />
            <p className="section-subtext">
              A wide range of quality consumer goods is available under the Sahana Scheme — all on zero-interest monthly instalments.
            </p>
            <div className={styles.catGrid}>
              {categories.map(cat => (
                <div key={cat.id} id={cat.id} className={styles.catCard}>
                  <div className={styles.catCardTop} style={{ background: `linear-gradient(135deg, ${cat.color}08, ${cat.color}03)` }}>
                    <div className={styles.catIcon}>{cat.icon}</div>
                    <h3 className={styles.catTitle}>{cat.title}</h3>
                    <p className={styles.catDesc}>{cat.desc}</p>
                  </div>
                  <div className={styles.catItems}>
                    {cat.items.map(item => (
                      <span key={item} className={styles.catItem}>{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Sahana */}
        <section className="section" style={{ background: 'var(--bg-light)' }}>
          <div className="container">
            <div style={{ textAlign: 'center' }}>
              <div className="section-eyebrow">Why Choose Us</div>
              <h2 className="section-heading">Why Families Love Sahana</h2>
              <div className="divider-line center" />
            </div>
            <div className={styles.whyGrid}>
              {whyCards.map(w => (
                <div key={w.title} className={styles.whyCard}>
                  <div className={styles.whyIcon}>{w.icon}</div>
                  <h4 className={styles.whyTitle}>{w.title}</h4>
                  <p className={styles.whyDesc}>{w.desc}</p>
                </div>
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
