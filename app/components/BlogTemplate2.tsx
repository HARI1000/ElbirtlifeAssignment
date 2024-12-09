import React from 'react'

function BlogTemplate2() {
    return (
        <div style={{ backgroundImage: `url('blog2.png')` }} className={`row-span-1 rounded-2xl bg-cover bg-center`}>
            <div className='relative top-[3%] right-[2%] rounded-r-full bg-[#003569] w-2/6 text-white px-2 sm:text-[1vw] text-[2vw]' >20 Apr</div>
            <div className=' text-white p-[5%] sm:text-[1.5vw]  text-[3vw]' >
                The Covid-19 Epidemic In 2022 is Back
            </div>
        </div>
    )
}

export default BlogTemplate2