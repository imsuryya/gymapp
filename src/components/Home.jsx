import React from 'react'

const Home = () => {
  return (
    <div className='min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4'>
    <div className='flex flex-col gap-4'>
      <p>IT'S TIME TO GET</p>
      <h1 className='uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-blue-400'>GRIND</h1>
      </div>
      <p className='text-sm md:text-base font-light'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
       Ex odio molestias ratione veniam, nisi voluptates cupiditate quo, accusantium deserunt velit eius. 
       Quisquam iusto expedita sapiente quae eaque tempora, ratione temporibus!</p>
       <button className='px-8 py-4 rounded-md border-[2px] bg-slate-950 border-blue-50 border-solid blueshadow duration-200'><p>Accept & Begin</p></button>
    </div>
    
  )
}

export default Home
