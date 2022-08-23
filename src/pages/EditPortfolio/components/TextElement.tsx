import React, { useContext, useRef } from 'react';
import ReactHtmlParser from 'react-html-parser';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { ICanvasComponent } from 'types/canvas';
import { fontList, sizeList } from 'styles/fonts';
import { CanvasContext } from '../canvasContainer';

import '../Canvas.css';

const Size = Quill.import('attributors/style/size');
Size.whitelist = sizeList;

const Font = Quill.import('attributors/style/font');
Font.whitelist = fontList;

Quill.register(Font, true);
Quill.register(Size, true);

function TextElement(props: ICanvasComponent) {
  const { content, id, isReadOnly } = props;
  const { actions } = useContext(CanvasContext);
  const editorRef = useRef(null);
  const textRef = useRef(null);
  const updateEditorValue = (value: string) => {
    // 텍스트박스 내부 글자 수정 이벤트
    actions?.updateCanvasData({ id, content: value });
  };
  const modules = {
    toolbar: '#toolbar',
  };
  return (
    <div>
      {isReadOnly ? (
        <div ref={textRef}>
          <div
            className="ql-editor"
            style={{
              fontFamily: 'Arial',
              fontSize: '13px',
              padding: 0,
            }}
          >
            {ReactHtmlParser(content || '')}
          </div>
        </div>
      ) : (
        <ReactQuill
          ref={editorRef}
          readOnly={isReadOnly}
          theme="snow"
          className="quill-contaier"
          modules={modules}
          value={content}
          onChange={updateEditorValue}
        />
      )}
    </div>
  );
}
export default TextElement;
