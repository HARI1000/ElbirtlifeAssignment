import React from 'react'

function IngredientsCard({ img, heading, paragraph }: { img: string, heading: string, paragraph: string }) {
  return (
    <div className=" bg-cover bg-center flex flex-col justify-between  h-[41vh] sm:w-[30vw] p-4 rounded-2xl m-2" style={{ backgroundImage: `url('${img}.png')` }}>
      <div>
        <div className='font-semibold text-2xl text-[#2D3F59] p-2'>{heading}</div>
        <div className='font-medium text-xl text-[#727272] p-2' >{paragraph}</div>
      </div>
      <a href="#" className="inline-block p-2 text-[#2D3F59] font-semibold hover:underline">SEE MORE</a>
    </div>
  )
}

export default IngredientsCard