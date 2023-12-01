/* eslint-disable react/no-unescaped-entities */
import ArrowText from '@/components/ArrowText'
import React from 'react'


const AboutSegment = () => {
    return (
        <div className="py-[100px] px-[50px] border-b-[1px] border-b-neutral-300">
            <div className="container flex-col lg:flex-row  flex gap-[20px] items-start justify-between">

                <ArrowText text="ABOUT ME" />

                <div className='flex flex-col gap-[30px]'>
                    <p className='font-lalia font-[300] text-[18px] max-w-[900px]'>
                        At CreativeHub, we're more than just a team of experts. We're your partners in bringing your ideas to life. Whether you're launching a startup, rebranding, or need top-notch content, we've got you covered. At CreativeHub, we're more than just a team of experts. We're your partners in bringing your ideas to life. Whether you're launching a startup, rebranding, or need top-notch content, we've got you covered.
                    </p>
                    <button className="btn-primary-outline h-[50px] w-[180px]">
                        See my works
                    </button>
                </div>
            </div>

        </div>
    )
}

export default AboutSegment
