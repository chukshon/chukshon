/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import Footer from "@/components/Layouts/Footer";
import Header from "@/components/Layouts/Header/Header";
import About from "@/segments/home/AboutSegment";
import PageHeader from "@/components/PageHeader";
import ProjectCard from "@/components/ProjectCard";


const Projects = () => {
  type projectTabT = "all" | "companyProjects" | "personalProjects" | "openSource"
  const [activeTab, setActiveTab] = React.useState<projectTabT>("all")
  const Tabs: { label: string, value: projectTabT }[] = [
    {
      label: "All",
      value: "all"
    },
    {
      label: "Company Projects",
      value: "companyProjects"
    },
    {
      label: "Personal Projects",
      value: "personalProjects"
    },
    {
      label: "Open Source Projects",
      value: "openSource"
    }
  ]
  const Projects = [
    {
      projectTitle: "Shobizzy",
      projectLink: "www.shobizzy.com",
      githubLink: "www.github.com",
      technologies: "ReactJs, NextJs, TailwindCss, TypeScript, Trpc",
      description: "",
    },
    {
      projectTitle: "Alter",
      projectLink: "www.alterme.com",
      githubLink: "www.github.com",
      technologies: "ReactJs, NextJs, TailwindCss, TypeScript, ApolloGraphQl",
      description: "",
    },
    {
      projectTitle: "Alter",
      projectLink: "www.alterme.com",
      githubLink: "www.github.com",
      technologies: "ReactJs, NextJs, TailwindCss, TypeScript, ApolloGraphQl",
      description: "",
    }
  ]
  return (
    <main>
      <Header />
      <PageHeader title="Projects" />
      <p className="text-center font-[300]">At CreativeHub, we're more than just a team of experts. We're your partners <br />in bringing your ideas to life. Whether you're launching a startup, rebranding, or </p>
      {/* Tabs */}
      <ul className="flex gap-[100px] border-t-[1.5px] border-b-[1.5px] border-neutral-200 py-[20px] my-[50px] justify-center">
        {Tabs.map((tab, index) => {
          return (
            <button type="button" onClick={() => { setActiveTab(tab.value) }} key={index} className={`text-[25px] font-[600] ${activeTab === tab.value ? 'text-neutral-900' : 'text-neutral-300'}`}>{tab.label}</button>
          )
        })}

      </ul>

      {/* Project List */}
      <ul className="flex flex-wrap gap-[10px] px-[50px]">
        {Projects.map((project, index) => {
          return <ProjectCard key={index} />
        })}
      </ul>
      <Footer />
    </main>
  );
};

export default Projects;
