import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTABanner from '@/components/CTABanner';
import styles from './services.module.css';
import Link from 'next/link';

export const metadata = {
  title: 'Micro Finance & Business Services | The Orient Life',
  description: 'Explore our range of financial services including Micro Finance, Daily Collection Loans, SME Financing, and Vehicle Leasing in Sri Lanka.',
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      
      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <img src="/images/services-banner.png" alt="Orient Life Services" className={styles.heroImg} />
          <div className={styles.heroOverlay}>
            <div className={`container ${styles.heroContainer}`}>
              <div className={styles.heroGlass}>
                <div className="section-eyebrow">Our Services</div>
                <h1 className={styles.heroTitle}>Comprehensive Financial<br /><em>Solutions for You</em></h1>
              </div>
            </div>
          </div>
        </section>

        <div className="container">
          <div className={styles.layout}>
            {/* Sidebar Navigation */}
            <aside className={styles.sidebar}>
              <div className={styles.sidebarGlass}>
                <h3 className={styles.sidebarTitle}>Services Menu</h3>
                <nav className={styles.sidebarNav}>
                  <Link href="#micro" className={styles.sidebarLink}>Micro Finance</Link>
                  <Link href="#personal" className={styles.sidebarLink}>Personal Loans</Link>
                  <Link href="#business" className={styles.sidebarLink}>Business Financing</Link>
                  <Link href="#leasing" className={styles.sidebarLink}>Vehicle Leasing</Link>
                  <Link href="#insurance" className={styles.sidebarLink}>Insurance Products</Link>
                </nav>
              </div>
            </aside>

            {/* Content Area */}
            <div className={styles.content}>
              {/* Micro Finance */}
              <section id="micro" className={styles.serviceSection}>
                <div className="section-eyebrow">Grassroots Empowerment</div>
                <h2 className="section-heading">Micro Finance</h2>
                <div className="divider-line" />
                <p className="section-subtext">
                  Our flagship Micro Finance solutions are designed to uplift rural and urban entrepreneurs. We provide accessible capital to small-scale businesses, farmers, and self-employed individuals with highly flexible terms.
                </p>
                <div className={styles.featureGrid}>
                  <div className={styles.featureCard}>
                    <h4>Daily Collection</h4>
                    <p>Convenient daily or weekly collection right at your doorstep so you never miss a payment.</p>
                  </div>
                  <div className={styles.featureCard}>
                    <h4>No Collateral</h4>
                    <p>Access small business capital without the burden of heavy collateral or guarantors.</p>
                  </div>
                  <div className={styles.featureCard}>
                    <h4>Group Loans</h4>
                    <p>Collaborative financing empowering women and community groups to grow together.</p>
                  </div>
                </div>
              </section>

              {/* Personal Loans */}
              <section id="personal" className={styles.serviceSection}>
                <div className="section-eyebrow">Quick Cash</div>
                <h2 className="section-heading">Personal Loans</h2>
                <div className="divider-line" />
                <p className="section-subtext">
                  Life is full of unexpected moments. Whether you are planning a dream wedding, managing medical emergencies, or renovating your home, our Personal Loans provide the financial cushion you need without the hassle.
                </p>
                <div className={styles.featureGrid}>
                  <div className={styles.featureCard}>
                    <h4>Fast Disbursal</h4>
                    <p>Funds transferred to your account within 24 hours of approval.</p>
                  </div>
                  <div className={styles.featureCard}>
                    <h4>Minimal Documentation</h4>
                    <p>Simple and straightforward application process with basic KYC.</p>
                  </div>
                  <div className={styles.featureCard}>
                    <h4>Flexible Repayment</h4>
                    <p>Choose a tenure that fits your monthly income and budget.</p>
                  </div>
                </div>
              </section>

              {/* Business Financing */}
              <section id="business" className={styles.serviceSection}>
                <div className="section-eyebrow">Growth Capital</div>
                <h2 className="section-heading">Business Financing</h2>
                <div className="divider-line" />
                <p className="section-subtext">
                  Fuel the growth of your enterprise with our tailored business loans. Designed for MSMEs and corporate clients, we offer working capital, machinery financing, and expansion loans with competitive rates.
                </p>
                <div className={styles.featureGrid}>
                  <div className={styles.featureCard}>
                    <h4>High Loan Limits</h4>
                    <p>Access substantial capital based on your business cash flows.</p>
                  </div>
                  <div className={styles.featureCard}>
                    <h4>MSME Focused</h4>
                    <p>Special subsidized rates for small and medium enterprises.</p>
                  </div>
                  <div className={styles.featureCard}>
                    <h4>Dedicated Managers</h4>
                    <p>Expert financial advisors to guide your business growth strategy.</p>
                  </div>
                </div>
              </section>

              {/* Vehicle Leasing */}
              <section id="leasing" className={styles.serviceSection}>
                <div className="section-eyebrow">Drive Today</div>
                <h2 className="section-heading">Vehicle Leasing</h2>
                <div className="divider-line" />
                <p className="section-subtext">
                  Get behind the wheel of your dream vehicle with Orient Life Leasing. We offer flexible leasing solutions for brand new, reconditioned, and registered vehicles with structured payments that suit your wallet.
                </p>
                <div className={styles.featureGrid}>
                  <div className={styles.featureCard}>
                    <h4>Up to 90% Financing</h4>
                    <p>Drive away with minimal initial down payment on selected models.</p>
                  </div>
                  <div className={styles.featureCard}>
                    <h4>Doorstep Service</h4>
                    <p>We come to you to collect documents and process the lease.</p>
                  </div>
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
