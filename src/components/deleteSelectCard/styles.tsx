import styled, { css } from 'styled-components';
import colors from 'styles/colors';

export const Container = styled.div<{ hide: boolean }>`
  position: relative;
  height: 75%;
  width: 75%;
  margin: 50px auto;
  box-shadow: 3px 3px 6px 6px rgba(0, 0, 0, 0.1);
  background-color: white;

  .deleteImg {
    width: 12%;
    height: 14%;
    position: absolute;
    left: 85%;
    top: 3%;
    float: right;
    z-index: 999;
  }

  .pofol-thumbnail-container {
    ${(props) =>
      props.hide === false &&
      css`
        opacity: 0.5;
      `}
    height: 50%;
    margin: 0px 0px 10px 0px;
  }

  .pofol-title {
    height: 10%;
    padding: 0px 20px 0px 20px;
    font-size: 20px;
    font-weight: bold;
    color: black;
    text-align: left;
  }

  .top-info-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin: 5px 0px 0px 0px;
    padding: 0px 20px 0px 20px;
  }

  .docDate {
    margin-top: 6%;
    margin-bottom: 5%;
    font-size: 13px;
    color: ${colors.gray};
    text-align: left;
  }

  .hashtag-container {
    display: flex;
    margin-top: 5%;
  }

  .bottom-info-container {
    height: 10%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0px 20px 0px 20px;
    margin-top: 4.5%;
  }

  .user-info-container {
    display: flex;
  }

  .profile-image-container {
    position: relative;
    margin-right: 10px;
    bottom: 3px;
  }

  .profile-image {
    width: 70%;
    height: 80%;
    border-radius: 50px;
    background-size: cover;
    background-position: center;
  }

  .user-name {
    font-size: 16px;
    font-weight: bold;
    color: black;
  }

  .like-container {
    display: flex;
    justify-content: flex-end;
    margin-top: 2px;
  }

  .like-img {
    margin-right: 5px;
    width: 100%;
    height: 100%;
  }

  .likeCnt {
    position: relative;
    font-size: 16px;
    bottom: 0.5px;
    color: #595959;
  }
`;

export const OpacityBlack = styled.div`
  position: absolute;
  height: 30%;
  width: 100%;
  left: 0;
  bottom: 0;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(245, 139, 93, 0.5) 20%, #f57842 60%);
  border-radius: 0px 0px 10px 10px;
`;
