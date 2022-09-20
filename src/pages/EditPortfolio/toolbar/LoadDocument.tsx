import React, { Dispatch, SetStateAction } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import { DialogActions, Button } from '@mui/material';
import { NavLink } from 'react-router-dom';

interface DialogProps {
  setOpenDialog: Dispatch<SetStateAction<boolean>>;
  openDialog: boolean;
  docId: string;
}

function LoadDocument({ openDialog, setOpenDialog, docId }: DialogProps) {
  const handleClose = () => {
    setOpenDialog(false);
  };
  return (
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
  );
}

export default LoadDocument;
