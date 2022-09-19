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
            <Button
                    style={{
                        backgroundColor:'#FF6B6B',
                        color:'white',
                        width:'15rem',
                        fontSize:'1.5em',
                        fontWeight:'700',
                        borderRadius:'20px',
                        marginLeft:'43rem',
                        marginBottom:'3em',
                        height:'3rem'
                    }}
                >
                    신청하기
            </Button>
            <Footer />
        </div>
    )
};

export default CompanyPage;