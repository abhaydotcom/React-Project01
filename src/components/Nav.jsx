import React from 'react'

function Nav() {
  return (
  <nav className='   h-20 w-full flex font-serif justify-between '>
    <div className='m-4 ml-16'>
        <img className='size-14 w-28' src="/images/pngimg.com - nike_PNG6.png" alt="Logo image" />
    </div>

    <ul className='flex m-5 text-xl font-medium  ' >
        <li href="#" className='mr-5 hover:underline hover:text-2xl transition-all '>Menu</li>
        <li href='#' className='mr-5 hover:underline hover:text-2xl transition-all '>Location</li>
        <li href='#' className='mr-5 hover:underline hover:text-2xl transition-all '>About</li>
        <li href='#' className='hover:underline hover:text-2xl transition-all ' >Contact</li>
    </ul>

    <button className='m-4 mr-12 text-xl border p-2 font-black bg-red-600  hover:bg-red-700 text-white '>Login</button>

  </nav>
  )
}

export default Nav