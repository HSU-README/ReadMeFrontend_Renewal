import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  height: 75%;
  width: 65%;
  box-shadow: 3px 3px 6px 6px rgba(0, 0, 0, 0.1);
  background-color: white;
  display: flex;
  align-items: center;

  .pofol-thumbnail-container {
    height: 67%;
  }

  .pofol-thumbnail {
    width: 75%;
    object-fit: fill;
    margin: 0px auto;
  }
`;

export default Container;
