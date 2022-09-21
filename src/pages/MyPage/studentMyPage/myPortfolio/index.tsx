import React from 'react';
import { Container } from 'pages/MyPage/studentMyPage/myPortfolio/styles';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import DeleteSelectCard from 'components/deleteSelectCard';
import { userPortfolioState } from 'recoil/atoms';
import { useRecoilState } from 'recoil';

function MyPortfolio() {
  const [userPortfolio] = useRecoilState(userPortfolioState);

  if (userPortfolio.length === 0) {
    return (
      <div style={{ fontSize: '40px', margin: '220px auto' }}>
        <img
          src={require('assets/icons/not_found_icon.png')}
          style={{ width: '500px', height: '300px' }}
          alt="not_found"
        />
        <br />
        <strong>찾으시는 포트폴리오가 없어요!</strong>
      </div>
    );
  }

  return (
    <Container>
      <div style={{ width: '1500px', margin: '100px 0px 100px 140px', overflow: 'auto', display: 'flex' }}>
        <Swiper
          slidesPerView={5}
          grid={{
            rows: 2,
          }}
          spaceBetween={50}
          pagination={{
            clickable: true,
          }}
          modules={[Grid, Pagination]}
          className="mySwiper"
        >
          {userPortfolio.map((data) => (
            <SwiperSlide>
              <DeleteSelectCard key={data} data={data} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Container>
  );
}

export default MyPortfolio;
