import styles from "../styles/Projet.module.css";
import Image from "next/image";

function Projet() {
  return (
    <div className={styles.divCard}>
      <div className={styles.projet}>
        {/* Exemple de carte projet */}
        <div className={styles.divImg}>
          <div className={styles.image}>
            <a href="https://labonneniche-frontend.vercel.app/">
              <Image
                src="/labonneniche.png"
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
            LaBonneNiche, c’est quoi ? C’est une plateforme dédiée à l’adoption
            responsable, mettant en relation adoptants et refuges(ou
            particuliers) en toute simplicité. Plus qu’un simple site
            d’annonces, c’est un espace de mise en relation et d’accompagnement,
            favorisant une adoption réussie et durable.
          </p>
          <p className={styles.stack}>
            Stack : React.js, Next.js, Redux.js, Express.js, Node.js, MongoDB{" "}
          </p>
          <div class={styles.buttonRow}>
            <p>GitHub :</p>
            <a
              href="https://github.com/redaelmidaoui/labonneniche-frontend"
              target="_blank"
              class={styles.btn}
            >
              Frontend
            </a>
            <a
              href="https://github.com/redaelmidaoui/labonneniche-backend"
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
