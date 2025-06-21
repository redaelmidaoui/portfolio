import styles from "../styles/Contact.module.css";

function Contact() {
  return (
    <section className={styles.contact} id="contact">
      <h3 className={styles.titre}>Me contacter</h3>
      <div className={styles.card}>
        <h3>Intéressé par une collaboration ?</h3>
        <p className="text-gray-600 mb-4">
          N'hésitez pas à me contacter par mail ou par téléphone pour discuter
          de vos projets, de vos idées ou simplement pour échanger autour du
          développement web. Je suis toujours ouvert aux nouvelles opportunités
          et collaborations.
        </p>
        <div className={styles.contactInfo}>
          <div className={styles.mail}>
            <p className={styles.textMail}>Mon email :</p>
            <a href="mailto:r.elmidaoui@outlook.fr" className={styles.lienMail}>
              r.elmidaoui@outlook.fr
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
