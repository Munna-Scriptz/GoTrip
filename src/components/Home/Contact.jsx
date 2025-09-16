import React from 'react'
import contactIcon from '../../assets/images/contactIcon.svg'
const Contact = () => {
  return (
    <>
        <section id='Contact' className='mt-[120px] bg-[#0D2857] py-[65px]'>
            <div className="container">
                <div id="Contact-Row" className='flex items-center justify-between'>
                    {/* -----------------------Subscribe Text----------------------------- */}
                    <div className='flex items-center gap-[37px]'>
                        <div>
                            <img src={contactIcon} alt="Icon" />
                        </div>
                        <div>
                            <h2 className='text-white text-[26px] font-semibold'>Your Travel Journey Starts Here</h2>
                            <p className='text-white text-base mt-2'>Sign up and we'll send the best deals to you</p>
                        </div>
                    </div>
                    {/* -----------------------Subscribe Input----------------------------- */}
                    <div className='flex items-center gap-[10px]'>
                        <input className='w-[410px] h-[60px] rounded-[5px] bg-white pl-[20px] outline-none text-primary' type="email" id='email' placeholder='Your Email' />
                        <button className='w-[136px] h-[60px] bg-brand text-white flex items-center justify-center rounded-[5px] cursor-pointer hover:bg-primary duration-300'>Subscribe</button>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Contact