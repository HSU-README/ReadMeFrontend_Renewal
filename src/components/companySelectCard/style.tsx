import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  height: 300px;
  width: 350px;
  margin: 50px auto;
  box-shadow: 3px 3px 6px 6px rgba(0, 0, 0, 0.1);
  background-color: white;
  cursor: pointer;
  color: black;
  .companyLogo {
    width: 350px;
    height: 180px;
    object-fit: contain;
  }

  /* 회사 카드 뷰 박스 */
  .companyInfo {
    text-align: left;
    padding: 5% 5% 0% 3.5%;
  }
  .companyInfo > div {
    margin-bottom: 1.5%;
  }

  /* 회사명 */
  .companyName {
    font-size: 1.2rem;
    font-weight: 450;
  }

  /* 채용공고 명 */
  .title {
    font-size: 1.5rem;
    font-weight: 700;
  }

  /* 기술태그 */
  .hashTags {
    font-size: 0.9rem;
    color: blue;
  }
`;
export default Container;
