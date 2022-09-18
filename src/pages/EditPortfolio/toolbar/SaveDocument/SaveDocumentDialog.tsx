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
  Radio,
  CircularProgress,
} from '@mui/material';
import { storage } from 'utils/firebase';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { useNavigate } from 'react-router-dom';
import TagInput from './TagInput';

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
    if (imageName !== undefined) {
      const storageRef = ref(storage, imageName.name);
      console.log(`img name:${imageName}`);
      // upload the file

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
        PaperProps={{ sx: { width: '30%', height: '70%', padding: '10px' } }}
      >
        <DialogContent>
          <DialogContentText style={{ textAlign: 'center', fontSize: '30px', color: 'black', fontWeight: 'bold' }}>
            {title}
            <FormControl style={{ marginLeft: '50%' }}>
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

          <div style={{ width: '60%', height: '60%' }}>
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
                style={{ position: 'absolute', top: 100, left: 100, opacity: 0 }}
                ref={imageRef}
                type="file"
                id="fileSave"
                onChange={onImageChange}
                className="filetype"
                aria-hidden="true"
              />
            </label>
          </div>
        </DialogContent>
        <TagInput tagsArray={tagsArray} setTagsArray={setTagsArray} />
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
