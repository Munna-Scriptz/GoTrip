import React, { useState } from 'react'
import { IoMdArrowDropdown } from 'react-icons/io'
import { MdArrowOutward, MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from 'react-icons/md'
import { Link } from 'react-router'
import SingleRecoCard from '../Common/SingleRecoCard'
import hotel1 from '../../assets/images/recoSlider1.png'
import hotel2 from '../../assets/images/recoSlider2.png'
import hotel3 from '../../assets/images/recoSlider3.png'
import hotel4 from '../../assets/images/recoSlider4.png'
import Slider from 'react-slick'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

const Recommend = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    }
    // --------------------Hotels Array 
    const hotelsData = [
        {
            image: hotel1,
            label: 'Breakfast included',
            details: 'The Montcalm At Brewery London City',
            location: 'Westminster Borough, London',
            price : 72,
        },
        {
            image: hotel2,
            hideLabel: 'hidden',
            details: 'Staycity Aparthotels Deptford Bridge Station',
            location: 'Ciutat Vella, Barcelona',
            price : 99,
        },
        {
            image: hotel3,
            label: 'Best Seller',
            details: 'The Montcalm At Brewery London City',
            location: 'Westminster Borough, London',
            price : 53,
        },
        {
            image: hotel4,
            label: 'Top Rated',
            details: 'The Westin New York at Times Square',
            location: 'Manhattan, New York',
            price : 82,
        },
        {
            image: hotel1,
            label: 'Breakfast included',
            details: 'DoubleTree by Hilton Hotel New York Times Square West',
            location: 'Vaticano Prati, Rome',
            price : 72,
        },
    ]
  return (
    <>
        <section id='Recommend' className='mt-[120px]'>
            <div className="container">
                <div id="Recommend-Row">
                    {/* ----------------------Header------------------------- */}
                    <div className='flex items-center justify-between'>
                        <div>
                            <h2 className='text-3xl font-semibold text-primary'>Recommended</h2>
                            <p className='text-base text-second leading-[30px] mt-1.5'>We offer some popular Hotels to stay into</p>
                        </div>
                        <div>
                            <Link to={'/'} className="overflow-hidden w-[140px] h-[50px] flex items-center justify-center border-1 border-borderCol rounded-[5px] text-primary cursor-pointer relative z-10 group">
                                <span className='flex items-center justify-between gap-[13px] text-base font-medium'>Hotel <IoMdArrowDropdown size={25} /></span>
                                <span className="absolute w-full h-32 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"></span>
                                <span className="absolute w-36 h-32 -top-8 -left-2 bg-indigo-400 rotate-8 transform scale-x-0 group-hover:scale-x-150 transition-transform group-hover:duration-700 duration-700 origin-left"></span>
                                <span className="absolute w-36 h-32 -top-8 -left-2 bg-indigo-600 rotate-12 transform scale-x-0 group-hover:scale-x-50 transition-transform group-hover:duration-1000 duration-500 origin-left"></span>
                                <span className="group-hover:opacity-100 text-white group-hover:duration-1000 duration-100 opacity-0 absolute top-[13px] left-10 z-10 flex items-center gap-[13px]" >Hotels <IoMdArrowDropdown size={25} /></span>
                            </Link>
                        </div>
                    </div>
                    {/* ----------------------Slider------------------------- */}
                    <div className="slider-container mt-8">
                        <Slider {...settings}>
                            {
                                hotelsData.map((item , i)=>(
                                    <SingleRecoCard img={item.image} label={item.label} details={item.details} location={item.location} price={item.price} hideLabel={item.hideLabel}/>
                                ))
                            }
                        </Slider>
                    </div>
                    {/* ----------------Arrow And Dots--------------------- */}
                    <div className='mt-10 flex items-center justify-center'>
                        <div className='flex items-center gap-45'>
                            <div className='text-primary cursor-pointer z-10 w-[30px] h-[30px] hover:bg-brand rounded-full duration-300 hover:text-white flex items-center justify-center' onClick={() => document.querySelector(".slick-prev")?.click()}>
                                <FaArrowLeft />
                            </div>


                            <div className='text-primary cursor-pointer z-10 w-[30px] h-[30px] hover:bg-brand rounded-full duration-300 hover:text-white flex items-center justify-center' onClick={() => document.querySelector(".slick-next")?.click()}>
                                <FaArrowRight />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Recommend