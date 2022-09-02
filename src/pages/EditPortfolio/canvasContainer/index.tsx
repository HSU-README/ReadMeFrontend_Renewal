import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { createPortfolio, getPortfolio } from 'apis/portfolioApi';
import Toolbar from 'pages/EditPortfolio/toolbar';
import CanvasComponent from 'pages/EditPortfolio/components/CanvasComponent';
import './canvas.css';
import { ICanvasComponent, ICanvasContext, ICanvasData } from 'types/canvas';
import { ComponentType } from 'types/document';
import { ToastContainer } from 'react-toastify';

export const CanvasContext = React.createContext<ICanvasContext>({});

interface IProps {
  isEditable: boolean;
  createElement: string;
}

const getInitialData = (data: ICanvasData[], type: string = 'TEXT') => ({
  type,
  id: `${type}__${Date.now()}__${data.length}`,
  position: {
    top: 100,
    left: 100,
  },
  chart: {
    row: 0,
    col: 0,
  },
  chartContent: type === 'CHART' && '',
  dimension: {
    width: '300',
    height: type === 'TEXT' ? '50' : '150',
  },
  content: type === 'TEXT' ? '두 번 클릭하여 텍스트를 입력하세요.' : '',
});

function CanvasContainer({ isEditable, createElement }: IProps) {
  const [canvasData, setCanvasData] = useState<any[]>([]);
  const [activeSelection, setActiveSelection] = useState<Set<string>>(new Set());
  const canvasBox = useRef<HTMLDivElement>(null); // 캔버스만 가지고있는 REF
  const [enableQuillToolbar, setEnableQuillToolbar] = useState<boolean>(false);
  const [docTitle, setDocTitle] = useState<String>('');
  const isSelectAll = useRef<boolean>(false);

  const { docId } = useParams();
  const userId = JSON.parse(localStorage.getItem('readme_userInfo')!).id;

  const updateCanvasData = (data: Partial<ICanvasComponent>) => {
    const currentDataIndex = canvasData.findIndex((canvas) => canvas.id === data.id) ?? -1;

    const updatedData = { ...canvasData?.[currentDataIndex], ...data };

    const wid = updatedData.dimension!.width.substring(0, 3);
    const hei = updatedData.dimension!.height.substring(0, 3);
    // 캔버스 밖으로 벗어나는거 방지.
    console.log(updatedData);

    if (updatedData.position!.left < 0) {
      updatedData.position!.left = 0;
    }
    if (updatedData.position!.top < 0) {
      updatedData.position!.top = 0;
    }
    if (updatedData.position!.left + Number(wid) > canvasBox.current!.clientWidth) {
      updatedData.position!.left = canvasBox.current!.clientWidth - Number(wid);
    }
    if (updatedData.position!.top + Number(hei) > canvasBox.current!.clientHeight) {
      updatedData.position!.top = canvasBox.current!.clientHeight - Number(hei) - 100;
    }

    canvasData.splice(currentDataIndex, 1, updatedData);
    setCanvasData([...(canvasData || [])]);
  };

  async function fetchPortfolioData() {
    const datas = await getPortfolio(docId as string);
    setDocTitle(datas.title);
    const componentArray: ICanvasData[] = [];
    let type;
    let left;
    let top;
    let width;
    let height;
    let content;
    let row;
    let col;
    let imgUrl;
    let iconUrl;
    let id = 1;
    await datas.components.map((component: ComponentType) => {
      // console.log(datas.components);
      type = component.type;
      left = component.x;
      top = component.y;
      width = component.width;
      height = component.height;
      row = component.tableRow;
      col = component.tableCol;
      switch (type) {
        case 'text':
          content = component.textContent;
          componentArray.push({
            id: `TEXT__${(id += 1).toString()}`,
            type: 'TEXT',
            position: { top, left },
            chartContent: '',
            dimension: { width: width.toString(), height: height.toString() },
            content: content!,
            chart: {
              col: 0,
              row: 0,
              tableContent: [],
            },
          });
          break;

        case 'table':
          componentArray.push({
            id: `CHART__${(id += 1).toString()}`,
            type: 'CHART',
            position: { top, left },
            dimension: { width: width.toString(), height: height.toString() },
            chart: {
              row: row!,
              col: col!,
              tableContent: component.tableContents!.map((data) => data.content),
            },
            content: '',
            chartContent: '',
          });
          break;

        case 'image':
          imgUrl = component.imgUrl;
          componentArray.push({
            id: `IMAGE__${(id += 1).toString()}`,
            type: 'IMAGE',
            position: { top, left },
            dimension: { width: width.toString(), height: height.toString() },
            content: imgUrl!,
            chart: {
              col: 0,
              row: 0,
              tableContent: [],
            },
            chartContent: '',
          });
          break;

        case 'icon':
          iconUrl = component.iconUrl;
          componentArray.push({
            id: `IMOGE__${(id += 1).toString()}`,
            type: 'IMOGE',
            position: { top, left },
            dimension: { width: width.toString(), height: height.toString() },
            content: iconUrl!,
            chart: {
              col: 0,
              row: 0,
              tableContent: [],
            },
            chartContent: '',
          });
          break;
        default:
          break;
      }
      return console.log(component);
    });

    setCanvasData(componentArray);
  }

  const addElement = (type: string) => {
    const defaultData = getInitialData(canvasData, type);
    let r = 0;
    let c = 0;

    if (type === 'CHART') {
      r = Number(createElement.split(' ')[1]);
      c = Number(createElement.split(' ')[2]);
    } else if (type === 'IMOGE') {
      const url = createElement.split(' ')[1];
      defaultData.content = url;
    }
    defaultData.chart.row = r;
    defaultData.chart.col = c;
    setCanvasData([...canvasData, { ...defaultData }]);
    activeSelection.clear();
    activeSelection.add(defaultData.id);
    setActiveSelection(new Set(activeSelection));
    r = 0;
    c = 0;
  };

  const deleteElement = useCallback(() => {
    setCanvasData([
      ...canvasData.filter((data) => {
        if (data.id && activeSelection.has(data.id)) {
          activeSelection.delete(data.id);
          return false;
        }
        return true;
      }),
    ]);
    setActiveSelection(new Set(activeSelection));
  }, [activeSelection, canvasData]);

  useEffect(() => {
    if (Number(docId)) {
      fetchPortfolioData();
    }
  }, []);

  useEffect(() => {
    if (createElement !== '') {
      const str = createElement.split(' ');
      addElement(str[0]);
    }
  }, [createElement]);

  const selectAllElement = useCallback(() => {
    isSelectAll.current = true;
    canvasData.map((data) => activeSelection.add(data.id || ''));
    setActiveSelection(new Set(activeSelection));
  }, [activeSelection, canvasData]);

  const context: ICanvasContext = {
    actions: {
      setCanvasData,
      setActiveSelection,
      updateCanvasData,
      addElement,
      setEnableQuillToolbar,
    },
    state: {
      canvasData,
      activeSelection,
      enableQuillToolbar,
    },
  };

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Delete') {
        deleteElement();
      } else if (['a', 'A'].includes(event.key) && event.ctrlKey) {
        event.preventDefault();
        selectAllElement();
      }
    },
    [deleteElement, selectAllElement],
  );

  const outSideClickHandler = () => {
    isSelectAll.current = false;
    setActiveSelection(new Set());
  };

  const handleMouseDown = useCallback(() => {
    if (!isSelectAll.current) {
      return;
    }

    outSideClickHandler();
    isSelectAll.current = false;
  }, []);

  React.useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleMouseDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleMouseDown);
    };
  }, [handleKeyDown, handleMouseDown]);

  console.log(`canvasData: ${JSON.stringify(canvasData)}`);

  return (
    <div
      style={{
        width: '210mm',
        height: '330mm',
      }}
    >
      <Toolbar
        isEditEnable={enableQuillToolbar}
        canvasBox={canvasBox}
        createPortfolio={createPortfolio}
        userId={userId}
        canvasData={canvasData}
        docId={docId}
        docTitle={docTitle}
        isEditable={isEditable}
      />

      <div ref={canvasBox}>
        <CanvasContext.Provider value={context}>
          {isEditable === false ? (
            <div
              className="canvas-container"
              style={{
                pointerEvents: 'none',
              }}
            >
              {canvasData.map((canvas) => (
                <CanvasComponent key={canvas.id} {...canvas} />
              ))}
            </div>
          ) : (
            <div className="canvas-container">
              {canvasData.map((canvas) => (
                <CanvasComponent key={canvas.id} {...canvas} />
              ))}
            </div>
          )}
        </CanvasContext.Provider>
      </div>
      <br />
      <ToastContainer />
    </div>
  );
}

export default CanvasContainer;
