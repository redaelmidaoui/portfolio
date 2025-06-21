import styles from "../styles/Footer.module.css";

function Footer() {
  return (
    <div>
      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} - Réda El Midaoui</p>
      </footer>
    </div>
  );
}

export default Footer;
