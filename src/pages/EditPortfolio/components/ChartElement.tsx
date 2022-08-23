import React, { useEffect, useRef, useContext, useState } from 'react';
import { ICanvasComponent } from 'types/canvas';
import { useResetRecoilState } from 'recoil';
import { chartState } from 'recoil/atoms';
import { CanvasContext } from '../CanvasContainer';

function ChartElement(props: ICanvasComponent) {
  const { id, chart, dimension } = props;
  const [strArr, setStrArr] = useState(new Array(36).fill(''));
  const [width, setWidth] = useState(300);
  const [height, setHeight] = useState(150);
  const { actions } = useContext(CanvasContext);
  const tableRef = useRef(null);
  const chartRef = useRef(null);

  const updateChartValue = () => {
    // 텍스트박스 내부 글자 수정 이벤트
    actions?.updateCanvasData({
      id,
      chartContent: strArr.toString(),
    });
  };

  const resetState = useResetRecoilState(chartState);

  useEffect(() => {
    if (dimension !== undefined && chart !== undefined) {
      setWidth(Number(dimension.width) / chart.col);
      setHeight(Number(dimension.width) / chart.row);
    }
    if (chart!.tableContent) {
      setStrArr(chart!.tableContent);
    }
    resetState();
    if (chartRef.current !== null) {
      updateChartValue();
    }
  }, []);

  useEffect(() => {
    if (dimension !== undefined && chart !== undefined) {
      if (dimension.width.indexOf('px') !== -1 && dimension.height.indexOf('px') !== -1) {
        setWidth(Number(dimension.width.slice(0, -2)) / chart.col);
        setHeight(Number(dimension.height.slice(0, -2)) / chart.row);
        if (chart.tableContent) {
          setStrArr(chart.tableContent);
        }
        resetState();
      }
    }
  }, [dimension?.width, dimension?.height, dimension, chart, resetState]);
  return (
    <div
      ref={chartRef}
      onClick={() => {
        updateChartValue();
      }}
      aria-hidden="true"
    >
      <table style={{ border: '1px solid black' }} ref={tableRef}>
        <tbody>
          {Array(chart?.row)
            .fill(null)
            .map((tr, index) => (
              <tr key={tr}>
                {Array(chart?.col)
                  .fill(null)
                  .map((td, i) => (
                    <td style={{ border: '1px solid black', width: `${width}px`, height: `${height}px` }} key={td}>
                      <textarea
                        style={{ width: '100%', height: '100%', resize: 'none' }}
                        value={strArr[index * 6 + i]}
                        onChange={(e) => {
                          const newStrArr = [...strArr];
                          newStrArr[index * 6 + i] = e.target.value;
                          setStrArr(newStrArr);
                        }}
                      />
                    </td>
                  ))}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default ChartElement;
