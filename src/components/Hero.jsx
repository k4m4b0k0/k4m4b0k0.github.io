import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={`${styles.container} animate-fade-in`}>
        <h2 className={styles.greeting}>Hi, I&apos;m</h2>
        <h1 className={styles.name}>mel</h1>
        <p className={styles.aliases}>aka. める / かまぼこ / k4m4b0k0</p>
        <h3 className={styles.title}>
          <span className={styles.gradientText}>ゲームとネットの限界学生</span>
        </h3>
        <div className={styles.likes}>
          {['🖥️ サーバー', '🌐 ネットワーク', '🎮 ゲーム', '🍸 カクテル', '☕ コーヒー', '🍓 いちご'].map((item, idx) => (
            <span key={idx} className={styles.likeTag}>{item}</span>
          ))}
        </div>
        <div className={styles.actions}>
          <a href="#profile" className={styles.primaryBtn}>Profile</a>
          <a href="#contact" className={styles.secondaryBtn}>Contact</a>
        </div>
      </div>
    </section>
  );
}
