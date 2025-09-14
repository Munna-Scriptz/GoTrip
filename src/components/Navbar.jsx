import React from 'react'
import logo from '../assets/images/logo.svg'
import { Link } from 'react-router'
import { IoMdArrowDropdown } from 'react-icons/io'
const Navbar = () => {
  return (
    <>
        <nav className='py-[20px] px-[30px] lg:block hidden'>
            <div>
                <div id="Nav-Row" className='flex items-center justify-between'>
                  <div className='flex items-center gap-[50px]'>
                    {/* -----------------Logo-------------------- */}
                    <Link to={'/'}><img src={logo} alt="Logo" /></Link>
                    {/* -----------------Nav Links-------------------- */}
                    <ul className='flex items-center gap-[62px] text-white font-jost font-medium'>
                      <li>
                        <Link className='relative after:absolute after:left-0 after:bottom-0 after:bg-white after:w-0 hover:after:w-full after:h-[1px] after:duration-500 duration-[.3s]'>Home</Link>
                      </li>
                      <li className='flex items-center gap-1.5'>
                        <Link className='relative after:absolute after:left-0 after:bottom-0 after:bg-white after:w-0 hover:after:w-full after:h-[1px] after:duration-500 duration-[.3s]'>Categories</Link>
                        <IoMdArrowDropdown />
                      </li>
                      <li>
                        <Link className='relative after:absolute after:left-0 after:bottom-0 after:bg-white after:w-0 hover:after:w-full after:h-[1px] after:duration-500 duration-[.3s]'>Blog</Link>
                      </li>
                      <li>
                        <Link className='relative after:absolute after:left-0 after:bottom-0 after:bg-white after:w-0 hover:after:w-full after:h-[1px] after:duration-500 duration-[.3s]'>Contact</Link>
                      </li>
                    </ul>
                  </div>
                  {/* ------------------2nd Part--------------- */}
                  <div className='w-[608px] flex items-center justify-between'>
                    <div className='flex items-center gap-4'>
                      <div className='text-white cursor-pointer flex items-center gap-1.5'>
                        <p>USD</p>
                        <IoMdArrowDropdown />
                      </div>
                      <div className='w-[2px] h-[20px] bg-white opacity-20'>

                      </div>
                    </div>

                    <div>
                      <Link to={'/'} className='text-white border-1 border-white rounded-[4px] py-[15px] px-[30px] hover:bg-brand duration-300 hover:border-transparent'>
                        Sign In / Register
                      </Link>
                    </div>
                  </div>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar