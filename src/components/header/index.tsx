import React, { useState, useEffect } from 'react';
import logo from 'assets/images/logo.jpg';
import { Link } from 'react-router-dom';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { Container, headerFont } from './styles';

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState<any>('');
  const moveHome = () => {
    window.location.href = '/';
  };

  useEffect(() => {
    const readmeLogin = localStorage.getItem('readme_login');
    const readmeUserInfo = localStorage.getItem('readme_userInfo');
    if (readmeLogin && readmeUserInfo) {
      setIsLoggedIn(true);
      setUserInfo(readmeUserInfo);
    }
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
      <div className="section-login">
        {isLoggedIn ? (
          <>
            <div style={{ marginRight: '15px', color: '#1B262C', fontSize: '18px', fontWeight: 'bold' }}>
              <p>{JSON.parse(userInfo).name}님</p>
            </div>
            <div style={{ display: 'flex', height: '22px' }}>
              <Link
                to="/"
                style={{ textDecoration: 'none', margin: '0px 10px 0px 10px' }}
                onClick={() => {
                  setIsLoggedIn(false);
                  setUserInfo(undefined);
                  localStorage.clear();
                }}
              >
                <LogoutOutlinedIcon color="primary" />
              </Link>
              <Link to="/mypage" style={{ textDecoration: 'none' }}>
                <AccountCircleOutlinedIcon color="primary" />
              </Link>
            </div>
          </>
        ) : (
          <>
            <Link to="/login" style={{ textDecoration: 'none' }}>
              <div style={headerFont}>로그인</div>
            </Link>
            <Link to="/signup" style={{ textDecoration: 'none' }}>
              <div style={headerFont}>회원가입</div>
            </Link>
          </>
        )}
      </div>
    </Container>
  );
}
