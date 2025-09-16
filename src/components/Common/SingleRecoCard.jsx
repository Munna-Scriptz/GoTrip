import React from 'react'
import img from '../../assets/images/recoSlider1.png'
import { FaRegHeart } from 'react-icons/fa'
const SingleRecoCard = () => {
  return (
    <div className='w-[300px] rounded-[5px]'>
        {/* -----------------Image  */}
        <div className='relative'>
            <img src={img} alt="Hotels Image" />
            <div className='flex items-center justify-center w-[40px] h-[40px] bg-white text-lg hover:bg-brand hover:text-white duration-300 hover:shadow text-primary cursor-pointer rounded-full absolute top-5 right-5'>
                <FaRegHeart />
            </div>
            <div className='absolute top-5 left-0 bg-primary py-[7px] px-[13px] text-white text-xs font-medium rounded-r-[5px]'>
                <p>Breakfast included</p>
            </div>
        </div>
        {/* -----------------Details  */}
        <h2 className='text-primary font-medium text-lg leading-[30px] mt-2.5'>The Montcalm At Brewery London City</h2>
        <p className='text-second text-sm mt-2'>Westminster Borough, London</p>
        {/* -----------------Rating  */}
        <div className='mt-[20px] flex items-center'>
            <div className='w-[30px] h-[30px] rounded-[5px] bg-brand text-white font-semibold text-xs flex items-center justify-center'>
                <p>4.8</p>
            </div>
            <p className='text-primary text-sm font-medium ml-2.5'>Exceptional</p>
            <p className='text-second text-sm ml-3'>3,014 reviews</p>
        </div>
        {/* -----------------Price  */}
        <h2 className='mt-2 text-primary text-base font-medium leading-[30px]'>Starting from <span className='text-brand'>US$72</span> </h2>
    </div>
  )
}

export default SingleRecoCard