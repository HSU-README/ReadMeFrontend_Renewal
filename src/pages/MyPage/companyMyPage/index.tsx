import React, { useState, useEffect } from 'react';
import {
  Container,
  MyPageContainer,
  MenuContainer,
  ViewContainer,
  UserInfoMenu,
  MyPortfolioMenu,
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
          PaperProps={{ sx: { textAlign: 'center', width: '20%', height: '16%', padding: '10px' } }}
        >
          <DialogContent>
            <DialogContentText style={{ color: 'black', fontSize: '28px', fontWeight: 'bold' }}>
              문서를 삭제하시겠습니까?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              style={{ backgroundColor: 'black', color: 'white', marginRight: '10px', fontWeight: 'bold' }}
              onClick={handleClose}
            >
              취소
            </Button>
            <Button
              style={{ backgroundColor: 'black', color: 'white' }}
              onClick={async () => {
                handleClose();
                changeUserRecruitment(deleteRecruitmentId);
                await deleteRecruitment(deleteRecruitmentId);
              }}
            >
              확인
            </Button>
          </DialogActions>
        </Dialog>
      ) : (
        <div />
      )}
      <Header />
      <MyPageContainer>
        <MenuContainer>
          <div className="myPageTitle">마이페이지</div>
          <UserInfoMenu
            currentMyPage={currentMyPage}
            className="myPageSelect"
            onClick={() => {
              setCurrentMyPage('userInfo');
            }}
          >
            사용자 정보
          </UserInfoMenu>
          <MyPortfolioMenu
            currentMyPage={currentMyPage}
            className="myPageSelect"
            onClick={() => {
              setCurrentMyPage('myPortfolio');
            }}
          >
            채용 공고 관리
          </MyPortfolioMenu>
        </MenuContainer>
        <ViewContainer>
          {currentMyPage === 'userInfo' && <UserInfo />}
          {currentMyPage === 'myPortfolio' && <MyRecruitment />}
        </ViewContainer>
      </MyPageContainer>
      <ToastContainer />
      <Footer />
    </Container>
  );
}

export default CompanyMyPage;
