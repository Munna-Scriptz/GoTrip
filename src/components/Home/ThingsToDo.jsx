import React from 'react'
import thingsImg1 from '../../assets/images/thingsImg1.png'
import thingsImg2 from '../../assets/images/thingsImg2.png'
import { Link } from 'react-router'

const ThingsToDo = () => {
  return (
    <>
        <section id='ThingsToDo' className='mt-[120px]'>
            <div className="container">
                <div id="ThingsToDo-Row" className='flex items-center justify-center gap-[30px]'>
                    {/* --------------------First Image------------------------------ */}
                    <div className='relative'>
                        <img className='select-none' src={thingsImg1} alt="Things To Do" />
                        <div className='w-[294px] mt-[70px] ml-[70px] absolute top-0 left-0'>
                            <h2 className='text-white font-semibold text-[40px] mb-7.5'>Things to do on your trip</h2>
                            <Link to={'/'} className="overflow-hidden w-[180px] h-[60px] flex items-center justify-center bg-white rounded-[5px] border-none cursor-pointer relative z-10 group">
                                <span className='flex items-center gap-[13px] text-base font-medium text-primary'>Experiences</span>
                                <span className="absolute w-full h-32 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"></span>
                                <span className="absolute w-36 h-32 -top-8 -left-2 bg-[#051036c4] rotate-8 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"></span>
                                <span className="absolute w-36 h-32 -top-8 -left-2 bg-primary rotate-12 transform scale-x-0 group-hover:scale-x-50 transition-transform group-hover:duration-1000 duration-500 origin-left"></span>
                                <span className="group-hover:opacity-100 text-white group-hover:duration-1000 duration-100 opacity-0 absolute top-[18px] left-10 z-10 flex items-center gap-[13px]" >Explore Now!</span>
                            </Link>
                        </div>
                    </div>
                    {/* --------------------Second Image------------------------------ */}
                    <div className='relative'>
                        <img className='select-none' src={thingsImg2} alt="Discount UpTo" />
                        <div className='w-[375px] mt-[70px] ml-[70px] absolute top-0 left-0'>
                            <p className='text-white text-[15px] font-medium mb-2.5'>Enjoy Summer Deals</p>
                            <h2 className='text-white font-semibold text-[40px] mb-7.5'>Up to 70% Discount!</h2>
                            <Link to={'/'} className="overflow-hidden w-[180px] h-[60px] flex items-center justify-center bg-white rounded-[5px] border-none cursor-pointer relative z-10 group">
                                <span className='flex items-center gap-[13px] text-base font-medium text-primary'>Experiences</span>
                                <span className="absolute w-full h-32 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"></span>
                                <span className="absolute w-36 h-32 -top-8 -left-2 bg-[#051036c4] rotate-8 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"></span>
                                <span className="absolute w-36 h-32 -top-8 -left-2 bg-primary rotate-12 transform scale-x-0 group-hover:scale-x-50 transition-transform group-hover:duration-1000 duration-500 origin-left"></span>
                                <span className="group-hover:opacity-100 text-white group-hover:duration-1000 duration-100 opacity-0 absolute top-[18px] left-10 z-10 flex items-center gap-[13px]" >Explore Now!</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default ThingsToDo