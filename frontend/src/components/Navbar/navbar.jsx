import logo from '/business-deals-logo-web.svg'
import { AiOutlineSearch } from 'react-icons/ai'
import { CiUser } from 'react-icons/ci'
import { Link, NavLink } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'
import { GrClose } from 'react-icons/gr'
import { useRef } from 'react'


const Navbar = () => {

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
            <NavLink to='/Deals' className='hover:text-blue-600' >Deals</NavLink>
            <NavLink to='/Catagories' className='hover:text-blue-600'>Categories</NavLink>
            <NavLink to='/Resources' className='hover:text-blue-600'>Resources</NavLink>
          </ul>
        </nav>
        <div className='flex space-x-5 items-center'>
          <span><AiOutlineSearch className='text-xl' /></span>
          <NavLink className='flex items-center' to='/Signup'><CiUser className='text-xl' />Sign In</NavLink>
          <NavLink className='bg-[#25810E] px-6 py-1 rounded-sm font-bold text-white' to='/Login'>Join</NavLink>
        </div>
      </div>


      {/* mobile Nav  */}

      <div>
        <div className='flex justify between'>

          {/* Hamburger  */}
          
          <div onClick={toggleMenu} className='md:hidden'>
            <span ref={open} className='text-2xl text-gray-300 block'><GiHamburgerMenu /></span>
            <span ref={close} className='text-2xl text-gray-300 hidden' ><GrClose /></span>
          </div>

          {/* Logo  */}
          <Link to='/'><img src={logo} alt="logo" className='w-48' /></Link>
        </div>
      </div>
    </>

  )
}

export default Navbar