import styled from 'styled-components';
import colors from 'styles/colors';
import maxWidth from 'styles/mixin';

export const Container = styled.div`
  ${maxWidth}
  background: ${colors.background};
`;

export const FormContainer = styled.div`
  border: 4px solid;
  border-radius: 15px;
  border-color: ${colors.loginBorder};
  max-width: 900px;
  width: 60%;
  height: fit-content;
  box-shadow: 25% 0px 20px 10px rgba(0, 0, 0, 0.2);
  text-align: center;
  margin: 5% auto 5% auto;
  padding: 3% 0 0 0;

  .inputForm {
    width: 70%;
  }

  .validationText {
    font-size: 1rem;
    color: red;
    font-weight: 500;
  }

  .footerSection {
    width: 100%;
    bottom: 0;
  }

  .logoImg {
    width: 20%;
    height: 15%;
    display: block;
    margin-top: 3%;
    margin-bottom: 5%;
    margin-left: 40%;
  }

  .login-find-content {
    color: gray;
  }

  .login-find {
    margin-top: 5%;
    margin-bottom: 3%;
  }

  #businessSelectForm {
    text-align: start;
  }

  #sign_up_btn {
    margin-top: 10px;
    margin-bottom: 40px;
    width: 70%;
    height: 40px;
    background-color: ${colors.primary};
    color: white;
    border: none;
    font-size: 20px;
    padding: 0 16px 0px;
    transition: all 80ms linear;
    user-select: none;
    outline: none;
    cursor: pointer;
    border-radius: 5px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
  }

  #sign_up_btn:hover {
    opacity: 90%;
  }

  .emailVali {
    color: blue;
    font-weight: 800;
  }
`;

export const SelectFormContainer = styled.div<{ isCompany: boolean }>`
  display: flex;

  border-top: 3px solid;
  border-color: ${colors.primary};
  box-shadow: 25% 0px 20px 10px rgba(0, 0, 0, 0.2);
  height: 60px;

  .selectForm {
    flex: 1;
    font-size: 20px;
    font-weight: 700;
    line-height: 20px;
    color: ${colors.primary};

    .selectFormName {
      margin-top: 20px;
    }

    &:nth-child(1) {
      border-right: 3px solid;
      border-color: ${colors.primary};
      box-shadow: 25% 0px 20px 10px rgba(0, 0, 0, 0.2);
      background-color: ${(props) => (props.isCompany ? '' : colors.primary)};
      color: ${(props) => (props.isCompany ? colors.primary : '#ffffff')};
    }
    &:nth-child(2) {
      border-right: 3px solid;
      border-color: ${colors.primary};
      box-shadow: 25% 0px 20px 10px rgba(0, 0, 0, 0.2);
      background-color: ${(props) => (props.isCompany ? colors.primary : '')};
      color: ${(props) => (props.isCompany ? '#ffffff' : colors.primary)};
    }
  }
`;
