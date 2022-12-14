import styled from 'styled-components';

export const Container = styled.div`
  .tags {
    display: block;
    justify-content: center;
    text-align: center;
    background: #b8dcdb;
    font-size: 14px;
    font-weight: 600;
    line-height: 20px;
    padding: 5px 10px;
    margin: 3px 0;
    border-radius: 6px;
  }
  .beforeLogin {
    background-color: rgba(128, 128, 128, 0.5);
  }
  .cardMedia {
    border: 0px;
    width: 100%;
    height: 100%;
    padding: 7px 7px;
  }
  .cardView:hover .cardMedia {
    border: 2px solid lightskyblue;
    border-radius: 15px;
  }
  .sectionFont {
    display: flex;
    width: 90%;
    margin-top: 60px;
    margin-bottom: 0px;
    padding: 8px 8px 0px 8px;
    border-radius: 15px;
    margin-right: 200px;
    font-weight: bold;
    margin-left: 2%;
    color: black;
    font-size: 35px;
    text-align: left;
  }

  .beforeLoginAlertText {
    font-weight: 500;
    font-size: 50px;
    color: white;
    position: absolute;
    bottom: 20%;
    left: 38%;
  }

  .pofolBtn {
    background-color: #f22222;
    color: white;
    font-weight: 600;
    font: bold;
    font-size: 24px;
    width: 340px;
    height: 60px;
    border: 0px;
    border-radius: 15px;
    margin-top: 20px;
  }

  .pofolBtnHeader {
    margin-top: 19px;
    text-align: center;
  }
  .grayTag {
    width: 84px;
    height: 30px;
    padding: 5px;
    border-radius: 9px;
    background-color: #e9ecef;
    margin-left: 7px;
    margin-right: 7px;
    font-size: 20px;
    font-weight: 600;
    color: #3a3a3a;
  }

  .community-tag-container {
    display: flex;
    justify-content: flex-start;
    gap: 10px;
    padding: 10px;
    display: inline-block;
  }
  /* header text */
  .headerText {
    color: black;
    margin-top: '9%';
    font-size: '18px';
    text-decoration-line: none;
    font-weight: 700;
  }

  .headerMypage {
    color: #f24444;
    margin-top: '9%';
    font-size: '18px';
    text-decoration-line: none;
    font-weight: 700;
  }

  .swiper {
    width: 100%;
    height: 100%;
    bottom: 1vh;
  }

  .swiper-slide.card {
    height: 50vh;
    margin-bottom: 0.5%;
  }

  .swiper-wrapper {
    margin-top: 0%;
  }
`;

export const ModalContainer = styled.div`
  .confirmBtn {
    width: 50px;
    font-size: 20px;
    text-decoration: none;
    float: right;
    margin-top: 15px;
    color: blue;
    font-weight: 600;
  }

  .confirmBtn:hover {
    background-color: #d9d9d9;
    border-radius: 7px;
  }
`;
