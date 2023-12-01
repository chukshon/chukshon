import React from 'react'
import { ArrowRight } from 'react-feather'
import Image from "next/image";


const ArrowText = ({ text }: { text: string }) => {
    return (
        <div className=" flex gap-[30px] items-start">
            <Image
                className=""
                src="/images/arrow-right.svg"
                alt="star icon"
                width={40}
                height={40}
            />
            <h1 className="text-[40px] font-[500] leading-[40px] font-space_grotesk w-[max-content]">{text}</h1>
        </div>
    )
}

export default ArrowText
