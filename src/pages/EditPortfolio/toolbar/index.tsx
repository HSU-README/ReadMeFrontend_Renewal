import React, { useEffect, useRef, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import ReactToPrint from 'react-to-print';
import {
  TextField,
  RadioGroup,
  Radio,
  FormControl,
  Input,
  FormControlLabel,
  Dialog,
  DialogContent,
  DialogActions,
  DialogContentText,
  Button,
  CircularProgress,
} from '@mui/material';
import { storage } from 'utils/firebase';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import Container from 'pages/EditPortfolio/toolbar/styles';
import plusIcon2 from 'assets/icons/plus_icon2.png';
import { fontList, sizeList } from 'styles/fonts';
import { IToolbar } from 'types/toolbar';
import LikeButton from 'pages/EditPortfolio/toolbar/likeButton/index';

export default function Toolbar({
  isEditEnable,
  canvasBox,
  createPortfolio,
  userId,
  canvasData,
  docId,
  docTitle,
  isEditable,
}: IToolbar) {
  const [title, setTitle] = useState(docTitle);
  const [tagsArray, setTagsArray] = useState<string[]>([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [visibleCheck, setVisibleCheck] = useState(true);
  const [imageName, setImageName] = useState<any>();
  const imageRef = useRef<HTMLInputElement>(null);
  const [tagText, setTagText] = useState('');
  const [changeImageCss, setChangeImageCss] = useState('beforeImage');
  const [generateState, setGenerateState] = useState(false);

  const handleOpen = () => {
    setOpenDialog(true);
  };
  const handleClose = () => {
    setOpenDialog(false);
  };

  const captureToFirebase = async () => {
    const storageRef = ref(storage, imageName.name);

    // upload the file
    if (imageName !== '') {
      const uploadTask = await uploadBytesResumable(storageRef, imageName);
      const url = await getDownloadURL(uploadTask.ref);
      return url;
    }
    return 'https://firebasestorage.googleapis.com/v0/b/fir-readme-storage.appspot.com/o/thumnail.png?alt=media&token=ce69dedd-6098-44aa-aba5-202383541bc2';
  };

  const navigate = useNavigate();

  useEffect(() => {
    setTitle(docTitle);
  }, [docTitle]);

  const [image, setImage] = useState(plusIcon2);
  const onImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setChangeImageCss('afterImage');
      setImage(URL.createObjectURL(event.target.files[0]));
      setImageName(event.target.files[0]);
    }
  };

  useEffect(() => {
    console.log(tagsArray);
  }, [tagsArray]);

  return (
    <Container style={{ width: '250px', textAlign: 'left', margin: 'auto', marginTop: '20px', marginBottom: '10px' }}>
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
      <span>
        {!isEditable ? (
          <img
            onClick={() => {
              handleOpen();
            }}
            src={require('assets/icons/import.png')}
            alt="저장"
            style={{ marginRight: '20px', width: '40px', height: '40px', cursor: 'pointer' }}
            aria-hidden="true"
          />
        ) : (
          <img
            onClick={() => {
              handleOpen();
            }}
            src={require('assets/icons/saveIcon.png')}
            alt="저장"
            style={{ marginRight: '20px', width: '35px', height: '35px', cursor: 'pointer' }}
            aria-hidden="true"
          />
        )}

        {!isEditable ? (
          <Dialog
            open={openDialog}
            onClose={handleClose}
            PaperProps={{ sx: { textAlign: 'center', width: '20%', height: '16%', padding: '10px' } }}
          >
            <DialogContent>
              <DialogContentText style={{ color: 'black', fontSize: '28px', fontWeight: 'bold' }}>
                문서를 불러오시겠습니까?
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button
                style={{ backgroundColor: 'black', color: 'white', marginRight: '10px', fontWeight: 'bold' }}
                onClick={handleClose}
              >
                취소
              </Button>
              <Button style={{ backgroundColor: 'black', color: 'white' }}>
                <NavLink
                  to={`/generate/${docId}`}
                  style={{ textDecoration: 'none', color: 'white', marginLeft: '5px', fontWeight: 'bold' }}
                >
                  불러오기
                </NavLink>
              </Button>
            </DialogActions>
          </Dialog>
        ) : (
          <Dialog
            open={openDialog}
            onClose={handleClose}
            PaperProps={{ sx: { width: '30%', height: '45%', padding: '10px' } }}
          >
            <DialogContent>
              <DialogContentText style={{ textAlign: 'center', fontSize: '30px', color: 'black', fontWeight: 'bold' }}>
                {title}
                <FormControl style={{ marginLeft: '68%' }}>
                  <RadioGroup
                    defaultValue="false"
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    onChange={(e) => (e.target.value === 'true' ? setVisibleCheck(true) : setVisibleCheck(false))}
                  >
                    <FormControlLabel value="true" aria-label="A" control={<Radio size="small" />} label="공개" />
                    <FormControlLabel value="false" aria-label="A" control={<Radio size="small" />} label="비공개" />
                  </RadioGroup>
                </FormControl>
                <div style={{ textAlign: 'right', fontSize: '13px' }}>
                  수정 시간 : {new Date().getFullYear()}: {new Date().getMonth() + 1}: {new Date().getDate()}:{' '}
                  {new Date().getHours()}: {new Date().getMinutes()}
                </div>
              </DialogContentText>

              <div style={{ width: '100%', height: '200px' }}>
                <label htmlFor="fileSave">
                  <img
                    alt="importImg"
                    src={image}
                    className={changeImageCss}
                    onChange={() => {
                      setChangeImageCss('afterImage');
                    }}
                  />
                  <input
                    style={{ position: 'absolute', marginLeft: '200px', marginTop: '90px', opacity: '0' }}
                    ref={imageRef}
                    type="file"
                    id="fileSave"
                    onChange={onImageChange}
                    className="filetype"
                    aria-hidden="true"
                  />
                </label>
              </div>
              {tagsArray.map((data) => (
                <Button
                  style={{ minWidth: '50px', marginTop: '5px', padding: '0px', marginBottom: '5px' }}
                  key={data}
                  onClick={() => {
                    if (window.confirm(`${data}태그를 삭제 하시겠어요?`)) {
                      setTagsArray(tagsArray.filter((it) => it !== data));
                    }
                  }}
                >
                  {data}
                </Button>
              ))}

              <TextField
                id="outlined-basic"
                label="태그"
                placeholder="태그를 입력해주세요."
                value={tagText}
                variant="outlined"
                size="small"
                style={{ width: '100%', marginTop: '15px' }}
                onKeyPress={(e) => {
                  console.log(e);
                  if (tagsArray.length < 4) {
                    if (e.key === 'Enter') {
                      const tmpText = tagText.split('\n');
                      const sendText = `#${tmpText}`;
                      setTagText('');
                      setTagsArray([...tagsArray, sendText]);
                    }
                  } else {
                    alert('태그는 4개까지 선택 가능합니다.');
                  }
                }}
                onChange={(e) => {
                  setTagText(e.target.value);
                }}
              />
            </DialogContent>
            <DialogActions>
              <Button
                style={{ backgroundColor: 'black', color: 'white', marginRight: '10px' }}
                onClick={() => {
                  handleClose();
                }}
              >
                취소
              </Button>
              <Button
                style={{ backgroundColor: 'black', color: 'white' }}
                onClick={async () => {
                  handleClose();
                  await setGenerateState(true);
                  const docUrl = await captureToFirebase();
                  await createPortfolio(userId, title, canvasData, tagsArray, visibleCheck, docUrl);
                  await setGenerateState(false);
                  navigate('/');
                }}
              >
                확인
              </Button>
            </DialogActions>
          </Dialog>
        )}
        {generateState ? (
          <Dialog open onClose={handleClose} PaperProps={{ sx: { textAlign: 'center', width: '19%', height: '20%' } }}>
            <DialogContent>
              <DialogContentText style={{ color: 'black', fontSize: '40px', fontWeight: 'bold', marginBottom: '40px' }}>
                저장 중..
              </DialogContentText>
              <DialogContentText>
                <CircularProgress size={80} />
              </DialogContentText>
            </DialogContent>
          </Dialog>
        ) : (
          <div />
        )}
      </span>
      <span>
        <ReactToPrint
          trigger={() => (
            <img
              src={require('assets/icons/exportPdf.png')}
              alt="출력"
              style={{ width: '35px', height: '35px', cursor: 'pointer' }}
            />
          )}
          content={() => canvasBox.current}
        />
      </span>
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
    </Container>
  );
}
