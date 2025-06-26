import styles from "../styles/Projet.module.css";
import Image from "next/image";

function Projet(props) {
  return (
    <div className={styles.divCard}>
      <div className={styles.projet}>
        {/* Exemple de carte projet */}
        <div className={styles.divImg}>
          <div className={styles.image}>
            <a href="https://labonneniche-frontend.vercel.app/">
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
          <h3 className={styles.titre}>La bonne niche</h3>
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
    </div>
  );
}

export default Projet;
