import styles from "../styles/Projet.module.css";
import Image from "next/image";

function Projet(props) {
  return (
    <div className={styles.divCard}>
        {/* Exemple de carte projet */}
        <div className={styles.divImg}>
          <div className={styles.image}>
            <a href={props.link} target="_blank" rel="noopener noreferrer">
              <Image
                src={props.image}
                alt="exemple de projet"
                width={430}
                height={350}
                style={{
                  borderRadius: "30px", // Applique un border-radius directement à l'image
                }}
              ></Image>
            </a>
          </div>
        </div>

        <div className={styles.description}>
          <h3 className={styles.titre}>{props.title}</h3>
          <p className={styles.text}>
            {props.description}
          </p>
          <p className={styles.stack}>
            Stack : {props.stack}
          </p>
          <div class={styles.buttonRow}>
            <p>GitHub :</p>
            <a
              href={props.githubFrontend}
              target="_blank"
              class={styles.btn}
            >
              Frontend
            </a>
            <a
              href={props.githubBackend}
              target="_blank"
              class={styles.btn}
            >
              Backend
            </a>
          </div>
        </div>

        {/* ... autres cartes */}
      
    </div>
  );
}

export default Projet;
