/* eslint-disable array-callback-return */
import React, { useEffect, useState } from 'react';
import Header from 'components/header';
import Footer from 'components/footer';
import MainSelectCard from 'components/mainSelectCard/index';
import Slider from 'react-slick';
import { DocumentType } from '../../types/document';
import { getSearchPortfolio } from '../../apis/portfolioApi';
import './index.css';

function SearchPage() {
  const [searchPortfolio, setSearchPortfolio] = useState<DocumentType[]>([]);
  const settings = {
    rows: 2,
    dots: false,
    arrows: true,
    infinite: true,
    speed: 300,
    sliderPerRow: 3,
    slidesToShow: searchPortfolio.length > 3 ? 3 : 1,
    slidesToScroll: 1,
  };
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
    <div>
      <Header />
      <div className="cardView">
        {searchPortfolio.length !== 0 ? (
          <Slider {...settings} className="slick">
            {searchPortfolio.map(
              (data: DocumentType) =>
                data.visibility === 'PUBLIC' && (
                  <span key={data.docId}>
                    <MainSelectCard data={data} key={data.docId} />
                  </span>
                ),
            )}
          </Slider>
        ) : (
          <div>아무것도 없어요</div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default SearchPage;
