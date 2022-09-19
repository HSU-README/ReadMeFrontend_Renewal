import React, { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import Container, { ImageBox } from './style';
import { getAllReacuitData } from '../../apis/company';
import Banner from '../../assets/images/banner1.png';

function CompanyForm() {
  // const [fileNames, setFileNames] = useState<string[]>([]);
  const [companyName, setCompanyName] = useState('');
  const [contents, setContents] = useState('');
  const [tech, setTech] = useState('');
  const [companyURL, setCompanyURL] = useState('');
  const [salary, setSalary] = useState('');
  const [duty, setDuty] = useState('');
  const [location, setLocation] = useState('');
  const [career, setCareer] = useState('');
  useEffect(() => {
    async function fetchAllrecruitData() {
      const recruitDatas = await getAllReacuitData();
      const id = Number(window.location.pathname.split('/')[2]);
      // eslint-disable-next-line array-callback-return
      recruitDatas?.data.result.map((d: any) => {
        if (id === d.id) {
          setCompanyName(d.companyName);
          setContents(d.content);
          setTech(d.skillStack);
          setSalary(d.salary);
          setLocation(d.region);
          setCompanyURL(d.applyLink);
          setDuty(d.jobOpening);
          setCareer(d.divison);
        }
      });
    }
    fetchAllrecruitData();
  }, []);
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
            <label className="sectionName">회사명</label>
            <div className="inputCompanyName">{companyName}</div>
          </div>
          <div className="section">
            <label className="sectionName">구인 내용</label>
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
            <label className="sectionName">기술 스택</label>
            <div className="inputCompanyName">{tech}</div>
          </div>
          <div className="section">
            <label className="sectionName">직무</label>
            <div className="inputCompanyName2">{duty}</div>
            <label className="sectionName">구분</label>
            <div className="inputCompanyName2">{career}</div>
          </div>
          <div className="section">
            <label className="sectionName">지역</label>
            <div className="inputCompanyName2">{location}</div>
            <label className="sectionName">연봉(월급)</label>
            <div className="inputCompanyName2">{salary} 만원</div>
          </div>
          <div className="section">
            <label className="sectionName">지원 링크</label>
            <a>
              <div className="inputCompanyName" style={{ color: 'blue' }}>
                {companyURL}
              </div>
            </a>
          </div>
        </form>
      </Container>
      <Button
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
      </Button>
    </>
  );
}

export default CompanyForm;
