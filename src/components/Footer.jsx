import React from 'react'
import { FaApple, FaFacebookF, FaGooglePlay, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { FiDollarSign } from 'react-icons/fi';
import { SlGlobe } from 'react-icons/sl';
import { Link } from 'react-router';

const Footer = () => {
  return (
    <>
        <footer className="bg-white pt-[60px]">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-10">
                
                {/* Contact */}
                <div>
                    <h3 className="text-primary font-medium mb-4">Contact Us</h3>
                    <p className="text-sm mb-1 text-[#4F547B]">Toll Free Customer Care</p>
                    <p className="text-lg font-medium text-brand mb-[36px]">+(1) 123 456 7890</p>
                    <p className="text-sm mb-1 text-primary">Need live support?</p>
                    <a href="mailto:hi@gotrip.com" className="text-brand font-medium hover:underline">
                        hi@gotrip.com
                    </a>
                </div>

                {/* Company */}
                <div>
                    <h3 className="text-primary font-medium mb-7.5">Company</h3>
                    <ul className="space-y-3 text-[15px] text-primary">
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Press</a></li>
                        <li><a href="#">Gift Cards</a></li>
                        <li><a href="#">Magazine</a></li>
                    </ul>
                </div>

                {/* Support */}
                <div>
                    <h3 className="text-primary font-medium mb-7.5">Support</h3>
                    <ul className="space-y-3 text-[15px] text-primary">
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Legal Notice</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms & Conditions</a></li>
                        <li><a href="#">Sitemap</a></li>
                    </ul>
                </div>

                {/* Services */}
                <div>
                <h3 className="text-primary font-medium mb-7.5">Other Services</h3>
                <ul className="space-y-3 text-[15px] text-primary">
                    <li><a href="#">Car Hire</a></li>
                    <li><a href="#">Activity Finder</a></li>
                    <li><a href="#">Tour List</a></li>
                    <li><a href="#">Flight Finder</a></li>
                    <li><a href="#">Cruise Ticket</a></li>
                    <li><a href="#">Holiday Rental</a></li>
                    <li><a href="#">Travel Agents</a></li>
                </ul>
                </div>

                {/* Mobile */}
                <div>
                    <h3 className="text-primary font-medium mb-4">Mobile</h3>
                    <div className="flex flex-col space-y-3">
                        <a href="#" className="flex items-center gap-3 border border-[#DDDDDD] rounded-[4px] px-5 py-2 hover:bg-gray-800 transition" >
                        <FaApple size={32} />
                        <div>
                            <p className="text-sm text-[#697488]">Download on the</p>
                            <p className="text-[15px] font-medium">Apple Store</p>
                        </div>
                        </a>
                        <a href="#" className="flex items-center gap-3 border border-[#DDDDDD] rounded-[4px] px-5 py-2 hover:bg-gray-800 transition" >
                        <FaGooglePlay size={24} />
                        <div>
                            <p className="text-sm text-[#697488]">Get it on</p>
                            <p className="text-[15px] font-medium">Google Play</p>
                        </div>
                        </a>
                    </div>
                </div>

            </div>
            {/* Bottom Copyright  */}
            <div className='flex items-center justify-between border-t-1 border-[#DDDDDD] container mt-[60px] py-5'>
                <div className='flex items-center gap-15'>
                    <p className='text-sm text-primary'>© 2022 GoTrip LLC All rights reserved.</p>
                    <ul className='list-disc flex items-center gap-10 text-sm text-primary'>
                        <li><Link to={'/'}>Privacy</Link></li>
                        <li><Link to={'/'}>Terms</Link></li>
                        <li><Link to={'/'}>Site Map</Link></li>
                    </ul>
                </div>

                <div className='flex items-center'>
                    <div className='flex items-center gap-2.5'>
                        <SlGlobe />
                        <Link to={'/'} className='text-sm font-medium text-primary underline'>English (US)</Link>
                    </div>
                    <div className='flex items-center gap-1 ml-[10px]'>
                        <FiDollarSign />
                        <Link to={'/'} className='text-sm font-medium text-primary underline'>USD</Link>
                    </div>
                    <div className='flex items-center gap-5 ml-[30px] text-primary'>
                        <Link to={'/'}><FaFacebookF /></Link>
                        <Link to={'/'}><FaTwitter /></Link>
                        <Link to={'/'}><FaInstagram /></Link>
                        <Link to={'/'}><FaLinkedinIn /></Link>
                    </div>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer