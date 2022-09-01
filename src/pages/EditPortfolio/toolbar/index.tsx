import React, { useEffect, useState } from 'react';
import ReactToPrint from 'react-to-print';
import { FormControl, Input } from '@mui/material';
import Container from 'pages/EditPortfolio/toolbar/styles';
import { fontList, sizeList } from 'styles/fonts';
import { IToolbar } from 'types/toolbar';
import LikeButton from 'pages/EditPortfolio/toolbar/likeButton/index';
import LoadDocument from './LoadDocument';
import SaveDocumentDialog from './SaveDocumentDialog';

function Toolbar({
  isEditEnable,
  canvasData,
  createPortfolio,
  canvasBox,
  userId,
  docId,
  docTitle,
  isEditable,
}: IToolbar) {
  const [title, setTitle] = useState(docTitle);
  const [openDialog, setOpenDialog] = useState(false);
  const handleOpen = () => {
    setOpenDialog(true);
  };

  useEffect(() => {
    setTitle(docTitle);
  }, [docTitle]);

  return (
    <Container style={{ marginBottom: '10px' }}>
      {isEditEnable && (
        <div id="toolbar">
          <select className="ql-font">
            {fontList.map((font) => (
              <option value={font}>{font}</option>
            ))}
          </select>
          <select className="ql-size">
            {sizeList.map((size) => (
              <option value={size}>{size}</option>
            ))}
          </select>
          <button type="button" className="ql-bold" aria-label="ql-bold" />
          <button type="button" className="ql-italic" aria-label="ql-italic" />
          <button type="button" className="ql-underline" aria-label="ql-underline" />
          <select className="ql-align" aria-label="ql-align" />
          <select className="ql-color" aria-label="ql-color" />
          <select className="ql-background" aria-label="ql-background" />
          <button type="button" className="ql-script" value="sub" aria-label="ql-script" />
          <button type="button" className="ql-script" value="super" aria-label="ql-script" />
          <button type="button" className="ql-list" value="ordered" aria-label="ql-list" />
          <button type="button" className="ql-list" value="bullet" aria-label="ql-list" />
        </div>
      )}
      <div className="saveAndExportLine">
        {!isEditable ? (
          <img
            onClick={() => {
              handleOpen();
            }}
            src={require('assets/icons/import.png')}
            alt="저장"
            style={{ marginLeft: '1%', width: '40px', height: '40px', cursor: 'pointer' }}
            aria-hidden="true"
          />
        ) : (
          <img
            onClick={() => {
              handleOpen();
            }}
            src={require('assets/icons/saveIcon.png')}
            alt="저장"
            style={{ marginLeft: '1%', width: '35px', height: '35px', cursor: 'pointer' }}
            aria-hidden="true"
          />
        )}
        <ReactToPrint
          trigger={() => (
            <img
              src={require('assets/icons/exportPdf.png')}
              alt="출력"
              style={{ marginLeft: '3%', width: '35px', height: '35px', cursor: 'pointer' }}
            />
          )}
          content={() => canvasBox.current}
        />

        {!isEditable ? (
          // 다른 유저의 문서를 저장하기
          <LoadDocument openDialog={openDialog} setOpenDialog={setOpenDialog} docId={docId} />
        ) : (
          <SaveDocumentDialog
            openDialog={openDialog}
            setOpenDialog={setOpenDialog}
            title={title}
            canvasData={canvasData}
            userId={userId}
            createPortfolio={createPortfolio}
          />
        )}
        <FormControl variant="standard" style={{ marginLeft: '90px', width: '50%' }}>
          <Input
            value={title}
            placeholder="제목을 입력해주세요."
            style={{
              backgroundColor: 'white',
              border: '1px solid black',
              borderRadius: '5px',
              padding: '4px',
              paddingLeft: '10px',
            }}
            onChange={(e) => {
              if (isEditable) {
                if (title.length <= 13) {
                  setTitle(e.target.value);
                } else {
                  alert('제목은 최대 13글자까지 입력 가능합니다.');
                  setTitle(title.substr(0, 12));
                }
              } else {
                alert('미리보기에서는 변경할 수 없습니다.');
              }
            }}
          />
          <LikeButton isEditable={isEditable} userId={userId} docId={docId} />
        </FormControl>
      </div>
    </Container>
  );
}

export default Toolbar;
