import React, { Dispatch, SetStateAction } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';
import './styles.css';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  textAlign: 'center',
  borderRadius: '15px',
  p: 4,
};

interface loginModalProps {
  setShowLoginModal: Dispatch<SetStateAction<boolean>>;
  showLoginModal: boolean;
}

function LoginModal({ showLoginModal, setShowLoginModal }: loginModalProps): React.ReactElement {
  const handleClose = () => {
    setShowLoginModal(false);
  };
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={showLoginModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={showLoginModal}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              로그인 후 이용 가능한 서비스입니다.
            </Typography>
            <NavLink to="/login" className="confirmBtn" onClick={handleClose}>
              확인
            </NavLink>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
export default LoginModal;
