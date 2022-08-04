import React, { useState, useEffect } from 'react';
import logo from 'assets/images/logo.jpg';
import { Link } from 'react-router-dom';
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
            <div style={{ marginRight: '15px', color: '#1B262C', fontSize: '16px' }}>
              <p>{JSON.parse(userInfo).name}님</p>
            </div>
            <Link
              to="/"
              style={{ textDecoration: 'none' }}
              onClick={() => {
                setIsLoggedIn(false);
                setUserInfo(undefined);
                localStorage.clear();
              }}
            >
              <div style={headerFont}>로그아웃</div>
            </Link>
            <Link to="/mypage" style={{ textDecoration: 'none' }}>
              <div style={headerFont}>마이페이지</div>
            </Link>
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
