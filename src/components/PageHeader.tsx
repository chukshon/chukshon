import Image from 'next/image'
import React from 'react'


const PageHeader = ({ title }: { title: string }) => {
    return (
        <div className='flex gap-[20px] items-center justify-center w-[100%] pt-[70px]'>
            <Image
                className=""
                src="/images/Star3.png"
                alt="Connect Icon"
                width={90}
                height={90}
            />
            <h2 className='text-[90px] font-[400] font-space_grotesk uppercase'>{title}</h2>
            <Image
                className=""
                src="/images/Star4.png"
                alt="Connect Icon"
                width={90}
                height={90}
            />

        </div>
    )
}

export default PageHeader
