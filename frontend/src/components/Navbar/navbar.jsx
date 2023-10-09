import logo from '/business-deals-logo-web.svg'
import { AiOutlineSearch } from 'react-icons/ai'
import { CiUser } from 'react-icons/ci'
import { Link, NavLink } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'
import { GrClose } from 'react-icons/gr'
import { useEffect, useRef } from 'react'



const Navbar = () => {

  // const toggleMenu = () => {
  //   if (ref.current.classList.contains('hidden')) {
  //     ref.current.classList.remove('hidden')
  //     ref.current.classList.add('block')
  //     open.current.classList.remove('block')
  //     open.current.classList.add('hidden')
  //     close.current.classList.remove('hidden')
  //     close.current.classList.add('block')
  //   }
  //   else if (!ref.current.classList.contains('hidden')) {
  //     ref.current.classList.remove('block')
  //     ref.current.classList.add('hidden')
  //     open.current.classList.remove('hidden')
  //     open.current.classList.add('block')
  //     close.current.classList.remove('block')
  //     close.current.classList.add('hidden')
  //   }
  // }
  useEffect(()=>{
    ref.current.classList.add('hidden')
  },[])

  const toggleMenu = () => {
    if (ref.current.classList.contains('hidden')) {
      ref.current.classList.remove('hidden')
      ref.current.classList.add('block')
      open.current.classList.remove('block')
      open.current.classList.add('hidden')
      close.current.classList.remove('hidden')
      close.current.classList.add('block')
    }
    else if (!ref.current.classList.contains('hidden')) {
      ref.current.classList.remove('block')
      ref.current.classList.add('hidden')
      open.current.classList.remove('hidden')
      open.current.classList.add('block')
      close.current.classList.remove('block')
      close.current.classList.add('hidden')
    }
  }

  const ref = useRef()
  const open = useRef()
  const close = useRef()

  return (
    <>
      {/* Desktop Nav */}
      <div className='md:flex items-center justify-between py-6 px-40 border-b bg-white hidden'>
        <Link to='/'><img src={logo} alt="logo" className='w-48' /></Link>
        <nav>
          <ul className='flex space-x-10'>
            <NavLink to='/deals' className='hover:text-blue-600' >Deals</NavLink>
            <NavLink to='/catagories' className='hover:text-blue-600'>Categories</NavLink>
            <NavLink to='/resources' className='hover:text-blue-600'>Resources</NavLink>
          </ul>
        </nav>
        <div className='flex space-x-5 items-center'>
          <span><AiOutlineSearch className='text-xl' /></span>
          <NavLink className='flex items-center' to='/signup'><CiUser className='text-xl' />Sign In</NavLink>
          <NavLink className='bg-[#25810E] px-6 py-1 rounded-sm font-bold text-white' to='/login'>Join</NavLink>
        </div>
      </div>


      {/* mobile Nav  */}

      <div>
        <div className='flex justify-between p-6 items-center border bg-white md:hidden'>

          {/* Hamburger  */}

          <div onClick={toggleMenu} className='md:hidden'>
            <span ref={open} className='text-2xl text-black block'><GiHamburgerMenu /></span>
            <span ref={close} className='text-2xl text-gray-300 hidden' ><GrClose /></span>
          </div>

          {/* Logo  */}
          <Link to='/'><img src={logo} alt="logo" className='w-48' /></Link>

          {/* Sign In  */}
          <NavLink className='flex flex-col items-center justify-center' to='/signup'><CiUser className='text-xl' />Sign In</NavLink>
        </div>
      </div>

      <div ref={ref} className='items-center bg-white absolute w-full h-screen top-18 z-10 p-6 hidden text-center space-y-10'>
        <ul className='flex flex-col text-2xl text-gray-600'>
          <p className='hover:text-blue-600 flex justify-between items-center px-2 py-3 border-b ' >Search <span className='text-2xl font-light'><AiOutlineSearch /></span></p>
          <NavLink to='/deals' className='hover:text-blue-600 flex justify-between items-center px-2 py-3 border-b ' >Deals <span className='text-4xl font-light'>&gt;</span></NavLink>
          <NavLink to='/catagories' className='hover:text-blue-600 flex justify-between items-center px-2 py-3 border-b'>Categories<span className='text-4xl font-light'>&gt;</span></NavLink>
          <NavLink to='/resources' className='hover:text-blue-600 flex justify-between items-center px-2 py-3 border-b'>Resources<span className='text-4xl font-light'>&gt;</span></NavLink>
        </ul>
        <div className='space-y-6'>
          <h1 className='text-xl font-semibold text-center'>Not a Capital One Budiness Deals member? join for free to start saving.</h1>
          <button className='bg-[#25810E] px-6 py-4 text-xl rounded-md font-normal text-white w-11/12 mx-auto'><Link to='/login'>Join</Link></button>
        </div>
        <div className='space-y-8'>
          <h1 className='text-base text-gray-500 font-medium'>Are you a returning Business Deals Member? Join for free to start saving</h1>
          <Link to='/login' className='text-lg text-blue-600 '>Sign In &gt; </Link>
        </div>
      </div>
    </>

  )
}

export default Navbar