import React from 'react';
import { Link } from 'react-router-dom';
import newDocument from 'assets/icons/newDocument.png';
import Container from './styles';

export default function NewGenerateCard() {
  return (
    // TODO link url 변경 필요
    <Container>
      <Link to="/generate" style={{ textDecoration: 'none', color: 'black' }}>
        <div className="pofol-thumbnail-container">
          <img className="pofol-thumbnail" src={newDocument} alt="thumbnail" />
        </div>
      </Link>
    </Container>
  );
}
