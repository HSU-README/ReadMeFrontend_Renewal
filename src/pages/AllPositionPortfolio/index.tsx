import React, { useEffect, useState } from 'react';
import { Container } from 'pages/AllPositionPortfolio/styles';
import CompanySelectCard from 'components/companySelectCard';
import { getAllPortfolio } from 'apis/portfolioApi';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, FreeMode, Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import Header from 'components/header';
import Footer from 'components/footer';
import { getAllRecruitment } from '../../apis/companyApi';
import './styles.css';
// import NaverLogo from '../../assets/images/naver_logo.png';
// import KaKaoLogo from '../../assets/images/kakaoLogo.jpeg';
// import LineLogo from '../../assets/images/LineLogo.png';
// import CoupangLogo from '../../assets/images/coupangLogo.png';
// import DeliveryLogo from '../../assets/images/deliveryLogo.jpeg';
// import CaretLogo from '../../assets/images/caretLogo.png';
// import TossLogo from '../../assets/images/tossLogo.jpeg';
import PangyoLogo from '../../assets/images/companyDefault/Pangyo.jpg';
import DevLogo from '../../assets/images/companyDefault/devImg.gif';
import HackingLogo from '../../assets/images/companyDefault/hacking.jpg';
import CodingLogo from '../../assets/images/companyDefault/coding.gif';

// const companyLogo = [NaverLogo, KaKaoLogo, LineLogo, CoupangLogo, DeliveryLogo, CaretLogo, TossLogo];
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
          <strong>찾으시는 채용공고 없어요!</strong>
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
            rows: 1,
          }}
          navigation
          spaceBetween={40}
          modules={[Grid, Pagination, Navigation]}
          className="mySwiper"
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
      <Footer />
    </Container>
  );
}

export default AllPositionPortfolio;
