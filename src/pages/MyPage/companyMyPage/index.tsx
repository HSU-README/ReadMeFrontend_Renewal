import React, { useState, useEffect } from 'react';
import {
  Container,
  MyPageContainer,
  MenuContainer,
  ViewContainer,
  UserInfoMenu,
  MyRecruitmentMenu,
} from 'pages/MyPage/companyMyPage/styles';
import Footer from 'components/footer';
import Header from 'components/header';
import UserInfo from 'pages/MyPage/companyMyPage/userInfo';
import { deleteRecruitment, getUserRecruitment } from 'apis/companyApi';
import { Dialog, DialogContent, DialogActions, DialogContentText, Button } from '@mui/material';
import { deleteRecruitmentState, deleteRecruitmentIdState, userRecruitmentState, openDialogState } from 'recoil/atoms';
import { useRecoilState } from 'recoil';
import { ToastContainer } from 'react-toastify';
import MyRecruitment from './myRecruitment';

function CompanyMyPage() {
  const readmeUserInfo = localStorage.getItem('readme_userInfo');
  const [currentMyPage, setCurrentMyPage] = useState('userInfo');
  const companyName = readmeUserInfo !== null ? JSON.parse(readmeUserInfo).name : null;

  const [userRecruitment, setUserRecruitment] = useRecoilState(userRecruitmentState);
  const [deleteState, setDeleteState] = useRecoilState(deleteRecruitmentState);
  const [deleteRecruitmentId, setDeleteRecruitmentId] = useRecoilState(deleteRecruitmentIdState);
  const [openDialog, setOpenDialog] = useRecoilState(openDialogState);

  const handleClose = () => {
    setOpenDialog(false);
    setDeleteState(false);
    setDeleteRecruitmentId(0);
  };

  const changeUserRecruitment = (id: number) => {
    setUserRecruitment(userRecruitment.filter((data: any) => data.id !== id));
  };

  useEffect(() => {
    async function fetchUserRecruitmentData() {
      const datas = await getUserRecruitment(companyName);
      setUserRecruitment(datas);
    }
    fetchUserRecruitmentData();
  }, []);

  return (
    <Container>
      {deleteState ? (
        <Dialog
          open={openDialog}
          onClose={handleClose}
          PaperProps={{ sx: { textAlign: 'center', width: '300px', height: '130px', padding: '10px' } }}
        >
          <DialogContent>
            <DialogContentText style={{ color: 'black', fontSize: '22px', fontWeight: 'bold' }}>
              ????????? ?????????????????????????
            </DialogContentText>
          </DialogContent>
          <DialogActions style={{ justifyContent: 'center' }}>
            <Button
              style={{ backgroundColor: 'black', color: 'white', marginRight: '10px', fontWeight: 'bold' }}
              onClick={handleClose}
            >
              ??????
            </Button>
            <Button
              style={{ backgroundColor: 'black', color: 'white' }}
              onClick={async () => {
                console.log(deleteRecruitmentId);
                handleClose();
                changeUserRecruitment(deleteRecruitmentId);
                await deleteRecruitment(deleteRecruitmentId);
              }}
            >
              ??????
            </Button>
          </DialogActions>
        </Dialog>
      ) : (
        <div />
      )}
      <Header />
      <MyPageContainer>
        <ViewContainer>
          <MenuContainer>
            <div className="myPageTitle">???????????????</div>
            <UserInfoMenu
              currentMyPage={currentMyPage}
              className="myPageSelect"
              onClick={() => {
                setCurrentMyPage('userInfo');
              }}
            >
              ????????? ??????
            </UserInfoMenu>
            <MyRecruitmentMenu
              currentMyPage={currentMyPage}
              className="myPageSelect"
              onClick={() => {
                setCurrentMyPage('myRecruitment');
              }}
            >
              ?????? ?????? ??????
            </MyRecruitmentMenu>
          </MenuContainer>

          {currentMyPage === 'userInfo' && <UserInfo />}
          {currentMyPage === 'myRecruitment' && <MyRecruitment />}
        </ViewContainer>
      </MyPageContainer>
      <ToastContainer />
      <Footer />
    </Container>
  );
}

export default CompanyMyPage;
