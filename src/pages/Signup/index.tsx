import React, { useState } from 'react';
import Footer from 'components/footer';
import Header from 'components/header';
import { Container, FormContainer, SelectFormContainer } from 'pages/Signup/styles';
import StudnentSignup from './studentSignup';
import CompanySignup from './companySignup';

function SignUp() {
  const [isCompany, setCompany] = useState(false);

  const clickStudentBtn = () => {
    setCompany(false);
  };
  const clickCompanyBtn = () => {
    setCompany(true);
  };

  return (
    <Container>
      <Header />
      <FormContainer>
        {!isCompany ? <StudnentSignup /> : <CompanySignup />}
        <SelectFormContainer isCompany={isCompany}>
          <div className="selectForm" onClick={clickStudentBtn} aria-hidden="true">
            <div className="selectFormName">학생</div>
          </div>
          <div className="selectForm" onClick={clickCompanyBtn} aria-hidden="true">
            <div className="selectFormName">기업</div>
          </div>
        </SelectFormContainer>
      </FormContainer>
      <Footer />
    </Container>
  );
}

export default SignUp;
