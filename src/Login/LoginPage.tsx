import React, { useState, useCallback } from 'react';
import { TextField, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import './LoginPage.css';

function LoginPage() {
  const [email, setEmail] = useState<String>('');
  const [password, setPassword] = useState<String>('');
  const onSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      console.log('click');
    },
    [email, password],
  );
  return (
    <div>
      <form onSubmit={onSubmit} id="loginForm">
        <TextField
          fullWidth
          variant="outlined"
          label="이메일"
          value={email}
          id="input"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setEmail(e.target.value);
          }}
        />
        <div id="validationText">올바른 이메일을 입력해주세요</div>
        <TextField
          fullWidth
          variant="outlined"
          id="input"
          label="비밀번호"
          value={password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setPassword(e.target.value);
          }}
        />
        <div id="validationText">올바른 비밀번호를 입력해주세요</div>
        <div className="login-find">
          <Link to="/signup" style={{ textDecoration: 'none' }}>
            <span className="login-find-content">회원가입</span>
          </Link>
          <Link to="/login" style={{ textDecoration: 'none' }}>
            <span className="login-find-content" style={{ borderLeft: '1px solid', borderRight: '1px solid' }}>
              아이디찾기
            </span>
          </Link>
          <Link to="/login" style={{ textDecoration: 'none  ' }}>
            <span className="login-find-content">비밀번호찾기</span>
          </Link>
        </div>
        <Button type="submit" id="loginBtn">
          로그인
        </Button>
      </form>
    </div>
  );
}

export default LoginPage;
