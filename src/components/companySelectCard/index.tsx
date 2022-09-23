import React from 'react';
import { Link } from 'react-router-dom';
import Container from './style';

type companyCardProps = {
  data: {
    [key: string]: any;
  };
  logo: string;
};

function CompanySelectCard({ data, logo }: companyCardProps) {
  return (
    <Link to={`/companyInfo/${data.id}`} style={{ textDecoration: 'none' }}>
      <Container>
        <img src={logo} className="companyLogo" alt="" />
        <div className="companyInfo">
          <div className="companyName">{data.companyName}</div>
          <div className="title">
            {data.content.length > 13 ? <span>{data.content.slice(0, 12)} ...</span> : <span>{data.content}</span>}
          </div>
          {data.skillStack.split(',').map((d: any) => (
            <span className="hashTags">#{d} </span>
          ))}
          <p className="hashTags">
            <span style={{ marginRight: '10px' }}>#연봉 {data.salary}</span> <span>#{data.region}</span>
          </p>
        </div>
      </Container>
    </Link>
  );
}

export default CompanySelectCard;
