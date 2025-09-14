import React from 'react'
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
                                    <Link>Hotel</Link>
                                </li>
                                <li>
                                    <Link>Tour</Link>
                                </li>
                                <li>
                                    <Link>Activity</Link>
                                </li>
                                <li>
                                    <Link>Holiday Rentals </Link>
                                </li>
                                <li>
                                    <Link>Car</Link>
                                </li>
                                <li>
                                    <Link>Cruise</Link>
                                </li>
                                <li>
                                    <Link>Flights</Link>
                                </li>
                            </ul>
                        </div>
                        {/* --------------Box------------ */}
                        <div className='w-[900px] h-[80px] mt-8 bg-white mx-auto rounded-full pl-[36px] pt-[18px] pb-[13px] flex items-center'>
                            <div className='mr-[79px]'>
                                <h2 className='text-primary font-medium text-[15px]'>Location</h2>
                                <p className='text-second text-[15px] mt-1'>Where are you going?</p>
                            </div>

                            <div className='border-l-1 border-[#DADFE6] pl-5'>
                                <h2 className='text-primary font-medium text-[15px]'>Check in - Check out</h2>
                                <p className='text-second text-[15px] mt-1'>Wed 2 Mar  -  Fri 11 Apr</p>
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