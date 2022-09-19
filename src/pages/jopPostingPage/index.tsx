import React from 'react';
import { Button } from '@mui/material';
import Header from 'pages/Home/header/Header';
import Footer from 'components/footer';
import EnrollForm from './enrollForm';
function JopPosting() {
    return(
        <>
            <Header />
            <hr style={{backgroundColor: '#f24444', height: '1px'}}/>
                <EnrollForm />
             <Footer />
        </>
    );
}

export default JopPosting;

