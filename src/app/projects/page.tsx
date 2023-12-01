/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import Footer from "@/components/Layouts/Footer";
import Header from "@/components/Layouts/Header/Header";
import About from "@/segments/home/AboutSegment";
import PageHeader from "@/components/PageHeader";


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
  return (
    <main>
      <Header />
      <PageHeader title="Projects" />
      <p className="text-center font-[300]">At CreativeHub, we're more than just a team of experts. We're your partners <br />in bringing your ideas to life. Whether you're launching a startup, rebranding, or </p>
      <ul className="flex gap-[100px] border-t-[1px] border-b-[1px] border-neutral-200 py-[20px] my-[50px] justify-center">
        {Tabs.map((tab, index) => {
          return (
            <button type="button" onClick={() => { setActiveTab(tab.value) }} key={index} className={`text-[20px] font-[500] ${activeTab === tab.value ? 'text-neutral-900' : 'text-neutral-300'}`}>{tab.label}</button>
          )
        })}

      </ul>
      <Footer />
    </main>
  );
};

export default Projects;
