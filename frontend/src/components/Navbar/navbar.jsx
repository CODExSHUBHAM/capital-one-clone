import logo from '/business-deals-logo-web.svg'
import {AiOutlineSearch} from 'react-icons/ai'
import {CiUser} from 'react-icons/ci'
import {Link, NavLink} from 'react-router-dom'


const Navbar = () => {
  return (
    <>
        <div className='flex items-center justify-between py-6 px-40 border-b bg-white'>
            <Link to='/'><img src={logo} alt="logo" className='w-48' /></Link>
            <nav>
                <ul className='flex space-x-10'>
                    <NavLink to='/Deals' className='hover:text-blue-600' >Deals</NavLink>
                    <NavLink to='/Catagories' className='hover:text-blue-600'>Categories</NavLink>
                    <NavLink to='/Resources' className='hover:text-blue-600'>Resources</NavLink>
                </ul>
            </nav>
            <div className='flex space-x-5 items-center'>
            <span><AiOutlineSearch className='text-xl'/></span>
            <NavLink className='flex items-center' to='/Signup'><CiUser className='text-xl'/>Sign In</NavLink>
            <NavLink className='bg-[#25810E] px-6 py-1 rounded-sm font-bold text-white' to='/Login'>Join</NavLink>
            </div>
        </div>
    </>
  )
}

export default Navbar