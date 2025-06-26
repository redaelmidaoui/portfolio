import styles from "../styles/Header.module.css";

function Header() {
  const handleScrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleScrollToHome = () => {
    const homeSection = document.getElementById("home");
    if (homeSection) {
      homeSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleScrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleScrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
      <div className={styles.nav}>
        <div className={styles.divh1}>
          <h1 className={styles.h1}> Réda El Midaoui</h1>
        </div>

        <div className={styles.liens}>
          <a onClick={handleScrollToHome} className={styles.a}>
            Accueil
          </a>
          <a onClick={handleScrollToAbout} className={styles.a}>
            À propos
          </a>
          <a onClick={handleScrollToProjects} className={styles.a}>
            Projets
          </a>
          <a onClick={handleScrollToContact} className={styles.a}>
            Contact
          </a>
        </div>
      
    </div>
  );
}

export default Header;
