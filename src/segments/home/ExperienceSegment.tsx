/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import ArrowText from '@/components/ArrowText'
import ExperienceCard from '@/components/ExperienceCard'



const textExperience = [
    {
        companyName: 'Rapptr',
        jobTitle: "Frontend Developer",
        companyLink: "www.google.com",
        Date: "November 2022 - January 2023"
    },
    {
        companyName: 'Rapptr',
        jobTitle: "Frontend Developer",
        companyLink: "www.google.com",
        Date: "November 2022 - January 2023"
    },
    {
        companyName: 'Rapptr',
        jobTitle: "Frontend Developer",
        companyLink: "www.google.com",
        Date: "November 2022 - January 2023"
    }]


const ExperienceSegment = () => {
    return (
        <div className='border-b-[1px] border-b-neutral-300 py-[100px] px-[20px]'>
            <div className='container'>
                <div className="flex flex-col lg:flex-row gap-[20px] items-start justify-start pb-[50px]">
                    <div className="w-[100%] lg:w-[30%]">
                        <ArrowText text="EXPERIENCE" />
                    </div>

                </div>
                <ul className='flex flex-col gap-[40px] max-w-[1300px]'>
                    {textExperience.map((experience, index) => {
                        return <ExperienceCard CompanyName={experience.companyName} CompanyLink={experience.companyLink} Date={experience.Date} JobTitle={experience.jobTitle} key={index} />
                    })}

                </ul>

            </div>

        </div>

    )
}

export default ExperienceSegment
