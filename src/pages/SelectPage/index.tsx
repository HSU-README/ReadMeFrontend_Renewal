import React from 'react';
import Container from 'pages/SelectPage/styles';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import Header from 'components/header';
import Footer from 'components/footer';
import basicSelect from 'localData/basicSelect.json';
import NewGenerateCard from 'components/newGenerateCard';
import BasicSelectCard from 'components/basicSelectCard';

function SelectPortfolio() {
  const datas = basicSelect.data;

  return (
    <Container>
      <Header />
      <div className="sectionFont">양식 선택</div>
      <div
        style={{
          width: '100%',
          height: '170vh',
          backgroundColor: 'white',
        }}
      >
        <Swiper
          slidesPerView={3}
          grid={{
            rows: 2,
          }}
          spaceBetween={40}
          pagination={{
            clickable: true,
          }}
          modules={[Grid, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <NewGenerateCard />
          </SwiperSlide>
          {datas.map((data: any) => (
            <SwiperSlide>
              <BasicSelectCard data={data.result} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <Footer />
    </Container>
  );
}

export default SelectPortfolio;
