import React from 'react';
import styled from "styled-components"
import Banner from '../../assets/icons/backArrow.png';
import banner from '../../assets/icons/close-button.png';
const Container = styled.div`
    width: 100%;
    text-align: center;
    .section {
        margin-bottom: 5%;
        width: 100%;
    }
    .sectionName {
        width: 11%;
        display: inline-block;
        position: relative;
        margin-right: 3%;
        text-align:end;
        font-size: 1.3rem;
        font-weight: 700;
    }
    form {
        width: 65%;
        height: 100vh;
        margin: 3% auto;
        background-color: #d9d9d9;
        border-radius: 20px;
        padding-top: 3%;
        padding-bottom: 3%;
    }
    .inputCompanyName {
        width: 80%;
        padding-left: 2%;
        border-radius: 15px;
        background-color: white;
        border: none;
      }
      .inputLink {
        width: 50%;
        padding-left: 2%;
        margin-right: 5%;
        border-radius: 15px;
        background-color: white;
        border: none;
      }
      .menuItems{
        width: content-fit;
        height: 6vh;
        padding-left: 2%;
        padding-right:2%;
        margin-right: 4%;
        border-radius: 15px;
        background-color: white;
        border: none;
      }
`
type ImageBoxProps = {
  background?: string | undefined
}
export const ImageBox= styled.section<ImageBoxProps>`
      width: 11rem;
      height: 3rem;
      display: inline-block;
      label{
        cursor: pointer;
        margin: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border: 1px dotted black;
        border-radius: 20px;
        width: 11rem;
        height:3rem;
        font-size: large;
      }
      label span{
        font-weight: lighter;
        font-size:small;
        padding-top: 0.5rem;
      }
      input {
        display: none;
      }
`

export default Container;