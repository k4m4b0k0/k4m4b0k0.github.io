'use client';
import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <div className="container">
        <h2 className="section-title">Contact</h2>
        
        <div className={styles.wrapper}>
          <div className={styles.info}>
            <p className={styles.description}>
              お気軽にフォロー・DMしてください！
            </p>
            
            <div className={styles.socials}>
              <a href="https://github.com/k4m4b0k0" className={styles.socialLink} target="_blank" rel="noopener noreferrer">
                <span className={styles.socialIcon}>💻</span>
                <span>GitHub (k4m4b0k0)</span>
              </a>
              <a href="https://x.com/mel_L4" className={styles.socialLink} target="_blank" rel="noopener noreferrer">
                <span className={styles.socialIcon}>🐦</span>
                <span>X (@mel_L4)</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
