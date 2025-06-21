import styles from "../styles/Header.module.css";

function Header() {
  return (
      <div className={styles.nav}>
        <div className={styles.divh1}>
          <h1 className={styles.h1}> Réda El Midaoui</h1>
        </div>

        <div className={styles.liens}>
          <a href="#home" className={styles.a}>
            Accueil
          </a>
          <a href="#about" className={styles.a}>
            À propos
          </a>
          <a href="#projects" className={styles.a}>
            Projets
          </a>
          <a href="#contact" className={styles.a}>
            Contact
          </a>
        </div>
      
    </div>
  );
}

export default Header;
