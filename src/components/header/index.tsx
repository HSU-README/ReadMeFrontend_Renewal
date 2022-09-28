import React, { useState, useEffect } from 'react';
import logo from 'assets/images/logo_w.png';
import { Link } from 'react-router-dom';
// import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
// import LoginIcon from '@mui/icons-material/Login';
import Searchbar from 'components/header/SearchBar';
// import colors from 'styles/colors';
import { getUser } from 'apis/userApi';
import { Container, headerFont, MyPage } from './styles';

export default function Header() {
  const readmeUserInfo = localStorage.getItem('readme_userInfo');
  const readmeLogin = localStorage.getItem('readme_login');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [image, setImage] = useState<any>(
    'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
  );
  const userId = readmeUserInfo !== null ? JSON.parse(readmeUserInfo).id : null;
  const [, setUserInfo] = useState<any>('');
  const moveHome = () => {
    window.location.href = '/';
  };

  useEffect(() => {
    if (readmeLogin && readmeUserInfo) {
      setIsLoggedIn(true);
      setUserInfo(readmeUserInfo);
    }
    async function fetchUserData() {
      const data = await getUser(userId);
      if (!data.profileUrl) {
        setImage('https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png');
      } else {
        setImage(data.profileUrl);
      }
    }
    fetchUserData();
  }, []);

  return (
    <Container>
      <img
        src={logo}
        className="logo"
        onClick={moveHome}
        aria-hidden="true"
        style={{ cursor: 'pointer', marginTop: '0px' }}
        alt="logo"
      />
      <div className="searchbar">
        <Searchbar />
      </div>

      <div className="section-login">
        {isLoggedIn ? (
          <>
            <Link to="/mypage" style={{ textDecoration: 'none' }}>
              <MyPage bgImg={image} />
            </Link>
            <Link
              to="/"
              style={{ textDecoration: 'none', margin: '0px 0px 0px 20px' }}
              onClick={() => {
                setIsLoggedIn(false);
                setUserInfo(undefined);
                localStorage.clear();
              }}
            >
              {/* <LogoutOutlinedIcon fontSize="large" style={{ color: colors.primary, width: '35px' }} /> */}
              <div style={headerFont}>로그아웃</div>
            </Link>
          </>
        ) : (
          <Link to="/login" style={{ textDecoration: 'none' }}>
            {/* <LoginIcon fontSize="large" style={{ color: 'white' }} /> */}
            <div style={headerFont}>로그인</div>
          </Link>
        )}
      </div>
    </Container>
  );
}
