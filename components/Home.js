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
  const handleScrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const projects = [
    {
      title: "La bonne niche",
      description:
        "LaBonneNiche, c’est quoi ? C’est une plateforme dédiée à l’adoption responsable, mettant en relation adoptants et refuges(ou particuliers) en toute simplicité. Plus qu’un simple site d’annonces, c’est un espace de mise en relation et d’accompagnement, favorisant une adoption réussie et durable.",
      stack: "React.js, Next.js, Redux.js, Express.js, Node.js, MongoDB",
      image: "/labonneniche.png",
      githubFrontend: "https://github.com/redaelmidaoui/labonneniche-frontend",
      githubBackend: "https://github.com/redaelmidaoui/labonneniche-backend",
      link: "https://labonneniche-frontend.vercel.app/",
    },
    {
      title: "Hackatweet",
      description:
        "LaBonneNiche, c’est quoi ? C’est une plateforme dédiée à l’adoption responsable, mettant en relation adoptants et refuges(ou particuliers) en toute simplicité. Plus qu’un simple site d’annonces, c’est un espace de mise en relation et d’accompagnement, favorisant une adoption réussie et durable.",
      stack: "React.js, Next.js, Redux.js, Express.js, Node.js, MongoDB",
      image: "/hackatweet.png",
      githubFrontend: "https://github.com/redaelmidaoui/hackatweet-frontend",
      githubBackend: "https://github.com/redaelmidaoui/hackatweet-backend",
      link: "https://hackatweet-frontend-chi.vercel.app/",
    },
    {
      title: "MyMoviz",
      description:
        "LaBonneNiche, c’est quoi ? C’est une plateforme dédiée à l’adoption responsable, mettant en relation adoptants et refuges(ou particuliers) en toute simplicité. Plus qu’un simple site d’annonces, c’est un espace de mise en relation et d’accompagnement, favorisant une adoption réussie et durable.",
      stack: "React.js, Next.js, Redux.js, Express.js, Node.js, MongoDB",
      image: "/mymoviz.png",
      githubFrontend: "https://github.com/redaelmidaoui/mymoviz5-frontend",
      githubBackend: "https://github.com/redaelmidaoui/mymoviz5-backend",
      link: "https://mymoviz5-frontend-bay.vercel.app/",
    },
  ];

    const projets = projects.map((project, i) => {
    return (
      <Projet
        key={i}
        title={project.title}
        description={project.description}
        stack={project.stack}
        image={project.image}
        githubFrontend={project.githubFrontend}
        githubBackend={project.githubBackend}
        link={project.link}
      />
    );
  });

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
            onClick={handleScrollToProjects}
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

          {projets}
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
