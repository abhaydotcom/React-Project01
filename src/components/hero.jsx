import React from 'react'

function Hero() {
  return (
    <div className='flex justify-between items-center h-screen   ' >
        <div className='ml-10 flex  flex-col gap-9 '>
        <h1  className='font-bold max-w-xl text-8xl ml-20 ' >YOUR FEET DESERVE THE BEST</h1>
        <p className='font-bold  max-w-xl ml-20 text-gray-500'>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>

        <div className=" flex gap-10 text-2xl ml-20 font-semibold font-serif  ">
          <button className='border p-3 bg-red-600 text-white' >Shop Now </button>
          <button className=" border p-3 text-gray-600 ">Category</button>
        </div>
        <div className=" text-2xl font-mono text-gray-500 ml-20">
          <p>Also Available On</p>

          <div className=" mt-3 gap-6 flex ">
            <img src="/images/amazon.png" alt="amazon-logo" className='size-10' />
            <img src="/images/flipkart.png" alt="flipkart-logo" className='size-9' />
          </div>
        </div>
      
        </div>


        <div className="hero-image">
        <img src="/images/hero-image.png" alt="hero-image" />
      </div>    
    </div>
  )
}

export default Hero