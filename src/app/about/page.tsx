import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTABanner from '@/components/CTABanner';
import styles from './about.module.css';

export const metadata = {
  title: 'About Our Micro Finance Journey | The Orient Life',
  description: 'Learn about how Orient Life Pvt Ltd has been empowering Sri Lankan communities and small businesses through accessible Micro Finance since 2004.',
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      
      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <img src="/images/about-banner.png" alt="Orient Life Headquarters" className={styles.heroImg} />
          <div className={styles.heroOverlay}>
            <div className={`container ${styles.heroContainer}`}>
              <div className={styles.heroGlass}>
                <div className="section-eyebrow">Our Story</div>
                <h1 className={styles.heroTitle}>A Legacy of Trust &<br /><em>Financial Excellence</em></h1>
              </div>
            </div>
          </div>
        </section>

        {/* Company Profile */}
        <section className="section" id="profile">
          <div className="container">
            <div className={styles.profileGrid}>
              <div className={styles.profileContent}>
                <div className="section-eyebrow">Company Profile</div>
                <h2 className="section-heading">Empowering Sri Lankans<br />Since 2004</h2>
                <div className="divider-line" />
                <p className="section-subtext">
                  Orient Life Pvt Ltd was established with a singular vision: to bring transparent, reliable, and accessible financial services to the grassroots of Sri Lanka. Over the past two decades, we have pioneered Micro Finance solutions that empower small-scale entrepreneurs, farmers, and self-employed individuals to achieve their dreams.
                </p>
                <p className="section-subtext" style={{ marginTop: '16px' }}>
                  Today, we operate a network of 48 branches across the island, serving over 50,000 active clients. Through our innovative daily collection schemes, group loans, and community-focused investments, we prioritize the financial inclusion and economic independence of our people.
                </p>
                
                <div className={styles.statsRow}>
                  <div className={styles.statItem}>
                    <div className={styles.statNum}>20+</div>
                    <div className={styles.statLabel}>Years Experience</div>
                  </div>
                  <div className={styles.statItem}>
                    <div className={styles.statNum}>48</div>
                    <div className={styles.statLabel}>Branches</div>
                  </div>
                  <div className={styles.statItem}>
                    <div className={styles.statNum}>50k+</div>
                    <div className={styles.statLabel}>Happy Clients</div>
                  </div>
                </div>
              </div>
              <div className={styles.profileImgWrap}>
                <img src="/images/slide2.png" alt="Our Team" className={styles.profileImg} />
                <div className={styles.glassDeco} />
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className={`section ${styles.missionSection}`} id="mission">
          <div className="container">
            <div className={styles.missionGrid}>
              <div className={styles.missionCard}>
                <div className={styles.missionIcon}>🎯</div>
                <h3 className={styles.missionTitle}>Our Mission</h3>
                <p className="section-subtext">
                  To provide innovative, flexible, and accessible Micro Finance solutions that empower rural and urban communities to achieve financial independence, while maintaining the highest standards of integrity and grassroots customer service.
                </p>
              </div>
              <div className={styles.missionCard}>
                <div className={styles.missionIcon}>👁️</div>
                <h3 className={styles.missionTitle}>Our Vision</h3>
                <p className="section-subtext">
                  To be the pioneer in financial inclusion in Sri Lanka, recognized for uplifting lives, supporting small businesses, and fostering sustainable grassroots economic growth in every community we touch.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="section">
          <div className="container">
            <div className="text-center">
              <div className="section-eyebrow">What Drives Us</div>
              <h2 className="section-heading">Our Core Values</h2>
              <div className="divider-line center" />
            </div>
            
            <div className={styles.valuesGrid}>
              {[
                { title: 'Integrity', desc: 'We act with absolute honesty, transparency, and ethical standards in everything we do.' },
                { title: 'Customer First', desc: 'Your financial well-being is our primary focus. We listen, understand, and deliver.' },
                { title: 'Excellence', desc: 'We strive for continuous improvement and exceptional quality in our services.' },
                { title: 'Innovation', desc: 'We embrace modern solutions and technology to make finance simpler for you.' }
              ].map(v => (
                <div key={v.title} className={styles.valueCard}>
                  <h4 className={styles.valueTitle}>{v.title}</h4>
                  <p className={styles.valueDesc}>{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className={`section ${styles.teamSection}`} id="leadership">
          <div className="container">
            <div className="text-center">
              <div className="section-eyebrow">Our Leadership</div>
              <h2 className="section-heading">Meet the Board</h2>
              <div className="divider-line center" />
              <p className="section-subtext" style={{ margin: '0 auto', maxWidth: '600px', marginBottom: '48px' }}>
                Guided by decades of experience in the Sri Lankan financial sector, our leadership team is dedicated to driving innovation and securing your future.
              </p>
            </div>
            
            <div className={styles.teamGrid}>
              {[
                { name: 'Dr. Rohan Fernando', role: 'Chairman & CEO', img: '/images/team-1.png' },
                { name: 'Mrs. Anoma Silva', role: 'Chief Operating Officer', img: '/images/team-2.png' },
                { name: 'Mr. Dinesh Perera', role: 'Chief Financial Officer', img: '/images/team-3.png' }
              ].map(member => (
                <div key={member.name} className={styles.teamCard}>
                  <img src={member.img} alt={member.name} className={styles.teamImg} />
                  <div className={styles.teamInfo}>
                    <h4 className={styles.teamName}>{member.name}</h4>
                    <p className={styles.teamRole}>{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Full Team Photo */}
        <section className={`section ${styles.fullTeamSection}`}>
          <div className="container">
            <div className={styles.fullTeamWrapper}>
              <img src="/images/full-team.png" alt="Orient Life Entire Team" className={styles.fullTeamImg} />
              <div className={styles.fullTeamGlass}>
                <h3 className={styles.fullTeamTitle}>One Team. One Vision.</h3>
                <p className={styles.fullTeamDesc}>Over 200 dedicated professionals working tirelessly across 48 branches to bring you the best financial services in Sri Lanka.</p>
              </div>
            </div>
          </div>
        </section>

        <CTABanner />
      </main>
      
      <Footer />
    </>
  );
}
