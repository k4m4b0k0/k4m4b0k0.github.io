import styles from './Profile.module.css';

export default function Profile() {
  return (
    <section id="profile" className={styles.profile}>
      <div className="container">
        <h2 className="section-title">Profile</h2>
        
        <div className={styles.content}>
          <div className={styles.imageContainer}>
            <div className={styles.avatar}>
              <img src="./avatar.png" alt="mel" className={styles.avatarImg} />
            </div>
          </div>
          
          <div className={styles.details}>
            <div className={styles.infoGrid}>
              <div className={styles.infoItem}>
                <span className={styles.label}>Name</span>
                <span className={styles.value}>mel / める / かまぼこ</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.label}>Status</span>
                <span className={styles.value}>学生</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.label}>Gaming ID</span>
                <span className={styles.value}>k4m4b0k0</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.label}>SNS</span>
                <span className={styles.value}>@mel_L4</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
