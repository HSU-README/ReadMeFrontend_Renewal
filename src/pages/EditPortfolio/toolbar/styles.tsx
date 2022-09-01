import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  display: inline-block;
  margin-top: 2%;
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
  #toolbar {
    width: 100%;
  }
  .saveAndExportLine {
    display: flex;
    block: 1px solid red;
  }
`;

export default Container;
