import styled from 'styled-components';
import colors from 'styles/colors';
import maxWidth from 'styles/mixin';

export const Container = styled.div`
  ${maxWidth}
  height: 78vh;
  background-color: white;

  .sectionFont {
    display: flex;
    justify-content: flex-start;
    margin-top: 30px;
    margin-bottom: 40px;
    margin-left: 100px;
    font-weight: bold;
    color: black;
    font-size: 35px;
  }

  .titleAllFont {
    display: flex;
    justify-content: center;
    font-weight: bold;
    color: black;
    font-size: 40px;
    margin: 3.5% auto 0px auto;
  }

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    height: 45vh;
  }

  .swiper-wrapper {
    margin-top: 3%;
  }

  .swiper-pagination {
    margin-bottom: 11%;
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
`;

export const Input = styled.input`
  border-radius: 4px;
  border: 1px solid;
  border-color: ${colors.loginText};
  padding-bottom: 20px;
  max-width: 740px;
  width: 100%;
  box-sizing: border-box;
  margin: 0 0 20px;
  padding: 12px;
  padding-top: 11px;
  padding-bottom: 13px;
  font-size: 18px;
  line-height: 1.33333333;
`;

export const Button = styled.button`
  margin-bottom: 12px;
  width: 60%;
  height: 45px;
  max-width: 540px;
  max-height: 80px;
  color: #fff;
  background-color: ${colors.loginButton};
  border: none;
  font-size: 30px;
  padding: 0 16px 0px;
  transition: all 80ms linear;
  user-select: none;
  outline: none;
  cursor: pointer;
  border-radius: 4px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
`;
