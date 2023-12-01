/* eslint-disable react/no-unescaped-entities */
import ArrowText from '@/components/ArrowText'
import React from 'react'




const TechStackSegment = () => {
    const TechStackData = [
        {
            title: "Languages",
            skills: "JavaScript(ES6+), TypeScript, HTML 5, CSS 3, SASS, Node.js, GraphQL."
        },
        {
            title: "Framework & Tools",
            skills: "Vue 2 & Vue 3, React, NuxtJS, Next.js, Vue Composition API, Svelte, Tailwind CSS, Vite, Vuetify, Chakra-UI, Vuex, Vue Router, Express.js, Redux, NPM, Webpack, Parcel, Rollup Ionic, Capacitor, Firebase, Strapi, Git & GitHub, Netlify, Vercel."
        },
        {
            title: "Productivity",
            skills: "Slack, Trello, ClickUp, Asana, Notion, Dropbox, Google Apps."
        },
        {
            title: "Languages",
            skills: "Creative development, Animation, Performance Optimization, PWAs, Performance Optimization, Accessibility auditing, Version Control Systems, Advanced Component Design Patterns, CI (GitHub Actions), Responsive Web Design, Communication, Team Integration, Collaboration, Critical Thinking, Professionalism, Adaptability"
        }

    ]
    return (
        <div className='border-b-[1px] border-b-neutral-300 py-[100px] px-[50px]'>
            <div className='container'>
                <div className="flex flex-col lg:flex-row lg:justify-between  gap-[100px] pb-[50px]">
                    <div className="">
                        <ArrowText text="TECH STACKS" />
                    </div>
                    <ul className='flex flex-col gap-[30px]'>
                        {TechStackData.map((data, index) => {
                            return (
                                <li className='flex flex-col gap-[10px] border-b-[1.5px] last:border-b-[0px] border-b-neutral-200 pb-[25px]' key={index}>
                                    <h3 className='text-[32px] leading-[40px] font-lalia'>{data.title}</h3>
                                    <p className='max-w-[700px]'>{data.skills}</p>
                                </li>
                            )
                        })}


                    </ul>
                </div>
            </div>

        </div>
    )
}

export default TechStackSegment
