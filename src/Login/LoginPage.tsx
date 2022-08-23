import React, { useState, useCallback } from 'react';
import axios from 'axios';
import { TextField, Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import Footer from 'components/footer';
import API_ENDPOINT from '../apis/constant';
import Header from '../pages/Home/header/Header';
import logo from '../assets/images/logo.jpg';
import './LoginPage.css';

function LoginPage() {
  const [email, setemail] = useState<String>('');
  const [password, setPassword] = useState<String>('');
  const [loginCheck, setLoginCheck] = useState<boolean>(false);
  const navigate = useNavigate();
  const serverApi = axios.create({
    baseURL: `${API_ENDPOINT}`,
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const login = async () => {
    await serverApi
      .post('https://hsureadme.herokuapp.com/api/v1/member/login', {
        email,
        password,
      })
      .then((response) => {
        if (response.data.code === 'S200') {
          const userInfo = JSON.stringify(response.data.result);
          // const successMessage = JSON.stringify(response.data.message);

          localStorage.setItem('readme_login', 'true');
          localStorage.setItem('readme_userInfo', userInfo);

          navigate('/', {
            state: {
              isLoginSuccess: true,
            },
          });
        }
      });
  };

  const onSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (email === '' || password === '') {
        setLoginCheck(true);
      } else {
        login();
      }
    },
    [email, password],
  );

  return (
    <div>
      <Header />
      <form onSubmit={onSubmit} id="loginForm">
        <Link to="/">
          <img src={logo} alt="로고" className="logoImg" />
        </Link>
        <div style={{ marginBottom: '5%' }}>
          <TextField
            variant="outlined"
            label="이메일"
            value={email}
            className="inputForm"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setemail(e.target.value);
            }}
          />
        </div>
        <TextField
          variant="outlined"
          className="inputForm"
          label="비밀번호"
          value={password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setPassword(e.target.value);
          }}
        />
        <div className="login-find">
          <Link to="/signup" style={{ textDecoration: 'none' }}>
            <span className="login-find-content">회원가입&nbsp;</span>
          </Link>
          |&nbsp;
          <Link to="/login" style={{ textDecoration: 'none' }}>
            <span className="login-find-content" style={{ borderLeft: '1px solemail', borderRight: '1px solemail' }}>
              &nbsp;아이디찾기&nbsp;
            </span>
          </Link>
          |&nbsp;
          <Link to="/login" style={{ textDecoration: 'none  ' }}>
            <span className="login-find-content">&nbsp;비밀번호찾기</span>
          </Link>
        </div>
        {loginCheck && (
          <div className="valemailationText">
            아이디(로그인 전용 아이디) 또는 비밀번호를 잘못 입력했습니다. 입력하신 내용을 다시 확인해주세요.
          </div>
        )}
        <Button type="submit" id="loginBtn">
          로그인
        </Button>
      </form>
      <div className="footerSection">
        <Footer />
      </div>
    </div>
  );
}

export default LoginPage;
