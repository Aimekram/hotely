import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'

const Navbar = () => {
  const [ active, setActive ] = useState(false)
  const [ navBarActiveClass, setNavBarActiveClass ] = useState(false)
  const [ scrolled, setScrolled ] = useState(false)

  const toggleHamburger = () => setActive(!active)

  const handleScroll = () => window.scrollY >= window.innerHeight*.2 ? setScrolled(true) : setScrolled(false) 

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    active ? setNavBarActiveClass(true) : setNavBarActiveClass(false)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [active, scrolled])

  return (
    <div className={`w-full fixed top-0 z-10 ${scrolled || navBarActiveClass ? 'bg-skyblue-500' : ''} transition-colors duration-300 ease-in-out`}>
      <nav
        className='w-full max-w-md sm:max-w-none md:max-w-4/5 mx-auto flex items-center justify-between flex-wrap px-2 sm:px-4 md:px-2 py-6'
        role='navigation'
        aria-label='main-navigation'
      >
        <div className='flex items-center flex-shrink-0 text-white mr-6'>
          <Link to='/' className='font-semibold text-2xl tracking-tight' title='Logo'>
            <h1 className='bold'>Hotely</h1>
          </Link>
        </div>
        {/* hamburger */}
        <div className='block sm:hidden'>
          <button className='flex items-center px-3 py-2 border rounded text-white border-teal-400 hover:text-white hover:border-white' onClick={toggleHamburger}>
            <svg className='fill-current h-3 w-3' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><title>Menu</title><path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z'/></svg>
          </button>
        </div>
        <div className={`w-full block sm:flex sm:items-center sm:w-auto ${!navBarActiveClass && 'hidden'} z-10`}>
          <ul className='text-m sm:flex-grow text-center'>
            <li className='block mt-4 sm:inline-block sm:mt-0 text-white hover:text-white mr-4 lg:px-4'><a href='#home'>Home</a></li>
            <li className='block mt-4 sm:inline-block sm:mt-0 text-white hover:text-white mr-4 lg:px-4'><a href='#find'>Find Hotel</a></li>
            <li className='block mt-4 sm:inline-block sm:mt-0 text-white hover:text-white mr-4 lg:px-4'><a href='#about'>About Us</a></li>
            <li className='block mt-4 sm:inline-block sm:mt-0 text-white hover:text-white mr-4 lg:px-4'><a href='#contact'>Contact Us</a></li>
            <li className='block mt-4 sm:inline-block sm:mt-0 text-white hover:text-white mr-4 mb-0'><a href='#contact' className='btn btn-transparent'>Login</a></li>
          </ul>      
        </div>
      </nav>  
    </div>
  )
}

export default Navbar