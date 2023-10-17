import logo from '/business-deals-logo-web.svg'
import { AiOutlineSearch } from 'react-icons/ai'
import { CiUser } from 'react-icons/ci'
import { Link, NavLink } from 'react-router-dom'
import { FaTimes, FaBars } from 'react-icons/fa'
import { useState } from 'react'



const Navbar = () => {

  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen((prev) => !prev)
    console.log(open)
  }

  return (
    <>
      {/* Desktop Nav */}
      <div className='border-b bg-white hidden md:flex'>
        <div className='md:flex items-center justify-between py-4 w-4/5 m-auto border-b bg-white hidden'>
          <Link to='/'><img src={logo} alt="logo" className='w-48' /></Link>
          <nav className='text-base font-optimistr'>
            <ul className='flex space-x-10'>
              <NavLink to='/deals' className='hover:text-blue-600' >Deals</NavLink>
              <NavLink to='/catagories' className='hover:text-blue-600'>Categories</NavLink>
              <NavLink to='/resources' className='hover:text-blue-600'>Resources</NavLink>
            </ul>
          </nav>
          <div className='flex space-x-5 items-center text-base font-optimistr'>
            <span><AiOutlineSearch className='text-xl' /></span>
            <NavLink className='flex items-center' to='/login'><CiUser className='text-xl' />Sign In</NavLink>
            <NavLink className='bg-[#25810E] px-6 py-1 rounded-sm font-bold text-white' to='/signup'>Join</NavLink>
          </div>
        </div>
      </div>

      {/* mobile Nav  */}
      <div>
        <div className='flex justify-between p-4 items-center border bg-white md:hidden text-base font-optimistr'>

          {/* Hamburger  */}
          <button className='text-lg text-black' onClick={toggleMenu}>
            {open == true ? <FaTimes /> : <FaBars />}
          </button>

          {/* Logo  */}
          <Link to='/'><img src={logo} alt="logo" className='w-44' /></Link>

          {/* Sign In  */}
          <NavLink className='flex flex-col items-center justify-center text-xs' to='/signup'><CiUser className='text-lg' />Sign In</NavLink>
        </div>
      </div>

      {/* Mobile Menu */}
      {open ? (
        <div className='items-center bg-white absolute w-full h-screen top-18 z-10 p-6 md:hidden text-center space-y-10 text-base font-optimistr'>
          <ul className='flex flex-col text-[#141414]'>
            <p className='hover:text-blue-600 flex justify-between items-center px-2 py-3 border-b ' >Search <span className='text-2xl font-light'><AiOutlineSearch /></span></p>
            <NavLink to='/deals' className='hover:text-blue-600 flex justify-between items-center px-2 py-3 border-b ' >Deals <img src="/arrow.svg" className='w-[24px] h-[24px]' alt="icon" /></NavLink>
            <NavLink to='/catagories' className='hover:text-blue-600 flex justify-between items-center px-2 py-3 border-b'>Categories<img src="/arrow.svg" className='w-[24px] h-[24px]' alt="icon" /></NavLink>
            <NavLink to='/resources' className='hover:text-blue-600 flex justify-between items-center px-2 py-3 border-b'>Resources<img src="/arrow.svg" className='w-[24px] h-[24px]' alt="icon" /></NavLink>
          </ul>
          <div className='space-y-6'>
            <h1 className='text-lg font-optimistsb text-center'>Not a Capital One Budiness Deals member? join for free to start saving.</h1>
            <button className='bg-[#25810E] px-6 py-3 text-xl rounded-md font-normal text-white w-11/12 mx-auto'><Link to='/signup'>Join</Link></button>
          </div>
          <div className='space-y-8'>
            <h1 className='text-[#141414]'>Are you a returning Business Deals Member? Join for free to start saving</h1>
            <Link to='/login' className=' text-blue-600 '>Sign In &gt; </Link>
          </div>
        </div>
      ) : null}

    </>

  )
}

export default Navbar