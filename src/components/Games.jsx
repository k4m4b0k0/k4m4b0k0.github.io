import styles from './Games.module.css';

const games = [
  {
    title: 'Valorant',
    description: '万年ゴールド',
  },
  {
    title: 'Apex Legends',
    description: '万年プラチナ',
  },
  {
    title: 'Overwatch',
    description: '万年プラチナ',
  },
  {
    title: 'Minecraft',
    description: 'JavaのMOD環境でよく遊んでます',
  },
  {
    title: 'ARK',
    description: 'ベロナサウルスすき、MODでよくあそぶ',
  },
  {
    title: 'Limbus Company',
    description: '',
  },
  {
    title: 'モンハンシリーズ',
    description: '4G, X, XX, IB, Wildz',
  },
  {
    title: 'etc...',
    description: '',
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
              <h3 className={styles.gameTitle}>{game.title}</h3>
              {game.description && <p className={styles.gameDesc}>{game.description}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
