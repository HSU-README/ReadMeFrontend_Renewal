import React from 'react';
import Footer from 'components/footer';
import Header from 'components/header';
import { Container, FormContainer, SelectFormContainer } from 'pages/Signup/styles';
import StudnentSignup from './studentSignup';

function SignUp() {
  return (
    <Container>
      <Header />
      <FormContainer>
        <StudnentSignup />
        <SelectFormContainer>
          <div className="selectForm">
            <div className="selectFormName">학생</div>
          </div>
          <div className="selectForm">
            <div className="selectFormName">기업</div>
          </div>
        </SelectFormContainer>
      </FormContainer>
      <Footer />
    </Container>
  );
}

export default SignUp;
