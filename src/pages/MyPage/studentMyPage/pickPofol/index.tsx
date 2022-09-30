import React, { useEffect, useState } from 'react';
import { Container } from 'pages/MyPage/studentMyPage/pickPofol/styles';
import ScrapSelectCard from 'components/scrapSelectCard';
import { getUserLikePortfolio } from 'apis/likeApi';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';

function PickPofol() {
  const readmeUserInfo = localStorage.getItem('readme_userInfo');
  const [userLikePortfolio, setUserLikePortfolio] = useState([]);
  const userId = readmeUserInfo !== null ? JSON.parse(readmeUserInfo).id : null;

  useEffect(() => {
    async function fetchUserLikePortfolioData() {
      const datas = await getUserLikePortfolio(userId);
      setUserLikePortfolio(datas);
    }
    fetchUserLikePortfolioData();
  }, []);

  if (userLikePortfolio.length === 0) {
    return (
      <div style={{ fontSize: '40px', margin: '10% auto' }}>
        <img
          src={require('assets/icons/not_found_icon.png')}
          style={{ width: '500px', height: '300px' }}
          alt="not_found"
        />
        <br />
        <strong>스크랩한 포트폴리오가 없어요!</strong>
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
        {userLikePortfolio.map((data) => (
          <SwiperSlide>
            <ScrapSelectCard key={data} data={data} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}

export default PickPofol;
