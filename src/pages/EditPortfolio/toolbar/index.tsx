import React, { useEffect, useState } from 'react';
import ReactToPrint from 'react-to-print';
import Container from 'pages/EditPortfolio/toolbar/styles';
import { fontList, sizeList } from 'styles/fonts';
import { IToolbar } from 'types/toolbar';
import LikeButton from 'pages/EditPortfolio/toolbar/likeButton/index';
import LoadDocument from './LoadDocument';
import SaveDocumentDialog from './SaveDocument/SaveDocumentDialog';
import TitleForm from './TitleForm';

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
            style={{ marginLeft: '1%', marginTop: '2px', width: '32px', height: '34px', cursor: 'pointer' }}
            aria-hidden="true"
          />
        )}
        <ReactToPrint
          trigger={() => (
            <img
              src={require('assets/icons/exportPdf.png')}
              alt="출력"
              style={{ marginLeft: '2%', width: '40px', height: '38px', cursor: 'pointer' }}
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
        <TitleForm isEditable={isEditable} title={title} setTitle={setTitle} />
        <LikeButton isEditable={isEditable} userId={userId} docId={docId} />
      </div>
    </Container>
  );
}

export default Toolbar;
