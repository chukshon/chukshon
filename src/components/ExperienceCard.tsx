import React from 'react'
import { ArrowUpRight } from 'react-feather'

interface ExperienceCardProps {
    JobTitle: string,
    Date: string,
    CompanyName: string
    CompanyLink: string
}
const ExperienceCard = ({ JobTitle, Date, CompanyName, CompanyLink }: ExperienceCardProps) => {
    return (
        <div className='flex justify-between'>
            <div>
                <h1 className='font-[600] text-[23px] font-space_grotesk'>{JobTitle}</h1>
                <p>{Date}</p>
            </div>
            <div className='flex gap-[10px] items-center'>
                <h3 className='font-space_grotesk font-[600] text-[20px]'>{CompanyName}</h3>
                <a href={CompanyLink} target="_blank" className="bg-neutral-100 p-[15px] rounded-full">
                    <ArrowUpRight size={23} strokeWidth={1} />
                </a>

            </div>

        </div>
    )
}

export default ExperienceCard
