import React from 'react'
import image1 from '../../assets/images/slider-image-1.jpeg'
import image2 from '../../assets/images/slider-image-2.jpeg'
import image3 from '../../assets/images/slider-image-3.jpeg'
import Slider from 'react-slick';

export default function MainSlider() {


  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return <>


    <div className="flex pt-5">
      <div className="w-3/4">
        <Slider {...settings}>

          <img src={image1} className='w-full h-[500px]' alt="" />
          <img src={image2} className='w-full h-[500px]' alt="" />
          <img src={image3} className='w-full h-[500px]' alt="" />
        </Slider>
      </div>
      <div className='w-1/4'>
        <img src={image1} className='w-full h-[250px]' alt="" />
        <img src={image2} className='w-full h-[250px]' alt="" />
      </div>
    </div>

  </>


}
