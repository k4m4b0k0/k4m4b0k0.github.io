import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.brand}>
            <h3>mel.</h3>
            <p>ゲームとネットの限界学生</p>
          </div>
          <div className={styles.copyright}>
            &copy; {new Date().getFullYear()} mel. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
