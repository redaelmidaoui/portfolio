import styles from "../styles/Home.module.css";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Projet from "./Projet";
import Propos from "./Propos";
import Contact from "./Contact";

function Home() {
  return (
    <div>

    <div className={styles.container}>
      {/* Header */}
      <Header />
      {/* Scroll to top button */}
      {/* Main Content */}
      <main className={styles.main}>
        {" "}
        {/* pt-20 à cause du header fixed */}
        {/* Hero Section */}
        <section className={styles.hero} id="hero">
          <h2 className={styles.hero1}>
            Salut, moi c’est <span className={styles.nom}>Réda El Midaoui</span>
          </h2>
          <p className={styles.hero2}>
            Développeur Full Stack passionné
          </p>
          <button
            href="#projects"
            className={styles.btn}
          >
            Voir mes projets
          </button>
        </section>
        {/* À propos */}
        <Propos />
        {/* Projets */}
        <section className={styles.projets} id="projects">
          <h2 className={styles.titre}>
            Mes projets
          </h2>
          <Projet />
        </section>
        {/* Contact */}
        
        <Contact />
      </main>

      {/* Footer */}
    </div>
      <Footer />
    </div>
  );
}

export default Home;
