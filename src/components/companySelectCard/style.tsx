import styled, { css } from 'styled-components';
import colors from 'styles/colors';

export const Container = styled.div`
    position: relative;
    height: 300px;
    width: 300px;
    margin: 50px auto;
    border-radius: 10px;
    box-shadow: 3px 3px 6px 6px rgba(0, 0, 0, 0.1);
    background-color: white;
    cursor:pointer;
    color:black;
    .companyLogo {
        width: 300px;
        height: 180px;
        object-fit: contain;
    }
    .companyInfo {
        text-align:left;
        padding: 5% 4% 4% 5%;
    }

    .companyInfo > div {
       margin-top:2%;
       margin-bottom: 2%;
    }

    .title {
        font-size: 1.5rem;
        font-weight: 700;
    }
    .hashTags {
        font-size: 0.7rem;
        color: blue;
        
    }
`;