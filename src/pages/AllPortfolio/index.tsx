import React, { useEffect, useState } from 'react';
import { Container } from 'pages/AllPortfolio/styles';
import MainSelectCard from 'components/mainSelectCard';
import { getAllPortfolio } from 'apis/portfolioApi';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import Header from 'components/header';
import Footer from 'components/footer';
import { DocumentType } from 'types/document';
import notFoundIcon from '../../assets/icons/not_found_icon.png';

function AllPortfolio() {
  const [userLikePortfolio, setUserLikePortfolio] = useState([]);

  useEffect(() => {
    async function fetchUserLikePortfolioData() {
      const datas = await getAllPortfolio();
      setUserLikePortfolio(datas);
    }
    fetchUserLikePortfolioData();
  }, []);

  return (
    <>
      <Header />
      <Container>
        <div className="titleAllFont">전체 포트폴리오</div>
        {userLikePortfolio.length !== 0 ? (
          <Swiper
            slidesPerView={5}
            grid={{
              rows: 1,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Grid, Pagination, Navigation]}
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
        ) : (
          <div className="notFound">
            <img src={notFoundIcon} className="notFoundIcon" alt="아무것도 없어요" />
            <div className="notFoundText">찾으시는 문서가 없어요!</div>
          </div>
        )}
      </Container>
      <Footer />
    </>
  );
}

export default AllPortfolio;
