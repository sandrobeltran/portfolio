import Head from "next/head";
import Header from "components/Header";
import HomeSection from "components/HomeSection";
import ProjectsSection from "components/ProjectsSection";
import AboutSection from "components/AboutSection";
import { useEffect, useState } from "react";
import Loader from "components/Loader";
import CertificatesSection from "components/CertificatesSection";
import SkillsSection from "components/SkillsSection";
import ContactSection from "components/ContactSection";
import Footer from "components/Footer";

export default function Home() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  /* RETURN LOADER WHILE PAGE IS LOADING */
  if (!ready) {
    return (
      <>
        <Head>
          <title>Loading - Sandro J2</title>
        </Head>
        <Loader />
      </>
    );
  }

  return (
    <>
      <Head>
        <title>Portfolio from Sandro Beltrán</title>
        <meta
          name="description"
          content="I'm a web developer who uses the MERN stack to do my works. You can explore my projects and bio here."
        />
        <meta name="keywords" content="Portfolio, Web Developer, Páginas Web, Páginas, Sitio Web" />
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <HomeSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <CertificatesSection />
      <ContactSection />
      <Footer />
    </>
  );
}
