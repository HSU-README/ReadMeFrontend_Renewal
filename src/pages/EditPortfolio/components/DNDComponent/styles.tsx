import styled from 'styled-components';

const Container = styled.div`
  margin-top: 6.2%;
  margin-right: 5%;
  .beforeImage {
    text-align: 'center';
    width: 100%;
    height: 200px;
    object-fit: contain;
    border: 1px solid black;
  }

  .afterImage {
    text-align: 'center';
    width: 100%;
    height: 200px;
    object-fit: fill;
    border: 1px solid black;
  }

  .ImageListIem {
    padding: 10% 5% 0 5%;
  }
  .itemBoxCss {
    background-color: white;
    padding: 5%;
    border: 2px solid black;
    cursor: pointer;
  }

  .itemBoxCss2 {
    background-color: white;
    padding: 5%;
    margin-top: 15%;
    border: 2px solid black;
    cursor: pointer;
  }

  .elementParent {
    background-color: #e9ecef;
    width: 220px;
  }
`;

export default Container;
