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
    <Container>
      <Link to={`/companyInfo/${data.id}`} style={{ textDecoration: 'none', color: 'black' }}>
        <img src={logo} className="companyLogo" alt="" />
        <div className="companyInfo">
          <div className="companyName">{data.companyName}</div>
          <div className="title">
            {data.content.length > 13 ? <span>{data.content.slice(0, 10)} ...</span> : <span>{data.content}</span>}
          </div>
          <p className="hashTags" style={{ marginTop: '2%' }}>
            <span> {data.jobOpening}</span>{' '}
          </p>
          <p className="hashTags">
            {data.skillStack.split(',').map((d: any) => (
              <span style={{ marginRight: '10px' }}>#{d} </span>
            ))}
          </p>
          <p className="hashTags">
            <span style={{ marginRight: '10px' }}>#{data.division} </span>
            <span style={{ marginRight: '10px' }}>#{data.salary}만원 </span>
            <span>#{data.region}</span>
          </p>
        </div>
      </Link>
    </Container>
  );
}

export default CompanySelectCard;
