import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import banner1 from 'assets/images/banner1.png';
import banner2 from 'assets/images/banner2.png';
import banner3 from 'assets/images/banner3.png';
import './styles.css';

function Banner() {
  const dummyImages = [{ src: banner1 }, { src: banner2 }, { src: banner3 }];
  return (
    <Swiper
      slidesPerView={1}
      grid={{
        rows: 1,
      }}
      navigation
      pagination={{
        clickable: true,
      }}
      modules={[Grid, Pagination, Navigation]}
      className="mySwiper"
    >
      {dummyImages.map((item, index) => (
        <SwiperSlide key={item.src}>
          <img src={item.src} id={index.toString()} key={item.src} alt="배너" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Banner;
