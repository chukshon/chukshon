/* eslint-disable react/no-unescaped-entities */
import ArrowText from '@/components/ArrowText'
import Image from 'next/image'
import React from 'react'
import { ArrowRight } from 'react-feather'


const LoveDoingSegment = () => {
    return (
        <div className='border-b-[1px] border-b-neutral-300 py-[80px] px-[50px]'>
            <div className='container flex flex-col gap-[30px]'>
                <ArrowText text="WHAT I LOVE DOING" />
                <article className='flex'>
                    <Image
                        className="w-[100%] h-[100%] max-h-[400px] rounded-tl-[10px] rounded-bl-[10px]"
                        src="/images/loveDoing2.jpg"
                        alt="Connect Icon"
                        width={200}
                        height={200}
                    />
                    <div className='w-[100%] min-h-[200px] bg-neutral-50 rounded-tr-[10px] rounded-br-[10px] pl-[30px] pt-[50px] flex flex-col gap-[10px]'>
                        <h3 className='text-[20px] font-[500]'>I Write and Create Content</h3>
                        <p className='text-[15px] font-[300]'>CEEH turned our vision into reality. From branding to website design, every step was handled with precision and creativity. They're a true partner in our success.</p>
                        <button type="button" className="flex gap-[3px] items-start">
                            <p>Read My Articles</p>
                            <ArrowRight />
                        </button>
                    </div>
                </article>
                <article className='flex'>
                    <div className='w-[100%] min-h-[200px] bg-neutral-50 rounded-tl-[10px] rounded-bl-[10px] pl-[30px] pt-[50px] flex flex-col gap-[10px]'>
                        <h3 className='text-[20px] font-[500]'>I Write and Create Content</h3>
                        <p className='text-[15px] font-[300]'>CEEH turned our vision into reality. From branding to website design, every step was handled with precision and creativity. They're a true partner in our success.</p>
                        <button type="button" className="flex gap-[3px] items-start">
                            <p>Read My Articles</p>
                            <ArrowRight />
                        </button>
                    </div>
                    <Image
                        className="w-[100%] h-[100%] rounded-tr-[10px] rounded-br-[10px]"
                        src="/images/loveDoing1.jpg"
                        alt="Connect Icon"
                        width={200}
                        height={200}
                    />

                </article>
            </div>
        </div>
    )
}

export default LoveDoingSegment
