/*
주석 작성일 : 2022-05-09
작성자 : 이찬우
파일명 : generate/ style.css
요약 : generate 페이지 버튼 및 설정 CSS
      parent - 부모요소
*/

import styled from 'styled-components';

const Container = styled.div`
  .parent {
    margin-top: 70px;
    width: 300px;
    right: 0;
  }
  .parent > div {
    width: 300px;
    margin-bottom: 30px;
    background-color: #f9f9fa;
  }
  .parent > div > details > button:hover {
    cursor: pointer;
  }

  /*아이템 박스*/
  .itemBoxCss {
    border: 3px solid rgba(99, 85, 85, 0.5);
    border-radius: 15px;
    padding: 10px;
    box-sizing: border-box;
  }

  .itemBoxCss1 {
    border: 3px solid rgb(99, 85, 85);

    padding: 10px;
    box-sizing: border-box;
    overflow: auto;
    height: 200px;
  }

  .save {
    float: left;
    margin-left: 100px;
    padding: 10px;
    width: 15%;
    background-color: rgb(235, 124, 34);
  }

  .button_box {
    border: 1px solid rgb(99, 85, 85);
    padding: 5px 10px;
  }

  /* 이모지 박스 */
  .button_none {
    width: 20%;
    background-color: white;
  }
  .shape_button_none {
    border: none;
    width: 70px;
    height: 70px;
    margin-left: 10px;
    margin-right: 10px;
    background-color: white;
  }
  .button_none1 {
    border: 1px solid rgb(21, 184, 0);
    width: 20%;
    background-color: white;
  }

  .editor_buttons {
    margin-left: 10px;
    margin-top: 10px;
  }
  .editor_buttons1 {
    margin-left: 5px;
    margin-top: 5px;
  }

  .editor {
    font-family: 'Roboto', sans-serif;

    margin-top: 120px;
    display: none;
    width: 100%;
    height: 800px;
    background-color: #f8f8f8;
  }

  .show {
    display: block;
  }

  /*menu 버튼 css */
  .menuBtn {
    all: unset;
    padding: 8px;
  }

  /*edit menu bar*/
  .menuBar {
    position: absolute;
    margin-top: -50px;
    left: -280px;
    width: 100%;
    height: 30px;
    font-size: 20px;
    color: #707070;
    z-index: 9999;
  }

  /* emoji */

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  summary {
    cursor: pointer;
    outline: none;
  }

  summary::-webkit-details-marker {
    font-size: 20px;
    margin-right: 5px;
  }

  /* Emoji 소 메뉴 */
  .menu1 {
    text-align: left;
    margin-left: 10px;
    color: rgb(68, 68, 210);
    background-color: #e9ecef;
    margin-bottom: 10px;
  }

  .menu2 {
    text-align: left;
    margin-left: 10px;
    color: rgb(21, 184, 0);
    background-color: #e9ecef;
    margin-bottom: 10px;
  }

  .menu3 {
    text-align: left;
    margin-left: 10px;
    color: black;
    background-color: #e9ecef;
    margin-bottom: 10px;
  }

  /* 구분선 소 메뉴 */
  .menu4 {
    text-align: left;
    margin-left: 10px;
    color: grey;
  }
`;

export default Container;
