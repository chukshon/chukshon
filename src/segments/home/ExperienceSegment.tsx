/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import ArrowText from '@/components/ArrowText'
import ExperienceCard from '@/components/ExperienceCard'



const textExperience = [
    {
        companyName: 'Rapptr',
        jobTitle: "Frontend Developer",
        companyLink: "www.google.com",
        Date: "November 2022 - January 2023",
        location: "New Jersey, USA"
    },
    {
        companyName: 'Rapptr',
        jobTitle: "Frontend Developer",
        companyLink: "www.google.com",
        Date: "November 2022 - January 2023",
        location: "Lagos, Ng"
    },
    {
        companyName: 'Rapptr',
        jobTitle: "Frontend Developer",
        companyLink: "www.google.com",
        Date: "November 2022 - January 2023",
        location: "Lagos, Ng"
    }]


const ExperienceSegment = () => {
    return (
        <div className='border-b-[1px] border-b-neutral-300 py-[80px] px-[50px]'>
            <div className='container'>
                <div className="flex flex-col lg:flex-row gap-[10px] items-start justify-start pb-[50px]">
                    <div className="w-[100%] lg:w-[25%]">
                        <ArrowText text="EXPERIENCE" />
                    </div>
                </div>
                <ul className='flex flex-col gap-[40px]'>
                    {textExperience.map((experience, index) => {
                        return <ExperienceCard location={experience.location} CompanyName={experience.companyName} CompanyLink={experience.companyLink} Date={experience.Date} JobTitle={experience.jobTitle} key={index} />
                    })}

                </ul>

            </div>

        </div>

    )
}

export default ExperienceSegment
