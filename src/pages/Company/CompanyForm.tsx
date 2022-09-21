import React, { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Container, { ImageBox } from './style';
import { getAllReacuitData } from '../../apis/company';
import Banner from '../../assets/images/banner1.png';

function CompanyForm() {
  const [companyName, setCompanyName] = useState('');
  const [contents, setContents] = useState('');
  const [tech, setTech] = useState('');
  const [companyURL, setCompanyURL] = useState('');
  const [salary, setSalary] = useState('');
  const [duty, setDuty] = useState('');
  const [location, setLocation] = useState('');
  const [career, setCareer] = useState('');
  const [pofolName, setPofolName] = useState('');
  const navigate = useNavigate();
  const setFunction = (d: any): void => {
    setCompanyName(d.companyName);
    setContents(d.content);
    setTech(d.skillStack);
    setSalary(d.salary);
    setLocation(d.region);
    setCompanyURL(d.applyLink);
    setDuty(d.jobOpening);
    setCareer(d.divison);
  };

  useEffect(() => {
    async function fetchAllrecruitData() {
      const recruitDatas = await getAllReacuitData();
      const id = Number(window.location.pathname.split('/')[2]);
      recruitDatas?.data.result.forEach((d: any): void => {
        if (id === d.id) {
          setFunction(d);
        }
      });
      navigate('/');
    }
    fetchAllrecruitData();
  }, []);
  const fileLoad = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = (e.target as HTMLInputElement).files;
    if (selectedFiles !== null) {
      const selectedFilesArray = Array.from(selectedFiles);
      setPofolName(selectedFilesArray[0].name);
    }
  };
  return (
    <>
      <Container>
        <form>
          <div
            style={{
              border: '1px solid black',
              borderRadius: '20px',
              width: '67rem',
              marginBottom: '3%',
            }}
          >
            <ImageBox background={Banner} />
            <ImageBox background={Banner} />
            <ImageBox background={Banner} />
            <ImageBox background={Banner} />
          </div>
          <div className="section">
            <label className="sectionName" htmlFor="inputCompanyName">
              회사명
            </label>
            <div className="inputCompanyName">{companyName}</div>
          </div>
          <div className="section">
            <label className="sectionName" htmlFor="inputCompanyName">
              구인 내용
            </label>
            <div
              placeholder="스마일게이트"
              style={{
                height: ' 6rem',
              }}
              className="inputCompanyName"
            >
              {contents}
            </div>
          </div>
          <div className="section">
            <label className="sectionName" htmlFor="inputCompanyName">
              기술 스택
            </label>
            <div className="inputCompanyName">{tech}</div>
          </div>
          <div className="section">
            <label className="sectionName" htmlFor="inputCompanyName2">
              직무
            </label>
            <div className="inputCompanyName2">{duty}</div>
            <label className="sectionName" htmlFor="inputCompanyName2">
              구분
            </label>
            <div className="inputCompanyName2">{career}</div>
          </div>
          <div className="section">
            <label className="sectionName" htmlFor="inputCompanyName2">
              지역
            </label>
            <div className="inputCompanyName2">{location}</div>
            <label className="sectionName" htmlFor="inputCompanyName2">
              연봉(월급)
            </label>
            <div className="inputCompanyName2">{salary} 만원</div>
          </div>
          <div className="section">
            <label className="sectionName" htmlFor="inputCompanyName">
              지원 링크
            </label>
            <div className="inputCompanyName" style={{ color: 'blue', cursor: 'pointer' }}>
              {companyURL}
            </div>
          </div>
          <div className="fileName">
            업로드 파일 : &nbsp;
            {pofolName}
          </div>
        </form>
      </Container>
      <Button
        component="label"
        style={{
          backgroundColor: '#FF6B6B',
          color: 'white',
          width: '15rem',
          fontSize: '1.5em',
          fontWeight: '700',
          borderRadius: '20px',
          marginLeft: '43rem',
          marginBottom: '3em',
          height: '3rem',
        }}
      >
        신청하기
        <input type="file" hidden onChange={fileLoad} />
      </Button>
    </>
  );
}

export default CompanyForm;
