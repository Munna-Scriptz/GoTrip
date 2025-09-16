import React from 'react'
import { FaStar } from 'react-icons/fa'
import SingleReview from '../Common/SingleReview'

const Reviews = () => {
  return (
    <>
        <section id='Reviews' className='mt-[120px] py-[120px] bg-[#E5F0FD]'>
            <div className="container">
                <div id="Reviews-Row" className='flex items-start justify-between'>
                    {/* --------------------Left Side-------------------- */}
                    <div className='w-[520px]'>
                        <h2 className='text-primary font-semibold text-3xl mb-5 lg:w-[353px]'>What our customers are saying us?</h2>
                        <p className='text-second text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh, sit amet tempor nibh finibus et. Aenean eu enim justo.</p>
                        <div className='mt-15 flex items-center justify-between'>
                            <div>
                                <h2 className='text-primary font-semibold text-3xl'>13m+</h2>
                                <p className='text-second mt-1'>Happy People</p>
                            </div>
                            <div>
                                <h2 className='text-primary font-semibold text-3xl'>4.88</h2>
                                <p className='text-second mt-1'>Overall rating</p>
                                <div className='text-brand flex items-center gap-[7px] text-[13px] mt-2'>
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* --------------------Right Side-------------------- */}
                    <div>
                        <SingleReview/>
                        <div className='mt-10'>
                            <div className='flex items-center gap-45'>
                                <div className='text-primary font-semibold text-base cursor-pointer z-10 w-[30px] h-[30px] hover:bg-brand rounded-full duration-300 hover:text-white flex items-center justify-center' onClick={() => document.querySelector(".slick-prev")?.click()}>
                                    <p>01</p>
                                </div>
        
        
                                <div className='text-primary font-semibold text-base cursor-pointer z-10 w-[30px] h-[30px] hover:bg-brand rounded-full duration-300 hover:text-white flex items-center justify-center' onClick={() => document.querySelector(".slick-next")?.click()}>
                                    <p>05</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Reviews