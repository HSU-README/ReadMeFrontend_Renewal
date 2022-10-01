import React, { useState, useRef } from 'react';
import 'pages/EditPortfolio/preview/styles';
import Footer from 'components/footer/index';
import Header from 'components/header/index';
import CanvasContainer from '../canvasContainer';

function Preview() {
  const [createElement] = useState('');
  const canvasBox = useRef(null);
  return (
    <div>
      <Header />
      <div ref={canvasBox}>
        <CanvasContainer isEditable={false} createElement={createElement} />
      </div>
      <Footer />
    </div>
  );
}

export default Preview;
