import React, { useState, useEffect } from 'react';
import './styles.css';
import logo from 'assets/images/logo.jpg';
import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import Searchbar from './SearchBar';

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState<string>('');

  useEffect(() => {
    // 로그인&유저정보 state에 저장
    const readmeLogin = localStorage.getItem('readme_login');
    const readmeUserInfo = localStorage.getItem('readme_userInfo');
    if (readmeLogin && readmeUserInfo !== '' && readmeUserInfo !== null) {
      setIsLoggedIn(true);
      setUserInfo(readmeUserInfo);
      // signIn();
    }
  }, []);

  return (
    <div className="headerMain">
      <div className="inner">
        <NavLink to="/" className="logoNav">
          <img src={logo} className="logo" alt="logo" />
        </NavLink>
        <Searchbar />

        {/* 로그인시 출력 컴포넌트 */}
        {isLoggedIn ? (
          <span className="buttonFamily">
            <Button disabled style={{ color: '#000000', marginTop: '7%', fontSize: '18px' }}>
              {JSON.parse(userInfo).name}님&nbsp;&nbsp;|
            </Button>
            <Button
              style={{ color: '#000000', marginTop: '7%', fontSize: '18px' }}
              onClick={() => {
                // signOut();
                setUserInfo('');
                localStorage.clear();
              }}
            >
              <NavLink className="headerText" to="/login">
                로그아웃
              </NavLink>
            </Button>

            <Button style={{ marginTop: '7%', fontSize: '18px' }}>
              <NavLink className="headerMypage" to="/mypage">
                마이페이지
              </NavLink>
            </Button>
          </span>
        ) : (
          //  로그아웃시 출력 컴포넌트
          <span className="buttonFamily">
            <Button style={{ marginTop: '17%', fontSize: '18px' }}>
              <NavLink className="headerText" to="/login">
                로그인&nbsp;&nbsp;
              </NavLink>
            </Button>
            <Button style={{ marginTop: '17%', fontSize: '18px' }}>
              <NavLink className="headerText" to="/signup">
                회원가입
              </NavLink>
            </Button>
          </span>
        )}
      </div>
    </div>
  );
}

export default Header;
