import styles from './Games.module.css';

const games = [
  {
    title: 'Valorant',
    icon: '🎯',
    description: 'タクティカルFPS',
  },
  {
    title: 'Minecraft',
    icon: '⛏️',
    description: 'サンドボックス / サーバー運用',
  },
  {
    title: 'Apex Legends',
    icon: '🔫',
    description: 'バトルロイヤル',
  },
  {
    title: 'Overwatch 2',
    icon: '🛡️',
    description: 'チームFPS',
  },
];

export default function Games() {
  return (
    <section id="games" className={styles.games}>
      <div className="container">
        <h2 className="section-title">Games</h2>
        <p className={styles.subtitle}>よくやるゲームたち</p>
        
        <div className={styles.grid}>
          {games.map((game, idx) => (
            <div key={idx} className={styles.card}>
              <span className={styles.gameIcon}>{game.icon}</span>
              <h3 className={styles.gameTitle}>{game.title}</h3>
              <p className={styles.gameDesc}>{game.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
