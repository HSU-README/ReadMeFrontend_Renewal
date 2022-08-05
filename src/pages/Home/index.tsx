import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Slider from 'react-slick';
import colors from 'styles/colors.js';
import prevArrow from 'assets/icons/prevArrow.png';
import nextArrow from 'assets/icons/nextArrow.png';
import MainSelectCard from 'components/mainSelectCard/index.jsx';
import Footer from 'components/footer/index.jsx';
import { getMostLikePortfolio, getAllPortfolio, getMajorPortfolio } from 'apis/portfolioApi';
import { DocumentType } from 'types/document.js';
import Banner from 'pages/Home/header/Banner';
import Header from 'pages/Home/header/index';
import 'react-toastify/dist/ReactToastify.css';
import './styles.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <img
      className={className}
      src={prevArrow}
      alt="next"
      style={{ ...style, width: '15px', height: '15px' }}
      onClick={onClick}
      aria-hidden="true"
    />
  );
}

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <img
      className={className}
      src={nextArrow}
      alt="next"
      style={{ ...style, width: '15px', height: '15px' }}
      onClick={onClick}
      aria-hidden="true"
    />
  );
}

function Home() {
  const [, setMostLikePortfolio] = useState([]);
  const [allPortfolio, setAllPortfolio] = useState([]);

  // const { loginCheck } = useSelector((state) => state.loginCheck);

  const [sliderCount, setSliderCount] = useState(4); // 기본화면에서 4개
  useEffect(() => {
    const readmeUserInfo = localStorage.getItem('readme_userInfo');
    window.addEventListener('resize', () => {
      if (window.outerWidth > 1320) {
        setSliderCount(4);
      } else if (window.outerWidth > 1000 && window.outerWidth <= 1320) {
        setSliderCount(3);
      } else if (window.outerWidth > 660 && window.outerWidth <= 1000) {
        setSliderCount(2);
      } else if (window.outerWidth <= 660) {
        setSliderCount(1);
      }
    });
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
    fetchMostLikePortfolioData();
    fetchAllPortfolioData();
    fetchMajorPortfolioData();
  }, []);

  const settings = {
    arrows: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: sliderCount,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div style={{ position: 'relative', backgroundColor: '#F8F9FA' }}>
      <Header />
      <div>
        <Banner />
      </div>
      <div />

      {/* {loginCheck && ( */}
      <br />
      <div className="pofolBtnHeader">
        <NavLink className="pofolBtn" to="/select" style={{ textDecoration: 'none', color: 'white' }}>
          <button type="button" className="pofolBtn">
            포트폴리오 만들기
          </button>
        </NavLink>
      </div>
      {/* )} */}

      <div className="sectionFont">인기 포트폴리오</div>
      <Slider {...settings} />

      <div className="sectionFont">
        전체 포트폴리오
        <Link
          to="/all"
          style={{
            textDecoration: 'none',
            color: colors.gray,
            fontSize: '20px',
            lineHeight: '50px',
            marginLeft: '18px',
          }}
        >
          <h6 style={{ color: colors.gray, lineHeight: '40px' }}>+ 더보기 </h6>
        </Link>
      </div>
      <Slider {...settings}>
        {allPortfolio.map((data: DocumentType) => data.visibility === 'PUBLIC' && <MainSelectCard data={data} />)}
      </Slider>

      <div className="sectionFont">학과별 포트폴리오</div>
      <Slider {...settings}>
        {allPortfolio.map((data: DocumentType) => data.visibility === 'PUBLIC' && <MainSelectCard data={data} />)}
      </Slider>

      <br />
      <br />
      <Footer />
    </div>
  );
}

export default Home;
