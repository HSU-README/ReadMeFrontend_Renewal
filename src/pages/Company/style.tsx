import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  text-align: left;
  .section {
    margin-bottom: 5%;
  }
  .sectionName {
    width: 9rem;
    display: inline-block;
    position: relative;
    margin-right: 1rem;
    text-align: end;
    font-size: 1.3rem;
    font-weight: 700;
  }
  form {
    width: 65rem;
    margin: 4% auto;
    background-color: #d9d9d9;
    padding-right: 2rem;
    border-radius: 20px;
    padding-bottom: 3%;
  }
  .inputCompanyName {
    width: 80%;
    height: 2vh;
    display: inline-block;
    padding: 1rem;
    border-radius: 15px;
    background-color: white;
    border: none;
  }
  .inputCompanyName2 {
    display: inline-block;
    width: 20rem;
    height: 2vh;
    padding: 1rem;
    border-radius: 15px;
    background-color: white;
    border: none;
  }
  .inputURL {
    width: 26rem;
    padding-left: 1rem;
    margin-right: 2rem;
    border-radius: 15px;
    background-color: white;
    border: none;
  }
  .menuItems {
    width: content-fit;
    height: 6vh;
    padding-left: 2%;
    padding-right: 2%;
    border-radius: 15px;
    background-color: white;
    border: none;
  }
  .fileName {
    font-size: 1.3rem;
    font-weight: 700;
    text-align: center;
    vertical-align: middle;
  }
`;

/* 마지막 베너 */
type ImageBoxProps = {
  background?: string | undefined;
};
export const ImageBox = styled.section<ImageBoxProps>`
  width: 16.6rem;
  height: 10rem;
  display: inline-block;
  ${(props) =>
    props.background &&
    `background:url(${props.background}) no-repeat center;
          background-size: cover;
          border-radius:0px 20px 0px 0px;
          `};
`;

/* 2,3 번째 베너 */
type ImageBoxProps2 = {
  background?: string | undefined;
};
export const ImageBox2 = styled.section<ImageBoxProps2>`
  width: 16.6rem;
  height: 10rem;
  display: inline-block;
  ${(props) =>
    props.background &&
    `background:url(${props.background}) no-repeat center;
          background-size: cover;
          border-radius:0px 0px 0px 0px;
          `};
`;

/* 첫 번째 베너 */
type ImageBoxProps3 = {
  background?: string | undefined;
};
export const ImageBox3 = styled.section<ImageBoxProps3>`
  width: 16.6rem;
  height: 10rem;
  display: inline-block;
  ${(props) =>
    props.background &&
    `background:url(${props.background}) no-repeat center;
          background-size: cover;
          border-radius:20px 0px 0px 0px;
          `};
`;

export default Container;
