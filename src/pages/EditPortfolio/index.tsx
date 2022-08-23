import React, { useState, useRef } from 'react';
import 'pages/EditPortfolio/styles';
import CanvasContainer from 'pages/EditPortfolio/canvasContainer';
import Footer from 'components/footer';
import Header from 'components/header';
import DndComponent from './components/DNDComponent';
import DNDImageComponent from './components/DNDImageComponent';

function EditPortfolio() {
  const [createElement, setCreateElement] = useState('');
  const canvasBox = useRef(null);
  return (
    <div style={{ marginTop: '5px' }}>
      <Header />
      <div style={{ backgroundColor: '#e9ecef', display: 'flex' }}>
        <DNDImageComponent setCreateElement={setCreateElement} />
        <div style={{ display: 'flex' }}>
          <div ref={canvasBox}>
            <CanvasContainer isEditable createElement={createElement} />
          </div>
          <DndComponent setCreateElement={setCreateElement} />
        </div>
      </div>
      <Footer />;
    </div>
  );
}

export default EditPortfolio;
