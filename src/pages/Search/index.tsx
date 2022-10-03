import React, { useEffect, useState } from 'react';
import Footer from 'components/footer';
import MainSelectCard from 'components/mainSelectCard/index';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import Header from 'components/header';
import { DocumentType } from '../../types/document';
import { getSearchPortfolio } from '../../apis/portfolioApi';
import notFoundIcon from '../../assets/icons/not_found_icon.png';
import Container from './styles.';

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
    <>
      <Header />
      <Container>
        <div className="title">&apos;{new URLSearchParams(window.location.search).get('where')}&apos; 검색 결과</div>
        {searchPortfolio.length !== 0 ? (
          <Swiper
            slidesPerView={4}
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
      </Container>
      <Footer />
    </>
  );
}

export default SearchPage;
