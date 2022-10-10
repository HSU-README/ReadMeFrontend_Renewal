import styled from 'styled-components';
import maxWidth from 'styles/mixin';

const Container = styled.div`
  ${maxWidth}

  .sectionFont {
    display: flex;
    font-weight: bold;
    color: black;
    font-size: 40px;
    margin-left: 16%;
    margin-top: 4%;
  }

  .swiper-container {
    width: 75%;
    height: 120vh;
    background-color: white;
    margin: 0px auto 3% auto;
  }

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    bottom: 2%;
    height: 40%;
  }

  .swiper-wrapper {
    width: 80%;
    height: 120%;
  }
`;

export default Container;
