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
    box-shadow: 10px 5px 5px #D3D3D3;
    margin: 3% auto 3% auto;
    padding-top: 2%;
    padding-right: 2rem;
    padding-bottom: 2%;
    shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  }
  .nameSection {
    font-size: 2rem;
    padding: 1% 5% 1% 5%;
  }
  .name {
    font-weight: 800;
    padding-left: 2%;
  }
  .recruitInfoHeaderSection {
    padding: 0% 5% 3% 5%;
    margin-top: 1%;
  }
  .infoHeader{
    font-size: 1.2em;
    font-weight: 800;
    padding-left: 2%;
  }
  .recruitInfoDatas{
    display: grid;
    height: 200px;
    grid-template: repeat(3, 1fr) / repeat(2, 1fr);
    gap: 20px 0;
  }
  .infoSection {
    display: flex;
    border-bottom: 1px solid #838383;
    margin-left: 10%;
    padding: 1.5% 3% 1.5% 3%;
    font-size: 1rem;
  }
  .infoSectionRight {
    display: flex;
    border-bottom: 1px solid #838383;
    padding: 1.5% 3% 1.5% 3%;
    margin-right: 10%;
    font-size: 1rem;
    
  }
  .icon {
    width: 6%;
    height: 90%;
  }
  .sectionName {
    margin: 1% 3% 1% 3%;
    color:#838383;
  }
  .infoData {
    margin-top: 1%;
    margin-bottom: 1%;
  }
  .stackAndLinkSection {
    display: flex;
    border-bottom: 1px solid #838383;
    grid-column: 1/3;
    padding-left: 1%;
    margin-left: 5%;
    margin-right:5%;
  }
  .stackAndLinkSectionIcon {
    width:4%;
    height: 80%;
  }
  .stackAndLinkSectionName {
    margin: 1% 3% 1% 0.9%;
    color:#838383;
  }
  .companyImg {
    width: 245px;
    height: 185px;
    margin-right: 1%;
  }
  .recruitInfoHeaderSection > .ImageHeader{
    font-size: 1.2em;
    font-weight: 800;
    padding-left: 2%;
    margin-top: 7.5%;
    margin-bottom: 1%;
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
