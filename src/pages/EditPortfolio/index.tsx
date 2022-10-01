import React, { useState, useRef } from 'react';
import 'pages/EditPortfolio/styles';
import CanvasContainer from 'pages/EditPortfolio/canvasContainer';
import Footer from 'components/footer';
import Header from 'components/header';
import DNDComponent from './components/DNDComponent';
import DNDImageComponent from './components/DNDImageComponent';

function EditPortfolio() {
  const [createElement, setCreateElement] = useState('');
  const canvasBox = useRef(null);
  return (
    <div>
      <Header />
      <div style={{ backgroundColor: '#e9ecef', display: 'flex', justifyContent: 'center' }}>
        <DNDImageComponent setCreateElement={setCreateElement} />
        <div ref={canvasBox} style={{ margin: '0 5% 0 5%' }}>
          <CanvasContainer isEditable createElement={createElement} />
        </div>
        <DNDComponent setCreateElement={setCreateElement} />
      </div>
      <Footer />;
    </div>
  );
}

export default EditPortfolio;
