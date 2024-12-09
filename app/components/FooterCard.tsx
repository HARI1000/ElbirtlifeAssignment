import React from 'react'

function FooterCard({ img, heading, para }: { img: string, heading: string, para: string }) {
    return (

        <div className='sm:w-[23vw] bg-[#215D72] rounded-xl  py-2 my-2'>
            <div className='flex justify-center'>
                <img src={img} width="45vw" />
            </div>
            <div className='flex flex-col justify-center items-center mt-2'>
                <div className=' text-white' >{heading}</div>
                <div className='font-light  text-white px-2' >{para}</div>
            </div>
        </div>
    )
}

export default FooterCard