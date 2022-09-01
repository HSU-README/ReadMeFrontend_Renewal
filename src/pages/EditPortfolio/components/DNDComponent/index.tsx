import React from 'react';
import Container from 'pages/EditPortfolio/components/DNDComponent/styles';
import { widthLine, verticalLine } from 'pages/generateMenu/menuDefaultArrays';
import DNDTableComponent from 'pages/EditPortfolio/components/DNDTableComponent';
import { ImageList, ImageListItem } from '@mui/material';

function DNDComponent(props: any) {
  const { setCreateElement } = props;
  const createCommand = (command: any) => {
    new Promise((resolve) => {
      setCreateElement('');
      resolve(command);
    }).then((cmd) => {
      setCreateElement(cmd);
    });
  };
  return (
    <Container>
      <div className="elementParent">
        <div className="itemBoxCss">
          <details>
            <summary>텍스트 상자</summary>
            <br />
            <img
              src={require('assets/icons/textboxIcon.png')}
              style={{
                width: '100px',
                height: '100px',
              }}
              onClick={() => {
                createCommand('TEXT');
              }}
              alt="imoge-command"
              aria-hidden="true"
            />
            <br /> <br />
          </details>
        </div>
        <div className="itemBoxCss">
          <details>
            <summary>구분선</summary>
            <details>
              <summary className="menu">가로 구분선</summary>
              <br />
              <ImageList sx={{ width: 180, height: 80, overflow: 'hidden' }} cols={2}>
                {widthLine.map((item) => (
                  <ImageListItem key={item.label}>
                    <div>
                      <img
                        style={{
                          width: '100%',
                          height: '30px',
                        }}
                        src={item.val}
                        onClick={() => {
                          createCommand(`IMOGE ${item.val}`);
                        }}
                        alt="imoge-command"
                        aria-hidden="true"
                      />
                    </div>
                  </ImageListItem>
                ))}
              </ImageList>
            </details>
            <details>
              <summary className="menu">세로 구분선</summary>
              <br />
              <ImageList sx={{ width: 180, height: 80, overflow: 'hidden' }} cols={4} rowHeight={50}>
                {verticalLine.map((item) => (
                  <ImageListItem key={item.label}>
                    <div>
                      <img
                        src={item.val}
                        style={{ width: '50%', objectFit: 'fill', height: '110px' }}
                        onClick={() => {
                          createCommand(`IMOGE ${item.val}`);
                        }}
                        alt="imoge-command"
                        aria-hidden="true"
                      />
                    </div>
                  </ImageListItem>
                ))}
              </ImageList>
            </details>
          </details>
        </div>
        <div className="itemBoxCss">
          <details>
            <summary>표</summary>
            <br />
            <div style={{ border: '1px solid black', alignContent: 'center' }}>
              <DNDTableComponent setCreateElement={setCreateElement} />
            </div>
          </details>
        </div>
      </div>
    </Container>
  );
}

export default DNDComponent;
