import React, { useState } from 'react'
import CommonHead from '../Common/CommonHead'
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from 'react-icons/md';
import image1 from '../../assets/images/newYork.png'
import image2 from '../../assets/images/London.png'
import image3 from '../../assets/images/Barcelona.png'
import image4 from '../../assets/images/rome.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const Destination = () => {
        const [center, setCenter] = useState(0);

        function NextArrow({ onClick }) {
        return (
            <div
            onClick={onClick}
            className="absolute -right-10 top-1/2 text-[78px] -translate-y-1/2 cursor-pointer text-primary hover:text-white duration-300 z-10"
            >
            <MdKeyboardDoubleArrowRight />
            </div>
        );
    }
    
    function PrevArrow({ onClick }) {
      return (
        <div
          onClick={onClick}
          className="absolute -left-10 top-1/2 text-[78px] -translate-y-1/2 cursor-pointer text-primary hover:text-white duration-300 z-10"
        >
          <MdKeyboardDoubleArrowLeft />
        </div>
      );
    }
    
        const settings = {
            centerMode: true,
            centerPadding: "0px",
            slidesToShow: 3,
            infinite: true,
            speed: 500,
            beforeChange: (oldIndex, newIndex) => setCenter(newIndex),
            arrows: true,
            nextArrow: <NextArrow />,
            prevArrow: <PrevArrow />,
        };
        
        const slides = [
            { img: image1, name: "New York"},
            { img: image2, name: "London"},
            { img: image3, name: "Rome"},
            { img: image4, name: "Barcelona"},
      ];
  return (
    <>
        <section id='Destination'>
            <div className="container">
                <div id="Destination-Row">
                    {/* --------------------Header------------------ */}
                    <CommonHead/>
                    {/* --------------------Slider------------------ */}
                    <div className="slider-container">
                        <Slider {...settings}>
                            {slides.map((slide, idx) => (
                            <div key={idx} className="px-2">
                                <div className={`relative rounded-xl overflow-hidden transition-transform duration-300 ${idx === center ? "scale-110" : "scale-90"}`} >
                                <img src={slide.img} alt={slide.name} className="w-full h-120 object-cover"/>
                                {idx === center ? (
                                    <div>
                                        <div className="absolute bottom-0 font-gilroy left-0 w-full pb-8 bg-[#0852977e] text-white p-4">
                                            <h3 className="text-lg font-bold">{slide.name}</h3>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="absolute inset-0 flex items-center justify-center bg-[#00000077]">
                                        <h3 className="text-white text-2xl tracking-widest">{slide.name}</h3>
                                    </div>
                                )}
                                </div>
                            </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Destination