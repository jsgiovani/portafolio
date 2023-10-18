import React from 'react'

const Header = () => {

      
  return (

    <header className='flex justify-between content-center px-[2%] md:px-[5%] sticky top-0 left-0 z-10 shadow-md py-5 bg-white'>

      <a className='text-xl font-bold' href="/">JsGiovani</a>

      <nav className='flex gap-3' >
        <a className='hover:text-sky-600' href="#">Home</a>
        <a className='hover:text-sky-600' href="about">About</a>
        <a className='hover:text-sky-600' href="#">Projects</a>
        <a className='hover:text-sky-600' href="#">Contact</a>
      </nav>

    </header>
  )
}

export default Header