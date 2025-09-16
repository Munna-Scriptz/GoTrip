import React from 'react'
import InsImg from '../../assets/images/inspiration1.png'
import InsImg2 from '../../assets/images/inspiration_2.png'
import InsImg3 from '../../assets/images/inspiration_3.png'

const Inspiration = () => {
  return (
    <>
        <section id='Inspiration' className='mt-[120px]'>
            <div className="container">
                <div id="Inspiration-Row">
                    {/* ----------------------------Inspiration Head-------------------------- */}
                    <div>
                        <h2 className='text-primary font-semibold text-3xl text-center'>Get inspiration for your next trip</h2>
                        <p className='text-second text-center text-[15px] mt-2 '>Get Your Next Trip Fulfilled With Wishes</p>
                    </div>
                    {/* ----------------------------Inspiration Cards-------------------------- */}
                    <div className='mt-10 flex items-center justify-center gap-7.5'>
                        <div className='w-[410px]'>
                            <img src={InsImg} alt="Inspirational Image" />
                            <h2 className='mt-5 text-primary text-lg leading-[30px] font-medium'>10 European ski destinations you should visit this winter</h2>
                            <p className='text-second text-[15px] mt-1.5'>April 06, 2022</p>
                        </div>
                        <div className='w-[410px]'>
                            <img src={InsImg2} alt="Inspirational Image" />
                            <h2 className='mt-5 text-primary text-lg leading-[30px] font-medium'>Booking travel during Corona: good advice in an uncertain time</h2>
                            <p className='text-second text-[15px] mt-1.5'>April 06, 2022</p>
                        </div>
                        <div className='w-[410px]'>
                            <img src={InsImg3} alt="Inspirational Image" />
                            <h2 className='mt-5 text-primary text-lg leading-[30px] font-medium'>Where can I go? 5 amazing countries that are open right now</h2>
                            <p className='text-second text-[15px] mt-1.5'>April 06, 2022</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Inspiration