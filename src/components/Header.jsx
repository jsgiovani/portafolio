import React from 'react'

const Header = () => {

      
  return (

    <header className='flex justify-between items-center px-[2%] md:px-[5%] sticky top-0 left-0 z-10 shadow-md py-5 bg-white'>

      <a className='font-semibold flex gap-2 items-center' href="/">
          <img src="./img/giovani.jpeg" className='w-10 rounded-full border-2' alt="img giovani" />
        <h1 className='uppercase font-semibold text-sm'>Giovani</h1>
      </a>

      <nav className='flex gap-3' >
        <a className='hover:text-sky-600' href="about">About</a>
        <a className='hover:text-sky-600' href="#">Projects</a>
        <a className='hover:text-sky-600' href="#">Contact</a>
      </nav>

    </header>
  )
}

export default Header