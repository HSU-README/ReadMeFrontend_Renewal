import React, { useEffect, useState } from 'react';
import { Container } from 'pages/AllPortfolio/styles';
import MainSelectCard from 'components/mainSelectCard';
import { getAllPortfolio } from 'apis/portfolioApi';

import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import Header from 'components/header';
import Footer from 'components/footer';
import { DocumentType } from 'types/document';
import './styles.css';

function AllPositionPortfolio() {
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
      <Container>
        <Header />
        <div style={{ fontSize: '40px', margin: '220px 400px' }}>
          <img
            src={require('assets/icons/not_found_icon.png')}
            style={{ width: '507px', height: '301px' }}
            alt="not_found"
          />
          <br />
          <strong>찾으시는 포트폴리오가 없어요!</strong>
        </div>
        <Footer />
      </Container>
    );
  }

  return (
    // swiper 익숙치 않아서 막 쓴 부분이 있음 보고 수정 부탁요.
    <Container>
      <Header />
      <div className="titleFont">전체 구인 포지션</div>
      <div className="subFont">영업 / 기획</div>
      <div
        style={{
          width: '85%',
          margin: '0 auto',
          height: '80vh',
          padding: userLikePortfolio.length < 4 ? '10%' : '0%',
        }}
      >
        <Swiper
          slidesPerView={4}
          grid={{
            rows: userLikePortfolio.length < 4 ? 1 : 1,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination, Navigation]}
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
      <div className="subFont">개발</div>
      <div
        style={{
          width: '85%',
          margin: '0 auto',
          height: '80vh',
          padding: userLikePortfolio.length < 4 ? '10%' : '0%',
        }}
      >
        <Swiper
          slidesPerView={4}
          grid={{
            rows: userLikePortfolio.length < 4 ? 1 : 1,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination, Navigation]}
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
      <div className="subFont">디자인</div>
      <div
        style={{
          width: '85%',
          margin: '0 auto',
          height: '80vh',
          padding: userLikePortfolio.length < 4 ? '10%' : '0%',
        }}
      >
        <Swiper
          slidesPerView={4}
          grid={{
            rows: userLikePortfolio.length < 4 ? 1 : 1,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination, Navigation]}
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
      <div className="subFont">인턴 / 계약직</div>
      <div
        style={{
          width: '85%',
          margin: '0 auto',
          height: '80vh',
          padding: userLikePortfolio.length < 4 ? '10%' : '0%',
        }}
      >
        <Swiper
          slidesPerView={4}
          grid={{
            rows: userLikePortfolio.length < 4 ? 1 : 1,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination, Navigation]}
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

export default AllPositionPortfolio;
