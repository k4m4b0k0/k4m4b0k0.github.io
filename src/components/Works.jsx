import styles from './Works.module.css';

const works = [
  {
    title: 'ファイル共有サイト',
    description: '自分で構築・運用しているファイル共有サービスです。',
    link: 'http://k4m4b0k0.duckdns.org',
    icon: '📁',
  }
];

export default function Works() {
  return (
    <section id="works" className={styles.works}>
      <div className="container">
        <h2 className="section-title">Works</h2>
        <p className={styles.subtitle}>作ったもの / 運用しているもの</p>
        
        <div className={styles.grid}>
          {works.map((work, idx) => (
            <a href={work.link} target="_blank" rel="noopener noreferrer" key={idx} className={styles.card}>
              <span className={styles.icon}>{work.icon}</span>
              <h3 className={styles.title}>{work.title}</h3>
              <p className={styles.desc}>{work.description}</p>
              <span className={styles.linkText}>サイトを見る &rarr;</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
