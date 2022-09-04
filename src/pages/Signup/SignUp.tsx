import React, { useState, useCallback } from 'react';
import axios from 'axios';
import { TextField, Button } from '@mui/material';
import Footer from 'components/footer';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../Home/header/Header';
import API_ENDPOINT from '../../apis/constant';
import logo from '../../assets/images/logo.jpg';
import './SignUp.css';

function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [university, setUniversity] = useState('');
  const [major, setMajor] = useState('');
  const navigate = useNavigate();
  // validation 검증
  const [visibleNameValidationText, setVisibleNameValidationText] = useState(false);
  const [visibleEmailValidationText, setVisibleEmailValidationText] = useState(false);
  const [visiblePasswordValidationText, setVisiblePasswordValidationText] = useState(false);
  // 이메일 체크 정규식
  const regEmail = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;

  const serverApi = axios.create({
    baseURL: `${API_ENDPOINT}`,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  function validationCheck(): boolean {
    let chk = false;
    if (name.length < 2) {
      setVisibleNameValidationText(true);
      chk = true;
    } else {
      setVisibleNameValidationText(false);
    }
    if (!regEmail.test(email)) {
      setVisibleEmailValidationText(true);
      chk = true;
    } else {
      setVisibleEmailValidationText(false);
    }
    if (password === '') {
      setVisiblePasswordValidationText(true);
      chk = true;
    } else {
      setVisiblePasswordValidationText(false);
    }

    return !chk;
  }

  const enrollUser = async () => {
    await serverApi
      .post('https://hsureadme.herokuapp.com/api/v1/member/new', {
        name,
        email,
        password,
        university,
        major,
      })
      .then(() => {
        navigate('/', {
          state: {
            isSignUpSuccess: true,
          },
        });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const onSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (validationCheck()) {
        enrollUser();
      } else {
        console.log('걸림');
      }
    },
    [name, email, password, university, major],
  );

  return (
    <div>
      <Header />
      <form id="signupForm" onSubmit={onSubmit}>
        <Link to="/">
          <img src={logo} alt="로고" className="logoImg" />
        </Link>
        <div style={{ marginBottom: '5%' }}>
          <TextField
            variant="outlined"
            className="inputForm"
            value={name}
            label="이름"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          {visibleNameValidationText && <p className="validationText">올바른 이름을 입력해주세요.</p>}
        </div>
        <div style={{ marginBottom: '5%' }}>
          <TextField
            variant="outlined"
            className="inputForm"
            label="이메일"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          {visibleEmailValidationText && (
            <>
              <p className="validationText">올바른 이메일을 입력과 이메일 인증을 진행해주세요.</p>
              <button type="button" className="emailVali" onClick={() => alert('이메일 인증 테스트')}>
                이메일 인증
              </button>
            </>
          )}
        </div>
        <div style={{ marginBottom: '5%' }}>
          <TextField
            variant="outlined"
            className="inputForm"
            label="비밀번호"
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          {visiblePasswordValidationText && <p className="validationText">올바른 비밀번호를 입력해주세요.</p>}
        </div>
        <div style={{ marginBottom: '5%' }}>
          <TextField
            variant="outlined"
            className="inputForm"
            label="대학"
            value={university}
            onChange={(e) => {
              setUniversity(e.target.value);
            }}
          />
        </div>
        <div style={{ marginBottom: '5%' }}>
          <TextField
            variant="outlined"
            className="inputForm"
            label="전공"
            value={major}
            onChange={(e) => {
              setMajor(e.target.value);
            }}
          />
        </div>
        <Button type="submit" id="sign_up_btn">
          회원가입
        </Button>
      </form>
      <Footer />
    </div>
  );
}

export default SignUp;
