/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import colors from 'styles/colors';
import MainSelectCard from 'components/mainSelectCard';
import CompanySelectCard from 'components/companySelectCard';
import Footer from 'components/footer';
import { getMostLikePortfolio, getAllPortfolio, getMajorPortfolio } from 'apis/portfolioApi';
import { getAllReacuitData } from 'apis/company';
import { DocumentType } from 'types/document';
import Banner from 'pages/Home/header/Banner';
import Header from 'pages/Home/header/Header';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Pagination, Navigation } from 'swiper';
import LoginModal from './LoginModal';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import 'react-toastify/dist/ReactToastify.css';
import './styles.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Home() {
  const [mostLikePortfolio, setMostLikePortfolio] = useState([]);
  const [allPortfolio, setAllPortfolio] = useState([]);
  const [allRecruitData, setAllRecruitData] = useState([]);
  // null 이면 true
  const [showLoginModal, setShowLoginModal] = useState(false);
  const readmeUserInfo = localStorage.getItem('readme_userInfo');
  useEffect(() => {
    async function fetchMostLikePortfolioData() {
      const datas = await getMostLikePortfolio();
      setMostLikePortfolio(datas);
    }
    async function fetchAllPortfolioData() {
      const datas = await getAllPortfolio();
      setAllPortfolio(datas);
    }
    async function fetchMajorPortfolioData() {
      if (readmeUserInfo != null) {
        const userId = JSON.parse(readmeUserInfo).id;
        await getMajorPortfolio(userId);
      }
    }
    async function fetchAllrecruitData() {
      const recruitDatas = await getAllReacuitData();
      setAllRecruitData(recruitDatas?.data.result);
    }
    fetchMostLikePortfolioData();
    fetchAllPortfolioData();
    fetchMajorPortfolioData();
    fetchAllrecruitData();
  }, []);
  return (
    // eslint-disable-next-line react/jsx-no-comment-textnodes
    <div style={{ position: 'relative', backgroundColor: 'white' }}>
      {showLoginModal && <LoginModal setShowLoginModal={setShowLoginModal} showLoginModal={showLoginModal} />}
      <Header />
      <hr className="hrLine" />
      <Banner />
      <br />
      <div className="pofolBtnHeader">
        {readmeUserInfo ? (
          <NavLink className="pofolBtn" to="/select" style={{ textDecoration: 'none', color: 'white' }}>
            <button type="button" className="pofolBtn">
              포트폴리오 만들기
            </button>
          </NavLink>
        ) : (
          <button type="button" className="pofolBtn" onClick={() => setShowLoginModal(true)}>
            포트폴리오 만들기
          </button>
        )}
      </div>
      <div className="sectionFont">인기 포트폴리오</div>
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
        {mostLikePortfolio.map(
          (data: DocumentType) =>
            data.visibility === 'PUBLIC' && (
              <SwiperSlide>
                <MainSelectCard key={data.docId} data={data} />
              </SwiperSlide>
            ),
        )}
      </Swiper>
      <div className="sectionFont">
        전체 포트폴리오
        <Link
          to="/all"
          style={{
            textDecoration: 'none',
            color: colors.gray,
            fontSize: '20px',
            lineHeight: '40px',
            marginLeft: '18px',
          }}
        >
          <h6 style={{ color: colors.gray, lineHeight: '10px' }}>+ 더보기 </h6>
        </Link>
      </div>
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
        {allPortfolio.map(
          (data: DocumentType) =>
            data.visibility === 'PUBLIC' && (
              <SwiperSlide>
                <MainSelectCard key={data.docId} data={data} />
              </SwiperSlide>
            ),
        )}
      </Swiper>
      <div className="sectionFont">
        구인
        <Link
          to="/allPositionpage"
          style={{
            textDecoration: 'none',
            color: colors.gray,
            fontSize: '20px',
            lineHeight: '40px',
            marginLeft: '18px',
          }}
        >
          <h6 style={{ color: colors.gray, lineHeight: '10px' }}>+ 더보기 </h6>
        </Link>
      </div>
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
        {allRecruitData.map((data: DocumentType) => (
          <SwiperSlide>
            <CompanySelectCard data={data} />
          </SwiperSlide>
        ))}
      </Swiper>
      <br />
      <br />
      <Footer />
    </div>
  );
}
export default Home;
