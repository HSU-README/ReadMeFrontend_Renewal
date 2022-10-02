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
    height: 12%;
    position: absolute;
    left: 86.5%;
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

  .company-title {
    height: 10%;
    padding: 0px 20px 0px 20px;
    font-size: 16px;
    font-weight: 400;
    color: #4d4d4d;
    text-align: left;
  }

  .recruitment-content {
    height: 10%;
    padding: 4% 20px 0px 20px;
    font-size: 18px;
    font-weight: 700;
    color: black;
    text-align: left;
  }

  .top-info-container {
    height: 20%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin: 5px 0px 0px 0px;
    padding: 1% 20px 0px 20px;
  }

  .docDate {
    margin-top: 10px;
    font-size: 13px;
    color: ${colors.gray};
    text-align: left;
  }

  .hashtag-container {
    display: flex;
    margin-top: 10px;
  }

  .bottom-info-container {
    height: 10%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0px 20px 0px 20px;
    margin-top: 10px;
  }

  .user-info-container {
    display: flex;
  }

  .profile-image-container {
    position: relative;
    margin-right: 10px;
    width: 30px;
    bottom: 3px;
  }

  .user-name {
    font-size: 16px;
    font-weight: bold;
    color: black;
  }

  .like-container {
    display: flex;
    margin-top: 2px;
  }

  .like-img {
    margin-right: 12px;
  }

  .likeCnt {
    position: relative;
    bottom: 1px;
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
