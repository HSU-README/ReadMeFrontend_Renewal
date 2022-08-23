import React from 'react';
import Slider from 'react-slick';
import banner1 from 'assets/images/banner1.png';
import banner2 from 'assets/images/banner2.png';
import banner3 from 'assets/images/banner3.png';

function Banner() {
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 8000,
  };

  const dummyImages = [{ src: banner1 }, { src: banner2 }, { src: banner3 }];
  return (
    <Slider {...settings}>
      {dummyImages.map((item, index) => (
        <img src={item.src} id={index.toString()} key={item.src} alt="배너" />
      ))}
    </Slider>
  );
}

export default Banner;
