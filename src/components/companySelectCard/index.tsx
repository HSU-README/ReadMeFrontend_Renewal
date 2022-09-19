import React, {useState, useEffect} from 'react';
import { Container } from './style';
import { Link } from 'react-router-dom';
import NaverLogo from '../../assets/images/naver_logo.png';

 type TagType = {
    name: string;
  };
  type companyCardProps = {
    data: {
        [key:string]:any
    }
  }

function CompanySelectCard({data}:companyCardProps) {
    const [tags, setTags] = useState<TagType[]>([]);
    return( 
        <Link to={`/companyInfo/${data.id}`} style={{textDecoration:'none'}}>
            <Container>
                <img src={NaverLogo} className="companyLogo" />
                <div className="companyInfo">
                    <div>{data.companyName}</div>
                    <div className="title">
                        {
                            data.content.length > 10 ? 
                                <span>{data.content.slice(0,10)} ...</span>
                            :
                                <span>{data.content}</span>
                        }
                    </div>
                    {  
                        data.skillStack.split(',').map((d:any) => (
                            <span className="hashTags">#{d} </span>
                        ))
                    }
                </div>
            </Container>
        </Link>
    )
}

export default CompanySelectCard;