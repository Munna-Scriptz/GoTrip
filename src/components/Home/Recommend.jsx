import React from 'react'
import { IoMdArrowDropdown } from 'react-icons/io'
import { MdArrowOutward } from 'react-icons/md'
import { Link } from 'react-router'
import SingleRecoCard from '../Common/SingleRecoCard'
import hotel1 from '../../assets/images/recoSlider1.png'
import hotel2 from '../../assets/images/recoSlider2.png'
import hotel3 from '../../assets/images/recoSlider3.png'
import hotel4 from '../../assets/images/recoSlider4.png'

const Recommend = () => {
    const hotelsData = [
        {
            image: '',
        }
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
                            <Link to={'/'} class="overflow-hidden w-[140px] h-[50px] flex items-center justify-center border-1 border-borderCol rounded-[5px] text-primary cursor-pointer relative z-10 group">
                                <span className='flex items-center justify-between gap-[13px] text-base font-medium'>Hotel <IoMdArrowDropdown size={25} /></span>
                                <span class="absolute w-full h-32 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"></span>
                                <span class="absolute w-36 h-32 -top-8 -left-2 bg-indigo-400 rotate-8 transform scale-x-0 group-hover:scale-x-150 transition-transform group-hover:duration-700 duration-700 origin-left"></span>
                                <span class="absolute w-36 h-32 -top-8 -left-2 bg-indigo-600 rotate-12 transform scale-x-0 group-hover:scale-x-50 transition-transform group-hover:duration-1000 duration-500 origin-left"></span>
                                <span class="group-hover:opacity-100 text-white group-hover:duration-1000 duration-100 opacity-0 absolute top-[13px] left-10 z-10 flex items-center gap-[13px]" >Hotels <IoMdArrowDropdown size={25} /></span>
                            </Link>
                        </div>
                    </div>
                    {/* ----------------------Slider------------------------- */}
                    <div className='mt-8'>

                        <SingleRecoCard/>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Recommend