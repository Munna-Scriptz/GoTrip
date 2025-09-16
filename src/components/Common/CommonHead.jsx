import React from 'react'
import { MdArrowOutward } from 'react-icons/md'
import { Link } from 'react-router'

const CommonHead = () => {
  return (
    <>
        <div className='flex items-center justify-between'>
            <div>
                <h2 className='text-3xl font-semibold text-primary'>Popular Destinations</h2>
                <p className='text-base text-second leading-[30px] mt-1.5'>These popular destinations have a lot to offer</p>
            </div>
            <div>
                <Link to={'/'} className="overflow-hidden w-[243px] h-[50px] flex items-center justify-center bg-[#3554D10D] rounded-[5px] text-brand border-none cursor-pointer relative z-10 group">
                    <span className='flex items-center gap-[13px] text-base font-medium'>View All Destinations <MdArrowOutward size={25} /></span>
                    <span className="absolute w-full h-32 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"></span>
                    <span className="absolute w-36 h-32 -top-8 -left-2 bg-indigo-400 rotate-8 transform scale-x-0 group-hover:scale-x-150 transition-transform group-hover:duration-700 duration-700 origin-left"></span>
                    <span className="absolute w-36 h-32 -top-8 -left-2 bg-indigo-600 rotate-12 transform scale-x-0 group-hover:scale-x-50 transition-transform group-hover:duration-1000 duration-500 origin-left"></span>
                    <span className="group-hover:opacity-100 text-white group-hover:duration-1000 duration-100 opacity-0 absolute top-[13px] left-10 z-10 flex items-center gap-[13px]" >Explore Now! <MdArrowOutward size={25} /></span>
                </Link>
            </div>
        </div>
    </>
  )
}

export default CommonHead