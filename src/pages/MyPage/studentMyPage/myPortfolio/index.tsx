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
      <div style={{ fontSize: '40px', margin: '10% auto' }}>
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
      <Swiper
        slidesPerView={4}
        grid={{
          rows: 2,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Grid, Pagination]}
      >
        {userPortfolio.map((data) => (
          <SwiperSlide>
            <DeleteSelectCard key={data} data={data} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}

export default MyPortfolio;
