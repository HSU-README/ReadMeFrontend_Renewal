import React, { useEffect, useState } from 'react';
import { Container } from 'pages/AllPortfolio/styles';
import MainSelectCard from 'components/mainSelectCard';
import { getAllPortfolio } from 'apis/portfolioApi';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import Header from 'components/header';
import Footer from 'components/footer';
import { DocumentType } from 'types/document';

function AllPortfolio() {
  const [userLikePortfolio, setUserLikePortfolio] = useState([]);

  useEffect(() => {
    async function fetchUserLikePortfolioData() {
      const datas = await getAllPortfolio();
      setUserLikePortfolio(datas);
    }
    fetchUserLikePortfolioData();
  }, []);

  if (userLikePortfolio.length === 0) {
    return (
      <div style={{ fontSize: '40px', margin: '220px 400px' }}>
        <img
          src={require('assets/icons/not_found_icon.png')}
          style={{ width: '507px', height: '301px' }}
          alt="not_found"
        />
        <br />
        <strong>찾으시는 포트폴리오가 없어요!</strong>
      </div>
    );
  }

  return (
    <Container>
      <Header />
      <div className="sectionFont">전체 포트폴리오</div>
      <div
        style={{
          width: '1600px',
          margin: '-30px 0px 50px 100px',
          height: '85vh',
        }}
      >
        <Swiper
          slidesPerView={5}
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
          {userLikePortfolio.map(
            (data: DocumentType) =>
              data.visibility === 'PUBLIC' && (
                <SwiperSlide>
                  <MainSelectCard data={data} />
                </SwiperSlide>
              ),
          )}
        </Swiper>
      </div>
      <Footer />
    </Container>
  );
}

export default AllPortfolio;
