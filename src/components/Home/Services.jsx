import React from 'react'
import service1 from '../../assets/images/service1.png'
import service2 from '../../assets/images/service2.png'
import service3 from '../../assets/images/service3.png'

const Services = () => {
  return (
    <>
        <section id='Services' className='mt-[120px]'>
            <div className="container">
                <div id="Services-Row" className='flex items-center justify-between'>
                    {/* ---------------Services Card-------------------- */}
                    <div className='lg:w-[300px] flex flex-col items-center'>
                        <img src={service3} alt="Service Icon" />
                        <h2 className='text-primary text-lg font-medium mb-2.5 mt-7.5'>Best Price Guarantee</h2>
                        <p className='text-second text-[15px] text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    {/* ---------------Services Card-------------------- */}
                    <div className='lg:w-[300px] flex flex-col items-center'>
                        <img src={service2} alt="Service Icon" />
                        <h2 className='text-primary text-lg font-medium mb-2.5 mt-7.5'>Easy & Quick Booking</h2>
                        <p className='text-second text-[15px] text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    {/* ---------------Services Card-------------------- */}
                    <div className='lg:w-[300px] flex flex-col items-center'>
                        <img src={service1} alt="Service Icon" />
                        <h2 className='text-primary text-lg font-medium mb-2.5 mt-7.5'>Customer Care 24/7</h2>
                        <p className='text-second text-[15px] text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Services