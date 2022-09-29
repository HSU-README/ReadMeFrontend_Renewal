import React from 'react';
import StudentMyPage from './studentMyPageNew';
import CompanyMyPage from './companyMyPage';

function MyPage() {
  const readmeUserInfo = localStorage.getItem('readme_userInfo');
  if (JSON.parse(readmeUserInfo!).memberType === 'student') {
    return <StudentMyPage />;
  }
  return <CompanyMyPage />;
}

export default MyPage;
