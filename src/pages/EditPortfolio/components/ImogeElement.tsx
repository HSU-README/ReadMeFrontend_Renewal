import React, { useContext, useRef, useEffect } from 'react';
import { ICanvasComponent } from 'types/canvas';
import { CanvasContext } from '../canvasContainer';
import '../Canvas.css';

function ImogeElement(props: ICanvasComponent) {
  const { content, id } = props;
  const { actions } = useContext(CanvasContext);
  const imogeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log(content);
  }, [content]);
  useEffect(() => {
    actions?.updateCanvasData({
      id,
      content,
      dimension: {
        width: '64px',
        height: '64px',
      },
    });
  }, [imogeRef]);

  const renderImage = () => (
    <div
      ref={imogeRef}
      style={{
        backgroundImage: `url(${content})`,
        backgroundSize: 'contain',
        width: '100%',
        height: '100%',
        backgroundRepeat: 'no-repeat',
      }}
    />
  );

  return <div>{content && renderImage()}</div>;
}

export default ImogeElement;
