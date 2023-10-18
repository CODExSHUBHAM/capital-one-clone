import logo from '/business-deals-logo-web.svg'
import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'
import Search from '../Search/search'



const Navbar = () => {

  const [open, setOpen] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);

  const toggleMenu = () => {
    setOpen((prev) => !prev)
  }

  const toggleSearch = () => {
    setOpenSearch((prev) => !prev)
    setOpen(false)
    console.log(open)
  }

  const resetMenu = () => {
    setOpen(false)
    setOpenSearch(false)
  }

  return (
    <>
      {/* Desktop Nav */}
      <div className='border-b bg-white hidden md:flex'>
        <div className='md:flex items-center justify-between py-4 w-[74%] m-auto bg-white hidden'>
          <Link to='/' onClick={resetMenu}><img src={logo} alt="logo" className='w-[190px]' /></Link>
          <nav className='text-base font-optimistr'>
            <ul className='flex space-x-8'>
              <NavLink to='/deals' onClick={resetMenu} className='hover:text-blue-600' >Deals</NavLink>
              <NavLink to='/catagories' onClick={resetMenu} className='hover:text-blue-600'>Categories</NavLink>
              <NavLink to='/resources' onClick={resetMenu} className='hover:text-blue-600'>Resources</NavLink>
            </ul>
          </nav>
          <div className='flex space-x-5 items-center text-base font-optimistr'>
            <span onClick={toggleSearch}>
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' className='w-[24px]' fill='%23141414'>
                <path
                  d='M21.466,19l-5.649-5.466a7.533,7.533,0,1,0-2.508,2.423l5.745,5.557A1.742,1.742,0,0,0,21.466,19ZM3,9.505a6.5,6.5,0,1,1,6.5,6.5A6.51,6.51,0,0,1,3,9.505ZM20.793,20.772a.733.733,0,0,1-.518.226.887.887,0,0,1-.528-.2l-5.6-5.413a7.608,7.608,0,0,0,1.068-1.032l5.554,5.373a.736.736,0,0,1,.227.52A.743.743,0,0,1,20.793,20.772Z' />
              </svg>
            </span>
            <NavLink className='flex items-center' to='/login' onClick={resetMenu}>
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' className='w-[24px] mr-2' fill='%23141414'>
                <path
                  d='M12,13A5.5,5.5,0,1,0,6.5,7.5,5.507,5.507,0,0,0,12,13ZM12,3A4.5,4.5,0,1,1,7.5,7.5,4.505,4.505,0,0,1,12,3Zm0,11c-4.868,0-8.581,3.7-9,7.159a.746.746,0,0,0,.186.585A.759.759,0,0,0,3.757,22H20.243a.759.759,0,0,0,.566-.256A.747.747,0,0,0,21,21.158C20.581,17.7,16.868,14,12,14ZM4.039,21C4.564,18.106,7.86,15,12,15s7.437,3.106,7.961,6Z' />
              </svg>
              Sign In
            </NavLink>
            <NavLink className='bg-[#25810E] px-5 py-1 rounded-sm font-bold text-white' to='/signup' onClick={resetMenu}>Join</NavLink>
          </div>
        </div>
      </div>



      {/* mobile Nav  */}
      <div >
        <div className='flex justify-between px-6 py-4 items-center border bg-white md:hidden text-base font-optimistr'>

          {/* Hamburger  */}
          <button className='text-lg text-black' onClick={toggleMenu}>
            {open == true ?
              <svg className='w-[24px]' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23141414'>
                <path
                  d='M18.854,18.146a.5.5,0,0,1-.708.708L12,12.707,5.854,18.854a.5.5,0,0,1-.708-.708L11.293,12,5.146,5.854a.5.5,0,0,1,.708-.708L12,11.293l6.146-6.147a.5.5,0,0,1,.708.708L12.707,12Z' />
              </svg> : <svg className='w-[24px]' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23141414'>
                <path
                  d='M4,6.5A.5.5,0,0,1,4.5,6h15a.5.5,0,0,1,0,1H4.5A.5.5,0,0,1,4,6.5ZM19.5,16H4.5a.5.5,0,0,0,0,1h15a.5.5,0,0,0,0-1Zm0-5H4.5a.5.5,0,0,0,0,1h15a.5.5,0,0,0,0-1Z' />
              </svg>}
          </button>

          {/* Logo  */}
          <Link to='/' onClick={resetMenu}><img src={logo} alt="logo" className='w-[190px]' /></Link>

          {/* Sign In  */}
          <NavLink onClick={resetMenu} className='flex flex-col items-center justify-center text-xs' to='/signup'>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' className='w-[16px]' fill='%23141414'>
              <path
                d='M12,13A5.5,5.5,0,1,0,6.5,7.5,5.507,5.507,0,0,0,12,13ZM12,3A4.5,4.5,0,1,1,7.5,7.5,4.505,4.505,0,0,1,12,3Zm0,11c-4.868,0-8.581,3.7-9,7.159a.746.746,0,0,0,.186.585A.759.759,0,0,0,3.757,22H20.243a.759.759,0,0,0,.566-.256A.747.747,0,0,0,21,21.158C20.581,17.7,16.868,14,12,14ZM4.039,21C4.564,18.106,7.86,15,12,15s7.437,3.106,7.961,6Z' />
            </svg>
            Sign In
          </NavLink>
        </div>
      </div>

      {/* Mobile Menu */}
      {open ? (
        <div className='overflow-hidden items-center bg-white absolute w-full h-screen top-18 z-10 p-6 md:hidden text-center space-y-10 text-base font-optimistr'>
          <ul className='flex flex-col text-[#141414]'>
            <p className='hover:text-blue-600 flex justify-between items-center px-2 py-3 border-b ' onClick={toggleSearch} >Search <span className='text-2xl font-light'>
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' className='w-[24px]' fill='%23141414'>
                <path
                  d='M21.466,19l-5.649-5.466a7.533,7.533,0,1,0-2.508,2.423l5.745,5.557A1.742,1.742,0,0,0,21.466,19ZM3,9.505a6.5,6.5,0,1,1,6.5,6.5A6.51,6.51,0,0,1,3,9.505ZM20.793,20.772a.733.733,0,0,1-.518.226.887.887,0,0,1-.528-.2l-5.6-5.413a7.608,7.608,0,0,0,1.068-1.032l5.554,5.373a.736.736,0,0,1,.227.52A.743.743,0,0,1,20.793,20.772Z' />
              </svg>
            </span></p>
            <NavLink to='/deals' onClick={resetMenu} className='hover:text-blue-600 flex justify-between items-center px-2 py-3 border-b ' >Deals <img src="Icons/rightarrow.svg" className='w-[24px] h-[24px]' alt="icon" /></NavLink>
            <NavLink to='/catagories' onClick={resetMenu} className='hover:text-blue-600 flex justify-between items-center px-2 py-3 border-b'>Categories<img src="Icons/rightarrow.svg" className='w-[24px] h-[24px]' alt="icon" /></NavLink>
            <NavLink to='/resources' onClick={resetMenu} className='hover:text-blue-600 flex justify-between items-center px-2 py-3 border-b'>Resources<img src="Icons/rightarrow.svg" className='w-[24px] h-[24px]' alt="icon" /></NavLink>
          </ul>
          <div className='space-y-6'>
            <h1 className='text-lg font-optimistsb text-center'>Not a Capital One Budiness Deals member? Join for free to start saving.</h1>
            <button onClick={resetMenu} className='bg-[#25810E] px-6 py-3 text-xl rounded-md font-normal text-white w-11/12 mx-auto'><Link to='signup'>Join</Link></button>
          </div>
          <div className=''>
            <h1 className='text-[#141414] pb-2'>Are you a returning Business Deals Member? Join for free to start saving</h1>
            <Link to='/login' className=' text-blue flex items-center justify-center  ' onClick={resetMenu}>
              Sign In
              <img src="Icons/rightarrow.svg" className='w-[14px] ml-2 ' alt="" />
            </Link>
          </div>
        </div>
      ) : null}

      {
        openSearch ? (
          <Search />
        ) : null
      }

    </>

  )
}

export default Navbar