import React, { useContext, useRef } from 'react';
import { ResizeEnable, Rnd } from 'react-rnd';
import resizeHandleClasses from 'utils/canvasUtils';
import ImageElement from 'pages/EditPortfolio/components/ImageElement';
import TextElement from 'pages/EditPortfolio/components/TextElement';
import ChartElement from 'pages/EditPortfolio/components/ChartElement';
import ImogeElement from 'pages/EditPortfolio/components/ImogeElement';
import { ICanvasComponent } from 'types/canvas';
import { CanvasContext } from '../canvasContainer';

const componentMap: { [key: string]: React.ComponentType<ICanvasComponent> } = {
  TEXT: TextElement,
  IMAGE: ImageElement,
  CHART: ChartElement,
  IMOGE: ImogeElement,
};

const getEnableResize = (type: string): ResizeEnable => ({
  bottom: type === 'IMAGE',
  bottomLeft: true,
  bottomRight: true,

  top: type === 'IMAGE',
  topLeft: true,
  topRight: true,

  left: true,
  right: true,
});

function CanvasComponent(props: ICanvasComponent) {
  const { state, actions } = useContext(CanvasContext);
  const { dimension, position, content, id, type, chart, chartContent } = props;
  const [showGrids, setShowGrids] = React.useState(false);
  const [isReadOnly, setIsReadOnly] = React.useState(true);
  const elementRef = React.useRef<HTMLDivElement>(null);
  const isDragged = useRef<boolean>(false);

  const activeSelection = state?.activeSelection;

  const onBlur = (event: React.FocusEvent<HTMLDivElement>) => {
    const toolbarElement = document.querySelector('#toolbar');
    if (
      event.currentTarget.contains(event?.relatedTarget as Element) ||
      toolbarElement?.contains(event?.relatedTarget as Element)
    ) {
      return;
    }
    setIsReadOnly(true);
    actions?.setEnableQuillToolbar(false);
    if (id && activeSelection) {
      activeSelection.delete(id);
      actions?.setActiveSelection(new Set(activeSelection));
    }
  };

  const getComponent = () => {
    const Component = type && componentMap[type];
    if (!Component || !id) return null;
    return (
      <Component
        key={id}
        id={id}
        type={type}
        position={position}
        dimension={dimension}
        content={content}
        isReadOnly={isReadOnly}
        chart={chart}
        chartContent={chartContent}
      />
    );
  };

  const style: React.CSSProperties = {
    outline: 'none',
    border: `2px solid ${
      (id && state?.activeSelection.has(id)) || showGrids || isDragged.current ? '#21DEE5' : 'transparent'
    }`,
  };

  const onMouseEnter = () => {
    setShowGrids(true);
  };

  const onMouseLeave = () => {
    setShowGrids(false);
  };

  const onfocus = () => {
    if (id) {
      actions?.setActiveSelection(new Set(state?.activeSelection.add(id)));
    }
  };

  const onKeyDown = (event: React.KeyboardEvent) => {
    if (!isReadOnly) event.stopPropagation();
  };

  const handleClass = id && state?.activeSelection.has(id) && state?.activeSelection.size === 1 ? 'showHandles' : '';

  const onDoubleClick = () => {
    if (type === 'TEXT') {
      if (!isReadOnly) return;
      setIsReadOnly(false);

      actions?.setEnableQuillToolbar(true);
    }
  };

  return (
    <div ref={elementRef}>
      <Rnd
        style={style}
        size={{ width: dimension?.width || 0, height: dimension?.height || 0 }}
        position={{ x: position?.left || 0, y: position?.top || 0 }}
        onDragStart={() => {
          isDragged.current = true;
        }}
        onDragStop={(e, d) => {
          isDragged.current = false;
          actions?.updateCanvasData({ id, position: { left: d.x, top: d.y } });
        }}
        resizeHandleWrapperClass={handleClass}
        resizeHandleClasses={resizeHandleClasses}
        onResize={(e, direction, ref, delta, pos) => {
          actions?.updateCanvasData({
            id,
            dimension: { width: ref.style.width, height: ref.style.height },
            position: { top: pos.y, left: pos.x },
          });
        }}
        enableResizing={getEnableResize(type)}
        minWidth={100}
        minHeight={50}
        disableDragging={!isReadOnly}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onDoubleClick={onDoubleClick}
        onKeyDown={onKeyDown}
        onFocus={onfocus}
        onBlur={onBlur}
        tabIndex={0}
        lockAspectRatio={type === 'IMAGE'}
      >
        <div className="item-container">{getComponent()}</div>
      </Rnd>
    </div>
  );
}

export default CanvasComponent;
