import styled from 'styled-components';

const Container = styled.div`
  margin-top: 5%;
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
  .imogeParent {
    border: 1px solid black;
    width: 100%;
  }
  .ImageListIem {
    padding: 10% 5% 0 5%;
  }
  .itemBoxCss {
    cursor: pointer;
  }
`;

export default Container;
