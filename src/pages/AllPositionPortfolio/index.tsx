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
import PangyoLogo from '../../assets/images/companyDefault/Pangyo.jpg';
import DevLogo from '../../assets/images/companyDefault/devImg.gif';
import HackingLogo from '../../assets/images/companyDefault/hacking.jpg';
import CodingLogo from '../../assets/images/companyDefault/coding.gif';

const companyLogo = [PangyoLogo, DevLogo, HackingLogo, CodingLogo];

type recruitTypes = {
  id: number;
  companyName: string;
  content: string;
  skillStack: string;
  jobOpening: string;
  region: string;
  salary: string;
};

function AllPositionPortfolio() {
  const [userLikePortfolio, setUserLikePortfolio] = useState([]);
  const [recuitDatas, setRecruitDatas] = useState<recruitTypes[]>([]);
  let idx1 = 0;
  let idx2 = 0;
  let idx3 = 0;
  let idx4 = 0;
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
              (data: recruitTypes) =>
                data.jobOpening === '개발' && (
                  <SwiperSlide>
                    <CompanySelectCard logo={companyLogo[idx2++]} data={data} key={data.id} />
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
              (data: recruitTypes) =>
                data.jobOpening === '영업/기획' && (
                  <SwiperSlide>
                    <CompanySelectCard logo={companyLogo[idx1++]} data={data} key={data.id} />
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
              (data: recruitTypes) =>
                data.jobOpening === '디자인' && (
                  <SwiperSlide>
                    <CompanySelectCard logo={companyLogo[idx3++]} data={data} key={data.id} />
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
              (data: recruitTypes) =>
                data.jobOpening === '인턴/계약직' && (
                  <SwiperSlide>
                    <CompanySelectCard logo={companyLogo[idx4++]} data={data} key={data.id} />
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
