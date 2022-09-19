import React, { useState, useCallback } from 'react';
import { TextField, Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import logo from 'assets/images/logo.jpg';
import enrollUser from 'apis/signApi';

function CompanySignup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [university, setUniversity] = useState('');
  const [major, setMajor] = useState('');
  const [memberType, setMemberType] = useState('');
  const navigate = useNavigate();

  // validation 검증
  const [visibleNameValidationText, setVisibleNameValidationText] = useState(false);
  const [visibleEmailValidationText, setVisibleEmailValidationText] = useState(false);
  const [visiblePasswordValidationText, setVisiblePasswordValidationText] = useState(false);
  // 이메일 체크 정규식
  const regEmail = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;

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

  const onSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (validationCheck()) {
        enrollUser(navigate, name, email, password, university, major, memberType);
      } else {
        console.log('걸림');
      }
    },
    [name, email, password, university, major, memberType],
  );

  return (
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
        {visibleEmailValidationText && <p className="validationText">@을 포함한 전체 이메일 주소를 입력해주세요.</p>}
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
      <div style={{ marginBottom: '5%' }}>
        <TextField
          variant="outlined"
          className="inputForm"
          label="회원 유형"
          value={memberType}
          onChange={(e) => {
            setMemberType(e.target.value);
          }}
        />
      </div>
      <Button type="submit" id="sign_up_btn">
        회원가입
      </Button>
    </form>
  );
}

export default CompanySignup;
