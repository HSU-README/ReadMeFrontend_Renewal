import React, { useContext, useRef, useEffect } from 'react';
import { ICanvasComponent } from 'types/canvas';
import { CanvasContext } from '../canvasContainer';

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
        width: '100px',
        height: '100px',
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

  return content ? renderImage() : <div />;
}

export default ImogeElement;
