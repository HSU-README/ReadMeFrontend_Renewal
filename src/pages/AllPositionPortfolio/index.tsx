import React, { useEffect, useState } from 'react';
import { Container } from 'pages/AllPositionPortfolio/styles';
import CompanySelectCard from 'components/companySelectCard';
import { getAllPortfolio } from 'apis/portfolioApi';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import Header from 'components/header';
import Footer from 'components/footer';
import { getAllRecruitment } from '../../apis/companyApi';
import { RecruitType } from '../../types/document';

function AllPositionPortfolio() {
  const [userLikePortfolio, setUserLikePortfolio] = useState([]);
  const [recuitDatas, setRecruitDatas] = useState<RecruitType[]>([]);
  useEffect(() => {
    async function fetchUserLikePortfolioData() {
      const datas = await getAllPortfolio();
      setUserLikePortfolio(datas);
    }
    async function fetchAllrecruitData() {
      const recruitDatas = await getAllRecruitment();
      setRecruitDatas(recruitDatas?.data.result.slice(0, 12));
    }
    fetchUserLikePortfolioData();
    fetchAllrecruitData();
  }, []);

  return (
    <>
      <Header />
      <Container>
        <div className="titleFont">전체 구인 포지션</div>

        <div className="subFont">개발</div>
        <div className="swiperSection">
          <Swiper
            slidesPerView={5}
            grid={{
              rows: userLikePortfolio.length < 4 ? 1 : 1,
            }}
            modules={[Pagination, Navigation]}
          >
            {recuitDatas.map(
              (data: RecruitType) =>
                data.jobOpening === '개발' && (
                  <SwiperSlide>
                    <CompanySelectCard logo={data.firebaseUrl} data={data} key={data.companyName} />
                  </SwiperSlide>
                ),
            )}
          </Swiper>
        </div>
        <div className="subFont">영업 / 기획</div>
        <div className="swiperSection">
          <Swiper
            slidesPerView={5}
            grid={{
              rows: 1,
            }}
            modules={[Pagination, Navigation]}
          >
            {recuitDatas.map(
              (data: RecruitType) =>
                data.jobOpening === '영업/기획' && (
                  <SwiperSlide>
                    <CompanySelectCard logo={data.firebaseUrl} data={data} key={data.companyName} />
                  </SwiperSlide>
                ),
            )}
          </Swiper>
        </div>
        <div className="subFont">디자인</div>
        <div className="swiperSection">
          <Swiper
            slidesPerView={5}
            grid={{
              rows: userLikePortfolio.length < 4 ? 1 : 1,
            }}
            modules={[Pagination, Navigation]}
          >
            {recuitDatas.map(
              (data: RecruitType) =>
                data.jobOpening === '디자인' && (
                  <SwiperSlide>
                    <CompanySelectCard logo={data.firebaseUrl} data={data} key={data.companyName} />
                  </SwiperSlide>
                ),
            )}
          </Swiper>
        </div>
        <div className="subFont">인턴 / 계약직</div>
        <div className="swiperSection">
          <Swiper
            slidesPerView={5}
            grid={{
              rows: userLikePortfolio.length < 4 ? 1 : 1,
            }}
            modules={[Pagination, Navigation]}
          >
            {recuitDatas.map(
              (data: RecruitType) =>
                data.jobOpening === '인턴/계약직' && (
                  <SwiperSlide>
                    <CompanySelectCard logo={data.firebaseUrl} data={data} key={data.companyName} />
                  </SwiperSlide>
                ),
            )}
          </Swiper>
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default AllPositionPortfolio;
