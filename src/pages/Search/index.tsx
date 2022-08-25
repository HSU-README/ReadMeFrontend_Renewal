import React, { useEffect, useState } from 'react';
import Footer from 'components/footer';
import MainSelectCard from 'components/mainSelectCard/index';
import Slider from 'react-slick';
import Header from '../Home/header/Header';
import { DocumentType } from '../../types/document';
import { getSearchPortfolio } from '../../apis/portfolioApi';
import prevBtn from '../../assets/icons/prevArrow.png';
import nextBtn from '../../assets/icons/nextArrow.png';
import notFoundIcon from '../../assets/icons/not_found_icon.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './index.css';

function SearchPage() {
  const [searchPortfolio, setSearchPortfolio] = useState<DocumentType[]>([]);

  interface NextArrowProps {
    className?: any;
    style?: any;
    onClick?: React.MouseEventHandler<HTMLImageElement>;
  }
  function NextArrow({ className, style, onClick }: NextArrowProps) {
    // eslint-disable-next-line max-len
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
    return (
      // eslint-disable-next-line max-len
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
      <img
        src={nextBtn}
        alt="다음"
        className={className}
        style={{ ...style, width: '15px', height: '15px' }}
        onClick={onClick}
      />
    );
  }

  function PrevArrow({ className, style, onClick }: NextArrowProps) {
    // eslint-disable-next-line max-len
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
    return (
      // eslint-disable-next-line max-len
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
      <img
        src={prevBtn}
        alt="다음"
        className={className}
        style={{ ...style, width: '15px', height: '15px' }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 1,
    speed: 500,
    rows: 2,
    dots: true,
    slidesPerRow: 2,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
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
    <div className="cardView">
      <Header />
      <div>
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
