import React from 'react';
import Header from 'pages/Home/header/Header';
import Footer from 'components/footer';
import CompanyForm from './CompanyForm';

function CompanyPage() {
  return (
    <div>
      <Header />
      <CompanyForm />
      <Footer />
    </div>
  );
}

export default CompanyPage;
