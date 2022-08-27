import React, { useEffect, useState } from 'react';
import Footer from 'components/footer';
import MainSelectCard from 'components/mainSelectCard/index';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import Header from '../Home/header/Header';
import { DocumentType } from '../../types/document';
import { getSearchPortfolio } from '../../apis/portfolioApi';
import notFoundIcon from '../../assets/icons/not_found_icon.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './index.css';

function SearchPage() {
  const [searchPortfolio, setSearchPortfolio] = useState<DocumentType[]>([]);

  useEffect(() => {
    async function getSearhResult() {
      const searchParams = new URLSearchParams(window.location.search);
      const text = searchParams.get('where');
      const datas: [DocumentType] = await getSearchPortfolio(`${text}`);
      setSearchPortfolio(datas);
    }
    getSearhResult();
  }, []);

  return (
    <div className="cardView">
      <Header />
      <hr />
      <div
        style={{
          height: '100vh',
          padding: searchPortfolio.length < 8 ? '10%' : '0%',
        }}
      >
        {searchPortfolio.length !== 0 ? (
          <Swiper
            slidesPerView={4}
            grid={{
              rows: searchPortfolio.length < 8 ? 1 : 2,
            }}
            navigation
            spaceBetween={40}
            pagination={{
              clickable: true,
            }}
            modules={[Grid, Pagination, Navigation]}
            className="mySwiper"
          >
            {searchPortfolio.map(
              (data: DocumentType) =>
                data.visibility === 'PUBLIC' && (
                  <SwiperSlide>
                    <MainSelectCard data={data} key={data.docId} />
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
      </div>
      <Footer />
    </div>
  );
}

export default SearchPage;
