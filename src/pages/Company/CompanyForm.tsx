import React, { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Container, { ImageBox, ImageBox2, ImageBox3 } from './style';
import { getAllRecruitment } from '../../apis/companyApi';
import Banner1 from '../../assets/images/data1.png';
import Banner2 from '../../assets/images/data2.png';
import Banner3 from '../../assets/images/data3.jpg';
import Banner4 from '../../assets/images/data4.jpg';

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
    console.log(d);
    setCompanyName(d.companyName);
    setContents(d.content);
    setTech(d.skillStack);
    setSalary(d.salary);
    setLocation(d.region);
    setCompanyURL(d.applyLink);
    setDuty(d.jobOpening);
    setCareer(d.division);
  };

  useEffect(() => {
    async function fetchAllrecruitData() {
      const recruitDatas = await getAllRecruitment();
      const id = Number(window.location.pathname.split('/')[2]);
      recruitDatas?.data.result.forEach((d: any): void => {
        if (id === d.id) {
          setFunction(d);
        }
      });
    }
    fetchAllrecruitData();
  }, []);
  const fileLoad = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = (e.target as HTMLInputElement).files;
    if (selectedFiles !== null) {
      const selectedFilesArray = Array.from(selectedFiles);
      setPofolName(selectedFilesArray[0].name);
      navigate('/');
    }
  };
  return (
    <>
      <Container>
        <form>
          <div
            style={{
              borderRadius: '20px',
              width: '67rem',
              marginBottom: '3%',
            }}
          >
            <ImageBox3 background={Banner1} />
            <ImageBox2 background={Banner2} />
            <ImageBox2 background={Banner3} />
            <ImageBox background={Banner4} />
            <hr />
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
              placeholder="구인 내용을 입력해주세요."
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
          left: '7.5%',
        }}
      >
        신청하기
        <input type="file" hidden onChange={fileLoad} />
      </Button>
    </>
  );
}

export default CompanyForm;
