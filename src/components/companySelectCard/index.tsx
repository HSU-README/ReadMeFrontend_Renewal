import React, {useState, useEffect} from 'react';
import { Container } from './style';
import NaverLogo from '../../assets/images/naver_logo.png';

 type TagType = {
    name: string;
  };
  

function CompanySelectCard() {
    const [tags, setTags] = useState<TagType[]>([]);
    useEffect(() => {
        setTags([{name:'보안'},{name:'게임보안'},{name:'네트워크'},{name:'취약점분석'}]);
    },[])
    return(
        <Container>
            <img src={NaverLogo} className="companyLogo" />
            <div className="companyInfo">
                <div>네이버</div>
                <div className="title">게임 핵 분석팀</div>
                {  
                    tags.map((data:TagType) => (
                        <span className="hashTags" key={data.name}>#{data.name} </span>
                    ))
                }
            </div>

        </Container>
    )
}

export default CompanySelectCard;