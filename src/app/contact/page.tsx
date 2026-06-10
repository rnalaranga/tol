import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTABanner from '@/components/CTABanner';
import styles from './contact.module.css';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export const metadata = {
  title: 'Contact Our Micro Finance Experts | Orient Life',
  description: 'Get in touch with Orient Life Pvt Ltd for Micro Finance inquiries, Business Loans, and Investment plans. Find a branch near you in Sri Lanka.',
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      
      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <img src="/images/contact-banner.png" alt="Contact Orient Life" className={styles.heroImg} />
          <div className={styles.heroOverlay}>
            <div className={`container ${styles.heroContainer}`}>
              <div className={styles.heroGlass}>
                <div className="section-eyebrow">Contact Us</div>
                <h1 className={styles.heroTitle}>We're Here to<br /><em>Help You</em></h1>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Info & Form */}
        <section className={`section ${styles.contactSection}`}>
          <div className="container">
            <div className={styles.grid}>
              
              {/* Info Column */}
              <div className={styles.infoCol}>
                <div className="section-eyebrow">Get in Touch</div>
                <h2 className="section-heading">How Can We Assist You?</h2>
                <div className="divider-line" />
                <p className="section-subtext">
                  Our dedicated team of financial experts is ready to answer your questions and guide you through our services. Reach out to us via phone, email, or visit our head office.
                </p>

                <div className={styles.contactList}>
                  <div className={styles.contactItem}>
                    <div className={styles.contactIcon}><Phone size={24} /></div>
                    <div>
                      <div className={styles.contactLabel}>Call Us directly</div>
                      <a href="tel:0740677678" className={styles.contactValue}>074 067 7678</a>
                    </div>
                  </div>
                  <div className={styles.contactItem}>
                    <div className={styles.contactIcon}><Mail size={24} /></div>
                    <div>
                      <div className={styles.contactLabel}>Send an Email</div>
                      <a href="mailto:info@tol.lk" className={styles.contactValue}>info@tol.lk</a>
                    </div>
                  </div>
                  <div className={styles.contactItem}>
                    <div className={styles.contactIcon}><MapPin size={24} /></div>
                    <div>
                      <div className={styles.contactLabel}>Head Office</div>
                      <div className={styles.contactValue}>No 31 Station Rd,<br />Negombo 11500</div>
                    </div>
                  </div>
                  <div className={styles.contactItem}>
                    <div className={styles.contactIcon}><Clock size={24} /></div>
                    <div>
                      <div className={styles.contactLabel}>Business Hours</div>
                      <div className={styles.contactValue}>Mon – Fri: 9:00 AM – 5:00 PM<br />Saturday: 9:00 AM – 1:00 PM</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Form Column */}
              <div className={styles.formCol}>
                <div className={styles.formCard}>
                  <h3 className={styles.formTitle}>Send Us a Message</h3>
                  <p className={styles.formDesc}>Fill out the form below and we will get back to you within 24 hours.</p>
                  
                  <form className={styles.form}>
                    <div className={styles.inputGroup}>
                      <label htmlFor="name">Full Name</label>
                      <input type="text" id="name" placeholder="John Doe" />
                    </div>
                    
                    <div className={styles.row}>
                      <div className={styles.inputGroup}>
                        <label htmlFor="phone">Phone Number</label>
                        <input type="tel" id="phone" placeholder="+94 77..." />
                      </div>
                      <div className={styles.inputGroup}>
                        <label htmlFor="email">Email Address</label>
                        <input type="email" id="email" placeholder="john@example.com" />
                      </div>
                    </div>

                    <div className={styles.inputGroup}>
                      <label htmlFor="service">Interested Service</label>
                      <select id="service">
                        <option>Personal Loans</option>
                        <option>Business Financing</option>
                        <option>Vehicle Leasing</option>
                        <option>Fixed Deposits</option>
                        <option>Other</option>
                      </select>
                    </div>

                    <div className={styles.inputGroup}>
                      <label htmlFor="message">Your Message</label>
                      <textarea id="message" rows={4} placeholder="How can we help you today?"></textarea>
                    </div>

                    <button type="button" className={`btn-primary ${styles.submitBtn}`}>Send Message</button>
                  </form>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Branch Network */}
        <section className={`section ${styles.branchSection}`}>
          <div className="container">
            <div className="text-center">
              <div className="section-eyebrow">Our Locations</div>
              <h2 className="section-heading">Branch Network</h2>
              <div className="divider-line center" />
              <p className="section-subtext" style={{ margin: '0 auto', maxWidth: '600px', marginBottom: '48px' }}>
                Find an Orient Life branch near you. Our extensive network across Sri Lanka ensures you always have access to premium financial services.
              </p>
            </div>

            <div className={styles.branchGrid}>
              {[
                { city: 'Ja-Ela', address: 'No. 15, Colombo Road, Ja-Ela', phone: '011 2 234 567' },
                { city: 'Wennappuwa', address: 'No. 42, Chilaw Road, Wennappuwa', phone: '031 2 256 789' },
                { city: 'Yakkala', address: 'No. 88, Kandy Road, Yakkala', phone: '033 2 222 333' },
                { city: 'Minuwangoda', address: 'No. 12, Veyangoda Road, Minuwangoda', phone: '031 2 299 888' },
                { city: 'Negombo', address: 'No. 105, Greens Road, Negombo', phone: '031 2 233 444' }
              ].map(branch => (
                <div key={branch.city} className={styles.branchCard}>
                  <div className={styles.branchIcon}><MapPin size={24} /></div>
                  <h4 className={styles.branchCity}>{branch.city}</h4>
                  <p className={styles.branchAddress}>{branch.address}</p>
                  <a href={`tel:${branch.phone.replace(/\s/g, '')}`} className={styles.branchPhone}>
                    <Phone size={14} /> {branch.phone}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}
