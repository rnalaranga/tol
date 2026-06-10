import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTABanner from '@/components/CTABanner';
import styles from './gallery.module.css';

export const metadata = {
  title: 'Gallery & Community Impact | Orient Life Micro Finance',
  description: 'View the latest events, branch openings, and our community impact through Micro Finance at Orient Life Pvt Ltd.',
};

const galleryImages = [
  { id: 1, src: '/images/gallery-1.png', category: 'Branches', title: 'Colombo Branch Opening' },
  { id: 2, src: '/images/gallery-2.png', category: 'Customers', title: 'Happy Customer Handshake' },
  { id: 3, src: '/images/gallery-3.png', category: 'Head Office', title: 'HQ at Dusk' },
  { id: 4, src: '/images/gallery-4.png', category: 'Events', title: 'Financial Seminar 2024' },
  { id: 5, src: '/images/slide1.png', category: 'Customers', title: 'Empowering Farmers' },
  { id: 6, src: '/images/slide2.png', category: 'Events', title: 'Annual General Meeting' },
];

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      
      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <img src="/images/gallery-3.png" alt="Orient Life Gallery" className={styles.heroImg} />
          <div className={styles.heroOverlay}>
            <div className={`container ${styles.heroContainer}`}>
              <div className={styles.heroGlass}>
                <div className="section-eyebrow">Our Journey</div>
                <h1 className={styles.heroTitle}>The Orient Life<br /><em>Gallery</em></h1>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Grid Section */}
        <section className={`section ${styles.gallerySection}`}>
          <div className="container">
            <div className="text-center">
              <div className="section-eyebrow">Moments</div>
              <h2 className="section-heading">Life at Orient Life</h2>
              <div className="divider-line center" />
              <p className="section-subtext" style={{ margin: '0 auto', maxWidth: '600px' }}>
                A glimpse into our events, modern branch network, and the everyday moments where we connect with our valued customers across Sri Lanka.
              </p>
            </div>

            <div className={styles.grid}>
              {galleryImages.map((img) => (
                <div key={img.id} className={styles.galleryCard}>
                  <div className={styles.imgWrapper}>
                    <img src={img.src} alt={img.title} className={styles.image} />
                    <div className={styles.overlay}>
                      <span className={styles.category}>{img.category}</span>
                      <h4 className={styles.title}>{img.title}</h4>
                    </div>
                  </div>
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
