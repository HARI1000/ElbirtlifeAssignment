import React from 'react'

function FunctionCard({img,heading,para}:{img:string,heading:string,para:string}) {
    return (
        <div className='flex p-3'>
            <div>
                <img src={img} alt="vitamins" />
            </div>
            <div className='sm:w-[17vw] ml-[5%]'>
                <div className="font-semibold text-2xl text-[#17414F] ">{heading}</div>
                <div className='text-sm text-[#727272]'>{para}</div>
            </div>
        </div>
    );
}

export default FunctionCard