import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTABanner from '@/components/CTABanner';
import styles from './investments.module.css';
import Link from 'next/link';

export const metadata = {
  title: 'High-Yield Fixed Deposits & Investments | Orient Life',
  description: 'Grow your wealth securely with Orient Life. We offer Sri Lanka’s most competitive fixed deposit rates up to 14% p.a., supporting our Micro Finance initiatives.',
};

export default function InvestmentsPage() {
  return (
    <>
      <Navbar />
      
      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <img src="/images/investments-banner.png" alt="Orient Life Investments" className={styles.heroImg} />
          <div className={styles.heroOverlay}>
            <div className={`container ${styles.heroContainer}`}>
              <div className={styles.heroGlass}>
                <div className="section-eyebrow">Investments</div>
                <h1 className={styles.heroTitle}>Grow Your Wealth<br /><em>Securely with Us</em></h1>
              </div>
            </div>
          </div>
        </section>

        <div className="container">
          <div className={styles.layout}>
            {/* Sidebar Navigation */}
            <aside className={styles.sidebar}>
              <div className={styles.sidebarGlass}>
                <h3 className={styles.sidebarTitle}>Investments Menu</h3>
                <nav className={styles.sidebarNav}>
                  <Link href="#fixed" className={styles.sidebarLink}>Fixed Deposits</Link>
                  <Link href="#plans" className={styles.sidebarLink}>Investment Plans</Link>
                  <Link href="#calculator" className={styles.sidebarLink}>ROI Calculator</Link>
                </nav>
              </div>
            </aside>

            {/* Content Area */}
            <div className={styles.content}>
              {/* Fixed Deposits */}
              <section id="fixed" className={styles.serviceSection}>
                <div className="section-eyebrow">Guaranteed Returns</div>
                <h2 className="section-heading">Fixed Deposits</h2>
                <div className="divider-line" />
                <p className="section-subtext">
                  Secure your financial future with Orient Life Fixed Deposits. Enjoy some of the highest interest rates in the market, coupled with the unmatched security of a fully regulated financial institution. Choose a tenure that works for you, from 1 month to 5 years.
                </p>
                <div className={styles.featureGrid}>
                  <div className={styles.featureCard}>
                    <h4>Up to 14% p.a.</h4>
                    <p>Maximize your earnings with our highly competitive interest rates.</p>
                  </div>
                  <div className={styles.featureCard}>
                    <h4>Senior Citizen Bonus</h4>
                    <p>Special higher rates for our valued senior citizens (aged 60+).</p>
                  </div>
                  <div className={styles.featureCard}>
                    <h4>Flexible Payouts</h4>
                    <p>Choose monthly, annually, or at-maturity interest payouts.</p>
                  </div>
                </div>
              </section>

              {/* Investment Plans */}
              <section id="plans" className={styles.serviceSection}>
                <div className="section-eyebrow">Future Planning</div>
                <h2 className="section-heading">Investment Plans</h2>
                <div className="divider-line" />
                <p className="section-subtext">
                  Whether you are saving for your child's education, a dream home, or retirement, our customized investment plans help you achieve your goals systematically through disciplined saving.
                </p>
                <div className={styles.featureGrid}>
                  <div className={styles.featureCard}>
                    <h4>Children's Savings</h4>
                    <p>Build a strong foundation for your child's future education.</p>
                  </div>
                  <div className={styles.featureCard}>
                    <h4>Retirement Fund</h4>
                    <p>Ensure a comfortable and independent life post-retirement.</p>
                  </div>
                </div>
              </section>

              {/* Calculator Placeholder */}
              <section id="calculator" className={styles.serviceSection}>
                <div className="section-eyebrow">Plan Ahead</div>
                <h2 className="section-heading">ROI Calculator</h2>
                <div className="divider-line" />
                <p className="section-subtext">
                  Use our interactive calculator to project your returns based on different deposit amounts and tenures. (Coming soon in Phase 2)
                </p>
                <div className={styles.calcPlaceholder}>
                  <div className={styles.calcIcon}>📊</div>
                  <h3>ROI Calculator</h3>
                  <p>Our advanced ROI calculator is currently being updated to reflect the latest rates. Please check back soon or contact our advisors for a personalized quote.</p>
                  <Link href="/contact" className="btn-outline" style={{ marginTop: '20px' }}>Contact an Advisor</Link>
                </div>
              </section>

            </div>
          </div>
        </div>

        <CTABanner />
      </main>
      
      <Footer />
    </>
  );
}
