import React from 'react'
import FooterCard from './FooterCard'
const FooterData = [
    { img: "phone.svg", heading: "Phone Number", para: "+974 3118 1843" },
    { img: "email.svg", heading: "Email Address", para: "Elbrithcqhr@gmail.com" },
    { img: "location.svg", heading: "Office Location", para: "Ambassador Street, Zone 61," }
  ]
function Footer() {
    return (
        <div className="bg-[#17414F] px-16 py-4">
            <div className='sm:flex justify-around'>
                {FooterData.map((i,index) => {
                    return <FooterCard key={index} img={i.img} heading={i.heading} para={i.para} />
                })}
            </div>
            <div className='sm:flex sm:m-8 my-4'>
                <img src="logo1.png"  className='ml-[2vw] sm:w-[16vw]  h-[10vh]' />
                <div className='text-white sm:w-[35vw] mt-2 sm:ml-[16vw]'>Your health, physical and emotional well-being is important to us. We are always by your side and have made it even easier for you to find the necessary vitamins.</div>
            </div>
            <div className='text-white sm:ml-[3vw]'>@ Elbrit Life Sciences Private Limited. C20, BKC, G Block, Mumbai 400051</div>
        </div>
    )
}

export default Footer