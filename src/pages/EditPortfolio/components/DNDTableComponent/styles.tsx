import styled from 'styled-components';

const Container = styled.div<React.MutableRefObject>`
  .table-option {
    display: flex;
    margin: 5px 2px;
    gap: 5px;
  }
  .table-option {
    white-space: nowrap;
  }
  .table-input {
    display: grid;
    margin-left: 30px;
    margin-bottom: 10px;
    grid-template-columns: auto auto auto auto auto auto;
    gap: 1px;
  }
  .table-unit {
    width: 20px;
    height: 20px;
    border: 1px solid lightgray;
  }
`;

export default Container;
