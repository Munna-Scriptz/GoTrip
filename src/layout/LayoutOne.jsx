import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../components/Common/Navbar'
import Footer from '../components/Common/Footer'
import ResNavbar from '../components/Common/ResNavbar'

const LayoutOne = () => {
  return (
    <>
      <Navbar/>
      {/* <ResNavbar/> */}
      <Outlet/>
      <Footer/>
    </>
  )
}

export default LayoutOne