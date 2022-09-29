import styled from 'styled-components';
import colors from 'styles/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0px auto;
  padding-top: 1.5%;
  width: 40%;

  input {
    border: none;
    border-top: 0px;
    border-right: 0px;
    border-bottom: 0px;
    border-left: 0px;
    font-size: 18px;
    text-align: center;
    :focus {
      outline: none;
    }
  }

  .profile-image {
    width: 170px;
    height: 170px;
    border-radius: 50%;
    border: 3px solid ${colors.primary};
    background-image: url('../images/profile.jpg');
    background-size: cover;
    margin: 20px 30px;
  }

  .nickName {
    display: flex;
    width: 180px;
    border-bottom: 1px solid;
    border-color: ${colors.gray};
    text-align: center;
    font-size: 24px;
    font-weight: bold;
    margin-left: 10px;
    margin-right: 55px;
  }

  .contentInput {
    border-bottom: 1px solid;
    border-color: ${colors.gray};
    width: 50%;
    margin-left: 10px;
    line-height: 25px;
    padding: 0px 0px;
  }

  .section-updateName {
    display: flex;
    margin-top: 20px;
    margin-bottom: 30px;
  }

  .section-update {
    color: black;
    text-align: left;
  }

  .inputBorder {
    padding: 5px 20px 5px 20px;
    margin: 30px 0px 30px 0px;
  }
  .university {
    display: flex;
    padding-left: 40px;
  }

  .inputName {
    color: ${colors.fontGray};
    font-size: 20px;
    font-weight: 500;
    line-height: 25px;
  }

  .button-wrapper {
    display: flex;
    width: 40%;
    background-color: #ff6b6b;
    font-weight: bold;
    justify-content: center;
    margin: 50px auto;
    max-height: 50px;
  }
`;

export const Input = styled.input`
  border-radius: 4px;
  border: 1px solid;
  border-color: ${colors.loginText};
  padding-bottom: 20px;
  max-width: 740px;
  width: 100%;
  box-sizing: border-box;
  margin: 0 0 20px;
  padding: 12px;
  padding-top: 11px;
  padding-bottom: 13px;
  font-size: 18px;
  line-height: 1.33333333;
`;

export const Button = styled.button`
  margin-bottom: 12px;
  width: 40%;
  color: #fff;
  background-color: black;
  border: none;
  font-size: 25px;
  padding: 5px 16px 5px 16px;
  transition: all 80ms linear;
  user-select: none;
  outline: none;
  cursor: pointer;
  border-radius: 5px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
  line-height: 30px;
`;

export const Avatar = styled.div<{ bgImg: string }>`
  width: 170px;
  height: 170px;
  border: 1px solid;
  border-color: white;
  border-radius: 100px;
  background-size: cover;
  background-position: center;
  background-image: url(${(props) => props.bgImg});
  margin-bottom: 20px;
  cursor: pointer;
`;
