import styles from "../styles/Propos.module.css";

function Propos() {
  return (
    <section className={styles.propos} id="about">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className={styles.titre}>À propos de moi</h3>
        <p className="text-gray-700">
          Ce site a été entièrement développé par mes soins afin de présenter
          mes compétences et les projets sur lesquels j’ai travaillé. Avec deux
          ans d’expérience en développement web, j’ai eu l’occasion de renforcer
          mes connaissances en front-end, notamment avec React.js.</p> 
          <p>En avril 2025,
          j’ai suivi une formation diplômante orientée back-end, ce qui m’a
          permis d’élargir mes compétences et de devenir développeur full-stack.
          Ce portfolio reflète donc à la fois mon parcours, mon évolution et mon
          souci du détail technique et visuel.{" "}
        </p>
      </div>
    </section>
  );
}

export default Propos;
