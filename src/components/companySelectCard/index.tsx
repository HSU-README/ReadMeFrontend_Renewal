import React from 'react';
import { Link } from 'react-router-dom';
import Container from './style';
import NaverLogo from '../../assets/images/naver_logo.png';

type companyCardProps = {
  data: {
    [key: string]: any;
  };
};

function CompanySelectCard({ data }: companyCardProps) {
  return (
    <Link to={`/companyInfo/${data.id}`} style={{ textDecoration: 'none' }}>
      <Container>
        <img src={NaverLogo} className="companyLogo" alt="" />
        <div className="companyInfo">
          <div>{data.companyName}</div>
          <div className="title">
            {data.content.length > 10 ? <span>{data.content.slice(0, 10)} ...</span> : <span>{data.content}</span>}
          </div>
          {data.skillStack.split(',').map((d: any) => (
            <span className="hashTags">#{d} </span>
          ))}
        </div>
      </Container>
    </Link>
  );
}

export default CompanySelectCard;
