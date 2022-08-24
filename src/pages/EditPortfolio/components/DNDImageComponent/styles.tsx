import styled from 'styled-components';

const Container = styled.div`
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
`;

export default Container;
