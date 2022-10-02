import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  text-align: left;
  hr {
    border 0.7px solid #B3B3B3;
  }
  form {
    width: 60%;
    height: 90vh;
    margin: 3% auto 3% auto;
    padding-top: 2%;
    padding-right: 2%;
    padding-bottom: 2%;
    box-shadow: 10px 5px 5px #D3D3D3;
  }
  .section {
    margin-bottom: 5%;
    margin-left: 3%;
  }
  .sectionName {
    width: 11%;
    display: inline-block;
    position: relative;
    margin-right: 1%;
    text-align: end;
    font-size: 1.2em;
    font-weight: 700;
  }
  .inputCompanyName {
    width: 80%;
    padding-left: 1%;
    border-radius: 15px;
    background-color: white;
    border: 1px solid black;
  }
  .inputURL {
    width: 60%;
    height: 6vh;
    padding-left: 1%;
    margin-left: 5%;
    margin-right: 2%;
    border-radius: 15px;
    background-color: white;
    border: 1px solid black;
  }
  .menuItems {
    width: fit-content;
    height: 6vh;
    padding-left: 2%;
    padding-right: 2%;
    border-radius: 15px;
    background-color: white;
    border: 1px solid black;
  }
  .linkSectionName {
    font-size: 1.2em;
    font-weight: 700;
    margin-left:2%;
  }
  .urlAndSalarySection {
    margin-left: 4%;
    margin-bottom: 3%;
    display: flex;
  }
`;
type ImageBoxProps = {
  background?: string | undefined;
};
export const ImageBox = styled.section<ImageBoxProps>`
  width: 20%;
  display: inline-block;
  margin-right: 2%;
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
    width: 100%;
    height: 20vh;
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
