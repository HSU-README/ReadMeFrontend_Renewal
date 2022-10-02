import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  height: 75%;
  width: 65%;
  margin: 50px auto;
  box-shadow: 3px 3px 6px 6px rgba(0, 0, 0, 0.1);
  background-color: white;

  .pofol-thumbnail-container {
    height: 75%;
    margin: 0px 0px 10px 0px;
    text-align: center;
  }

  .pofol-title {
    height: 10%;
    padding: 10px 20px 0px 20px;
    font-size: 20px;
    font-weight: bold;
    color: black;
    text-align: left;
    border-top: 2px solid;
    border-color: #f1f3f5;
  }

  .top-info-container {
    height: 10%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 0px 20px 0px 20px;
  }

  .hashtag-container {
    height: 5%;
    display: flex;
    margin-top: 5px;
  }
`;

export default Container;
