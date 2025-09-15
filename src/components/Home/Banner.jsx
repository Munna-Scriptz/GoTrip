import React from 'react'
import { IoSearchOutline } from 'react-icons/io5'
import { Link } from 'react-router'
const Banner = () => {
  return (
    <>
        <section id='Banner' className='h-[863px]'>
            <div className="container">
                <div id="Banner-Row" className='pt-[184px]'>
                    {/* ---------------Header Text---------------- */}
                    <div>
                        <h1 className='text-white font-semibold text-[60px] text-center'>Find Next Place To Visit</h1>
                        <p className='text-white text-base text-center mt-1.5'>Discover amazing places at exclusive deals</p>
                    </div>
                    {/* ---------------Banner Navigation---------------- */}
                    <div className='mt-[60px]'>
                        {/* ----------Links---------- */}
                        <div>
                            <ul className='flex items-center gap-[34px] text-white justify-center'>
                                <li>
                                    <Link className='relative after:absolute after:left-0 after:bottom-0 after:bg-white after:w-0 hover:after:w-full after:h-[1px] after:duration-500 duration-[.3s]'>Hotel</Link>
                                </li>
                                <li>
                                    <Link className='relative after:absolute after:left-0 after:bottom-0 after:bg-white after:w-0 hover:after:w-full after:h-[1px] after:duration-500 duration-[.3s]'>Tour</Link>
                                </li>
                                <li>
                                    <Link className='relative after:absolute after:left-0 after:bottom-0 after:bg-white after:w-0 hover:after:w-full after:h-[1px] after:duration-500 duration-[.3s]'>Activity</Link>
                                </li>
                                <li>
                                    <Link className='relative after:absolute after:left-0 after:bottom-0 after:bg-white after:w-0 hover:after:w-full after:h-[1px] after:duration-500 duration-[.3s]'>Holiday Rentals </Link>
                                </li>
                                <li>
                                    <Link className='relative after:absolute after:left-0 after:bottom-0 after:bg-white after:w-0 hover:after:w-full after:h-[1px] after:duration-500 duration-[.3s]'>Car</Link>
                                </li>
                                <li>
                                    <Link className='relative after:absolute after:left-0 after:bottom-0 after:bg-white after:w-0 hover:after:w-full after:h-[1px] after:duration-500 duration-[.3s]'>Cruise</Link>
                                </li>
                                <li>
                                    <Link className='relative after:absolute after:left-0 after:bottom-0 after:bg-white after:w-0 hover:after:w-full after:h-[1px] after:duration-500 duration-[.3s]'>Flights</Link>
                                </li>
                            </ul>
                        </div>
                        {/* --------------Box------------ */}
                        <div className='w-[900px] h-[80px] mt-8 bg-white mx-auto rounded-full pl-[36px] pr-[10px] pt-[18px] pb-[13px] flex items-center justify-between'>
                            <div className='flex items-center'>
                                <div className='mr-[79px]'>
                                    <h2 className='text-primary font-medium text-[15px]'>Location</h2>
                                    <p className='text-second text-[15px] mt-1'>Where are you going?</p>
                                </div>

                                <div className='border-l-1 border-[#DADFE6] pl-5 mr-[26px]'>
                                    <h2 className='text-primary font-medium text-[15px]'>Check in - Check out</h2>
                                    <p className='text-second text-[15px] mt-1'>Wed 2 Mar  -  Fri 11 Apr</p>
                                </div>

                                <div className='border-l-1 border-[#DADFE6] pl-5'>
                                    <h2 className='text-primary font-medium text-[15px]'>Guest</h2>
                                    <p className='text-second text-[15px] mt-1'>2 adults - 1 children - 1 room</p>
                                </div>
                            </div>
                            <div>
                                <button className='w-[146px] h-[60px] cursor-pointer bg-brand text-white flex hover:bg-gray-800 duration-300 items-center gap-[10px] rounded-[60px] py-[19px] px-[35px] mb-1'>
                                    <IoSearchOutline />
                                    Search
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Banner