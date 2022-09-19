import React from 'react';
import Header from 'pages/Home/header/Header';
import Footer from 'components/footer';
import CompanyForm from './CompanyForm';
import { Button } from '@mui/material';
const CompanyPage = () => {
    return(
        <div>
            <Header/>
            <hr/>
            <CompanyForm />

            <Footer />
        </div>
    )
};

export default CompanyPage;