import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 85vh;

  .title {
    display: flex;
    font-weight: bold;
    color: black;
    font-size: 40px;
    margin: 3.5% auto 0px auto;
  }

  .notFound {
    width: 100%;
    height: 65vh;
    text-align: center;
    padding-top: 8%;
  }
  .notFoundIcon {
    width: 30%;
  }
  .notFoundText {
    font-size: 30px;
    font-weight: 600;
  }

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    height: 50vh;
  }

  .swiper-wrapper {
    margin-top: 3%;
  }

  .swiper-pagination {
    margin-bottom: 7%;
  }
`;

export default Container;
