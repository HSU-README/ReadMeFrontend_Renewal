import React from 'react';
import { Link } from 'react-router-dom';
import newDocument from 'assets/icons/newDocument.png';
import Container from './styles';

export default function NewGenerateCard() {
  return (
    // TODO link url 변경 필요
    <Container>
      <Link to="/generate" style={{ textDecoration: 'none', color: 'black', width: '300px' }}>
        <div className="pofol-thumbnail-container">
          <img
            style={{ width: '90%', height: '90%', objectFit: 'fill' }}
            className="pofol-thumbnail"
            src={newDocument}
            alt="thumbnail"
          />
        </div>
        <hr style={{ margin: '0px' }} />
        <div className="pofol-title">새 양식</div>
        <div className="top-info-container" />
        <div className="hashtag-container" />
      </Link>
    </Container>
  );
}
