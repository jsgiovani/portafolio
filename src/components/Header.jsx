import React from 'react'

const Header = () => {

      
  return (

    <header className='flex justify-between content-center px-[5%] sticky top-0 left-0 z-10 shadow-md py-5 bg-white'>

      <a className='text-xl font-semibold' href="/">jsgiovani.dev</a>

      <nav className='flex gap-4 font-medium text-lg' >
        <a href="#">Home</a>
        <a href="about">About</a>
        <a href="#">Projects</a>
        <a href="#">Contact</a>
      </nav>

    </header>
  )
}

export default Header