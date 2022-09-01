import React, { Dispatch, SetStateAction, useState, useRef } from 'react';
import plusIcon2 from 'assets/icons/plus_icon2.png';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import {
  DialogActions,
  Button,
  FormControlLabel,
  RadioGroup,
  FormControl,
  TextField,
  Radio,
  CircularProgress,
} from '@mui/material';
import { storage } from 'utils/firebase';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { useNavigate } from 'react-router-dom';

interface DialogProps {
  setOpenDialog: Dispatch<SetStateAction<boolean>>;
  openDialog: boolean;
  title: string;
  canvasData: any;
  userId: any;
  createPortfolio: any;
}

// eslint-disable-next-line max-len
function SaveDocumentDialog({ openDialog, setOpenDialog, title, canvasData, userId, createPortfolio }: DialogProps) {
  const [tagsArray, setTagsArray] = useState<string[]>([]);
  const [changeImageCss, setChangeImageCss] = useState('beforeImage');
  const [visibleCheck, setVisibleCheck] = useState(true);
  const [tagText, setTagText] = useState('');
  const [imageName, setImageName] = useState<any>();
  const [generateState, setGenerateState] = useState(false);
  const [image, setImage] = useState(plusIcon2);
  const imageRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const handleClose = () => {
    setOpenDialog(false);
  };
  const onImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setChangeImageCss('afterImage');
      setImage(URL.createObjectURL(event.target.files[0]));
      setImageName(event.target.files[0]);
    }
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

  return (
    <>
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
            style={{ marginTop: '15px' }}
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
              setGenerateState(true);
              const docUrl = await captureToFirebase();
              await createPortfolio(userId, title, canvasData, tagsArray, visibleCheck, docUrl);
              setGenerateState(false);
              navigate('/');
            }}
          >
            확인
          </Button>
        </DialogActions>
      </Dialog>
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
    </>
  );
}

export default SaveDocumentDialog;
