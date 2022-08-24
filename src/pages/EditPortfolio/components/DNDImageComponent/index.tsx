import React from 'react';
import Container from 'pages/EditPortfolio/components/DNDComponent/styles';
import { image, emoji, emoji2, Picktogram } from 'pages/generateMenu/menuDefaultArrays';
import { ImageList, ImageListItem } from '@mui/material';

function DNDImageComponent(props: any) {
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
    <Container style={{ marginRight: '40px', marginLeft: '10%' }}>
      <div className="parent">
        <div className="itemBoxCss">
          <details>
            <summary>로컬 이미지 업로드</summary>
            <br />
            {image.map(() => (
              <img
                src={require('assets/icons/imageIcon.png')}
                style={{
                  width: '100px',
                  height: '100px',
                  marginLeft: '11px',
                }}
                onClick={() => createCommand('IMAGE')}
                alt="imoge-command"
                aria-hidden="true"
              />
            ))}
          </details>
        </div>

        <div className="itemBoxCss">
          <details>
            <summary>이모티콘</summary>
            <br />
            <details>
              <summary className="menu1">상상부기</summary>
              <ImageList sx={{ width: 280, height: 200 }} cols={3} rowHeight={140}>
                {emoji.map((item) => (
                  <ImageListItem key={item.label}>
                    <div style={{ border: '1px solid lightgray' }} key={`${item.label}`}>
                      <img
                        src={item.val}
                        key={item.cmd}
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
            <br />
            <details>
              <summary className="menu2">상상부기 프렌즈</summary>
              <ImageList sx={{ width: 280, height: 200 }} cols={3} rowHeight={150}>
                {emoji2.map((item) => (
                  <ImageListItem key={item.label}>
                    <div style={{ border: '1px solid lightgray' }} key={`${item.label}}`}>
                      <img
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

            <br />
            <details>
              <summary className="menu3">픽토그램</summary>
              <ImageList sx={{ width: 280, height: 200 }} cols={3} rowHeight={100}>
                {Picktogram.map((item) => (
                  <ImageListItem key={item.label}>
                    <div style={{ border: '1px solid lightgray' }} key={item.label}>
                      <img
                        key={item.cmd}
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
          </details>
        </div>
      </div>
    </Container>
  );
}

export default DNDImageComponent;
