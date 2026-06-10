'use client';
import { Sprout, Users, HeartHandshake, ArrowRight } from 'lucide-react';
import styles from './CommunityRoots.module.css';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function CommunityRoots() {
  const ref = useScrollAnimation();

  return (
    <section className={`section ${styles.communitySection}`} ref={ref}>
      <div className="container">
        <div className={styles.grid}>
          <div className={`animate-in ${styles.contentSide}`}>
            <span className="section-label">Our Roots</span>
            <h2 className="section-title">
              Empowering <span>Village Communities</span>
            </h2>
            <div className="divider" />
            <p className={styles.desc}>
              At Orient Life, we believe that the heart of Sri Lanka lies in its villages. 
              Our journey began with a simple mission: to provide the hard-working farmers, 
              small-scale entrepreneurs, and rural families with the financial tools they 
              need to grow and prosper.
            </p>
            
            <div className={styles.featureList}>
              <div className={styles.feature}>
                <div className={styles.featureIcon}>
                  <Sprout size={24} color="var(--primary)" />
                </div>
                <div>
                  <h4>Agricultural Support</h4>
                  <p>Flexible loans designed for paddy farming and seasonal crop cycles.</p>
                </div>
              </div>
              <div className={styles.feature}>
                <div className={styles.featureIcon}>
                  <Users size={24} color="var(--primary)" />
                </div>
                <div>
                  <h4>Grassroots Connection</h4>
                  <p>We speak your language and understand your village&apos;s unique needs.</p>
                </div>
              </div>
              <div className={styles.feature}>
                <div className={styles.featureIcon}>
                  <HeartHandshake size={24} color="var(--primary)" />
                </div>
                <div>
                  <h4>Trust & Integrity</h4>
                  <p>Building long-term relationships through honest and transparent finance.</p>
                </div>
              </div>
            </div>

            <button className="btn btn-outline-blue" style={{ marginTop: '20px' }}>
              Learn Our Story <ArrowRight size={18} />
            </button>
          </div>

          <div className={`animate-in delay-2 ${styles.imageSide}`}>
            <div className={styles.mainPlaceholder}>
              <div className={styles.placeholderLabel}>
                <span>Authentic Farmer in Paddy Field Image Placeholder</span>
              </div>
            </div>
            <div className={styles.subPlaceholder}>
              <div className={styles.placeholderLabel}>
                <span>Village Community Gathering Placeholder</span>
              </div>
            </div>
            {/* Decorative element */}
            <div className={styles.decoCircle} />
          </div>
        </div>
      </div>
    </section>
  );
}
