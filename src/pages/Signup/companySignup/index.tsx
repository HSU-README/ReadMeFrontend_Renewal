import React, { useState, useCallback } from 'react';
import { TextField, Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { Link } from 'react-router-dom';
import logo from 'assets/images/logo.jpg';

function CompanySignup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [business, setBusiness] = useState('');

  // const navigate = useNavigate();

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

  const handleBusinessChange = (event: SelectChangeEvent) => {
    setBusiness(event.target.value);
  };

  const onSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (validationCheck()) {
        // enrollUser(navigate, name, email, password, major);
      } else {
        console.log('걸림');
      }
    },
    [name, email, password, business],
  );

  return (
    <form onSubmit={onSubmit}>
      <Link to="/">
        <img src={logo} alt="로고" className="logoImg" />
      </Link>
      <div style={{ marginBottom: '5%' }}>
        <TextField
          required
          variant="outlined"
          className="inputForm"
          value={name}
          label="기업명"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        {visibleNameValidationText && <p className="validationText">올바른 기업명을 입력해주세요.</p>}
      </div>
      <div style={{ marginBottom: '5%' }}>
        <TextField
          required
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
          required
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
        <FormControl className="inputForm" required sx={{ m: 1, minWidth: 120 }}>
          <InputLabel>업종</InputLabel>
          <Select id="businessSelectForm" value={business} label="business" onChange={handleBusinessChange}>
            <MenuItem value="영업">영업</MenuItem>
            <MenuItem value="마케팅">마케팅</MenuItem>
            <MenuItem value="기획">기획</MenuItem>
            <MenuItem value="회계">회계</MenuItem>
            <MenuItem value="유통">유통</MenuItem>
            <MenuItem value="IT">IT</MenuItem>
            <MenuItem value="연구개발">연구개발</MenuItem>
            <MenuItem value="생산">생산</MenuItem>
            <MenuItem value="건축">건축</MenuItem>
            <MenuItem value="토목">토목</MenuItem>
            <MenuItem value="의료">의료</MenuItem>
            <MenuItem value="교육">교육</MenuItem>
            <MenuItem value="미디어">미디어</MenuItem>
            <MenuItem value="디자인">디자인</MenuItem>
          </Select>
        </FormControl>
      </div>

      <Button type="submit" id="sign_up_btn">
        회원가입
      </Button>
    </form>
  );
}

export default CompanySignup;
