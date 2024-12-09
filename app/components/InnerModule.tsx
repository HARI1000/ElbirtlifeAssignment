import React from 'react'

function InnerModule({ img, heading, paragraph }: { img: string, heading: string, paragraph: string }) {
    return (
        <div className='flex sm:flex-col items-center sm:justify-center justify-between sm:w-[40%] h-[30vw] px-[2vw]'>
            <div className='flex justify-center'>
                <img src={img} className='sm:w-[10vw] ' />
            </div>
            <div>
                <div className=' text-center sm:font-medium sm:text-[2.5vw]   text-white py-2' >{heading}</div>
                <div className='text-center sm:font-base  sm:text-[1.5vw] text-[3vw] text-white py-2' >{paragraph}</div>
            </div>
        </div>
    )
}

export default InnerModule