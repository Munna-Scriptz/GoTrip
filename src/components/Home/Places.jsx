import React from 'react'

const Places = () => {
  return (
    <>
        <section id='Subscribe' className='mt-[120px]'>
            <div className="container">
                <div id="Subscribe-Row">
                    {/* -------------------Header Text------------------------- */}
                    <div>
                        <h2 className='text-primary font-semibold text-3xl'>Destinations we love</h2>
                        <p className='text-second text-[15px] mt-2 '>Get Your Next Trip Fulfilled With Wishes</p>
                    </div>
                    {/* -------------------Places Navigation------------------------- */}
                    <div className='mt-10 flex items-center gap-3'>
                        <button className='text-brand text-[15px] font-medium py-[14px] px-[28px] rounded-[5px] bg-[#3554D10D] hover:bg-brand hover:text-borderCol duration-300 cursor-pointer'>Regions</button>
                        <button className='text-brand text-[15px] font-medium py-[14px] px-[28px] rounded-[5px] bg-[#3554D10D] hover:bg-brand hover:text-borderCol duration-300 cursor-pointer'>Cities</button>
                        <button className='text-brand text-[15px] font-medium py-[14px] px-[28px] rounded-[5px] bg-[#3554D10D] hover:bg-brand hover:text-borderCol duration-300 cursor-pointer'>Places of interest</button>
                    </div>
                    {/* -------------------Places Names------------------------- */}
                    <div className='mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6'>
                        <div className='group w-[107px] cursor-pointer'>
                            <h2 className='text-primary font-medium group-hover:text-brand group-hover:underline duration-300'>Hawaii</h2>
                            <p className='text-second text-sm mt-1.5'>12,683 properties</p>
                        </div>
                        <div className='group w-[107px] cursor-pointer'>
                            <h2 className='text-primary font-medium group-hover:text-brand group-hover:underline duration-300'>Istanbul</h2>
                            <p className='text-second text-sm mt-1.5'>12,683 properties</p>
                        </div>
                        <div className='group w-[107px] cursor-pointer'>
                            <h2 className='text-primary font-medium group-hover:text-brand group-hover:underline duration-300'>San Diego</h2>
                            <p className='text-second text-sm mt-1.5'>12,683 properties</p>
                        </div>
                        <div className='group w-[107px] cursor-pointer'>
                            <h2 className='text-primary font-medium group-hover:text-brand group-hover:underline duration-300'>Puke</h2>
                            <p className='text-second text-sm mt-1.5'>12,683 properties</p>
                        </div>
                        <div className='group w-[107px] cursor-pointer'>
                            <h2 className='text-primary font-medium group-hover:text-brand group-hover:underline duration-300'>Reykjavik</h2>
                            <p className='text-second text-sm mt-1.5'>12,683 properties</p>
                        </div>
                        <div className='group w-[107px] cursor-pointer'>
                            <h2 className='text-primary font-medium group-hover:text-brand group-hover:underline duration-300'>Santonin</h2>
                            <p className='text-second text-sm mt-1.5'>12,683 properties</p>
                        </div>
                        <div className='group w-[107px] cursor-pointer'>
                            <h2 className='text-primary font-medium group-hover:text-brand group-hover:underline duration-300'>Los Angeles</h2>
                            <p className='text-second text-sm mt-1.5'>12,683 properties</p>
                        </div>
                        <div className='group w-[107px] cursor-pointer'>
                            <h2 className='text-primary font-medium group-hover:text-brand group-hover:underline duration-300'>Ibiza</h2>
                            <p className='text-second text-sm mt-1.5'>12,683 properties</p>
                        </div>
                        <div className='group w-[107px] cursor-pointer'>
                            <h2 className='text-primary font-medium group-hover:text-brand group-hover:underline duration-300'>Boston</h2>
                            <p className='text-second text-sm mt-1.5'>12,683 properties</p>
                        </div>
                        <div className='group w-[107px] cursor-pointer'>
                            <h2 className='text-primary font-medium group-hover:text-brand group-hover:underline duration-300'>Florence</h2>
                            <p className='text-second text-sm mt-1.5'>12,683 properties</p>
                        </div>
                        <div className='group w-[107px] cursor-pointer'>
                            <h2 className='text-primary font-medium group-hover:text-brand group-hover:underline duration-300'>myron's</h2>
                            <p className='text-second text-sm mt-1.5'>12,683 properties</p>
                        </div>
                        <div className='group w-[107px] cursor-pointer'>
                            <h2 className='text-primary font-medium group-hover:text-brand group-hover:underline duration-300'>London</h2>
                            <p className='text-second text-sm mt-1.5'>12,683 properties</p>
                        </div>
                        <div className='group w-[107px] cursor-pointer'>
                            <h2 className='text-primary font-medium group-hover:text-brand group-hover:underline duration-300'>Paris</h2>
                            <p className='text-second text-sm mt-1.5'>12,683 properties</p>
                        </div>
                        <div className='group w-[107px] cursor-pointer'>
                            <h2 className='text-primary font-medium group-hover:text-brand group-hover:underline duration-300'>Dubai</h2>
                            <p className='text-second text-sm mt-1.5'>12,683 properties</p>
                        </div>
                        <div className='group w-[107px] cursor-pointer'>
                            <h2 className='text-primary font-medium group-hover:text-brand group-hover:underline duration-300'>Krakow</h2>
                            <p className='text-second text-sm mt-1.5'>12,683 properties</p>
                        </div>
                        <div className='group w-[107px] cursor-pointer'>
                            <h2 className='text-primary font-medium group-hover:text-brand group-hover:underline duration-300'>Peag</h2>
                            <p className='text-second text-sm mt-1.5'>12,683 properties</p>
                        </div>
                        <div className='group w-[107px] cursor-pointer'>
                            <h2 className='text-primary font-medium group-hover:text-brand group-hover:underline duration-300'>Amsterdam</h2>
                            <p className='text-second text-sm mt-1.5'>12,683 properties</p>
                        </div>
                        <div className='group w-[107px] cursor-pointer'>
                            <h2 className='text-primary font-medium group-hover:text-brand group-hover:underline duration-300'>Rome</h2>
                            <p className='text-second text-sm mt-1.5'>12,683 properties</p>
                        </div>
                        <div className='group w-[107px] cursor-pointer'>
                            <h2 className='text-primary font-medium group-hover:text-brand group-hover:underline duration-300'>Miami</h2>
                            <p className='text-second text-sm mt-1.5'>12,683 properties</p>
                        </div>
                        <div className='group w-[107px] cursor-pointer'>
                            <h2 className='text-primary font-medium group-hover:text-brand group-hover:underline duration-300'>Bangladesh</h2>
                            <p className='text-second text-sm mt-1.5'>12,683 properties</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Places