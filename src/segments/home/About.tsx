/* eslint-disable react/no-unescaped-entities */
import ArrowText from '@/components/ArrowText'
import React from 'react'


const About = () => {
    return (
        <div className="py-[100px] px-[20px] flex gap-[20px] items-start justify-start container">
            <div className="w-[30%]">
                <ArrowText text="ABOUT ME" />
            </div>
            <div className='w-[80%] flex flex-col gap-[30px]'>
                <p className='font-lalia font-[300] text-[18px] max-w-[900px]'>
                    At CreativeHub, we're more than just a team of experts. We're your partners in bringing your ideas to life. Whether you're launching a startup, rebranding, or need top-notch content, we've got you covered. At CreativeHub, we're more than just a team of experts. We're your partners in bringing your ideas to life. Whether you're launching a startup, rebranding, or need top-notch content, we've got you covered.
                </p>
                <button className="btn-primary-outline h-[50px] w-[180px]">
                    See my works
                </button>
            </div>
        </div>
    )
}

export default About
