import React from 'react'
import reviewImg from '../../assets/images/reviewImg1.png'
const SingleReview = () => {
  return (
    <div className='w-[600px]'>
        <div className='flex items-center gap-[30px]'>
            <img src={reviewImg} alt="Review Image" />
            <div>
                <h2 className='text-primary text-base font-semibold'>Annette Black</h2>
                <p className='text-second text-[15px] mt-1'>UX / UI Designer</p>
            </div>
        </div>
        <h2 className='text-primary text-base font-medium leading-[30px] mt-7.5'>The place is in a great location in Gumbet. The area is safe and beautiful. The apartment was comfortable and the host was kind and responsive to our requests.</h2>
    </div>
  )
}

export default SingleReview