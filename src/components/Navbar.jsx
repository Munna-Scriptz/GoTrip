import React from 'react'
import logo from '../assets/images/logo.svg'
import { Link } from 'react-router'
const Navbar = () => {
  return (
    <>
        <nav className='py-[20px] px-[30px] lg:block hidden'>
            <div>
                <div id="Nav-Row" className='flex items-center justify-between'>
                  {/* -----------------Logo-------------------- */}
                  <Link to={'/'}><img src={logo} alt="Logo" /></Link>
                  {/* -----------------Logo-------------------- */}
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar