import styled from 'styled-components';

const Container = styled.div`
  width: 100rem;
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
    margin: 4% 11.4rem;
    background-color: #d9d9d9;
    padding-right: 2rem;
    border-radius: 20px;
    padding-top: 3%;
    padding-bottom: 3%;
  }
  .inputCompanyName {
    width: 80%;
    padding-left: 1rem;
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
`;
type ImageBoxProps = {
  background?: string | undefined;
};
export const ImageBox = styled.section<ImageBoxProps>`
  width: 11rem;
  height: 10rem;
  display: inline-block;
  margin-right: 2rem;
  ${(props) =>
    props.background &&
    `background:url(${props.background}) no-repeat center;
          background-size: cover;
          border-radius:20px;
          `};
  label {
    cursor: pointer;
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px dotted black;
    border-radius: 20px;
    width: 11rem;
    height: 10rem;
    font-size: large;
  }
  label span {
    font-weight: lighter;
    font-size: small;
    padding-top: 0.5rem;
  }
  input {
    display: none;
  }
`;

export default Container;
