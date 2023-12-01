import React from "react";
import Footer from "@/components/Layouts/Footer";
import Header from "@/components/Layouts/Header/Header";
import About from "@/segments/home/AboutSegment";
import PageHeader from "@/components/PageHeader";


const Projects = () => {
  return (
    <main>
      <Header />
      <PageHeader title="Projects" />
      <Footer />
    </main>
  );
};

export default Projects;
