/* eslint-disable react/no-unescaped-entities */
import ArticleCard from "@/components/ArticleCard";
import React from "react";
import PageHeader from "@/components/PageHeader";



const Articles = () => {
  const Articles = [
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

  ]
  return <main>
    <PageHeader title="Articles" />
    {/* Article List */}
    <ul className="flex flex-wrap gap-[10px] justify-center mt-[20px] mx-auto">
      {Articles.map((article, index) => {
        return <ArticleCard key={index} />
      })}
    </ul>
  </main>
};

export default Articles;
