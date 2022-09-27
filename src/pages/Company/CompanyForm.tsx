import React, { useEffect, useState } from 'react';
import { Button } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
import Container from './style';
import { getAllRecruitment } from '../../apis/companyApi';
import BriefcaseIcon from '../../assets/icons/recruitPageIcons/briefcase.png';
import CompanyIcon from '../../assets/icons/recruitPageIcons/company.png';
import WonSolidIcon from '../../assets/icons/recruitPageIcons/won_solid.png';
import RegionIcon from '../../assets/icons/recruitPageIcons/location_company.png';
import LinkIcon from '../../assets/icons/recruitPageIcons/link.png';

function CompanyForm() {
  const [companyName, setCompanyName] = useState(''); // 회사명
  // const [contents, setContents] = useState(''); // 업무 내용
  const [tech, setTech] = useState(''); // 기술 스텍
  const [companyURL, setCompanyURL] = useState(''); // 회사 URL
  const [salary, setSalary] = useState(''); // 연봉
  const [duty, setDuty] = useState(''); // 직무
  const [region, setRegion] = useState(''); // 위치
  const [career, setCareer] = useState(''); // 고용 형태
  // const [pofolName, setPofolName] = useState(''); //
  // const navigate = useNavigate();
  const setFunction = (d: any): void => {
    setCompanyName(d.companyName);
    // setContents(d.content);
    setTech(d.skillStack);
    setSalary(d.salary);
    setRegion(d.region);
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
  // const fileLoad = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const selectedFiles = (e.target as HTMLInputElement).files;
  //   if (selectedFiles !== null) {
  //     const selectedFilesArray = Array.from(selectedFiles);
  //     setPofolName(selectedFilesArray[0].name);
  //     navigate('/');
  //   }
  // };
  return (
    <Container>
      <form>
        <div className="nameSection">
          <div className="name">{companyName}</div>
          <hr />
        </div>
        <div className="recruitInfoHeaderSection">
          <div className="infoHeader">공고 정보</div>
          <hr />
        </div>
        <div className="recruitInfoDatas">
          <div className="infoSection">
            <img className="icon" src={BriefcaseIcon} alt="직무" />
            <div className="sectionName">직무</div>
            <div className="infoData">{duty}</div>
          </div>
          <div className="infoSectionRight">
            <img className="icon" src={CompanyIcon} alt="고용 형태" />
            <div className="sectionName">고용 형태</div>
            <div className="infoData">{career}</div>
          </div>
          <div className="infoSection">
            <img className="icon" src={WonSolidIcon} alt="고용 형태" />
            <div className="sectionName">연봉</div>
            <div className="infoData">{salary}</div>
          </div>
          <div className="infoSectionRight">
            <img className="icon" src={RegionIcon} alt="고용 형태" />
            <div className="sectionName">근무 위치</div>
            <div className="infoData">{region}</div>
          </div>
          <div className="stackAndLinkSection">
            <img className="stackAndLinkSectionIcon" src={RegionIcon} alt="기술 스택" />
            <div className="stackAndLinkSectionName">기술 스택</div>
            <div className="infoData"># {tech}</div>
          </div>
          <div className="stackAndLinkSection">
            <img className="stackAndLinkSectionIcon" src={LinkIcon} alt="지원 링크" />
            <div className="stackAndLinkSectionName">지원 링크</div>
            <div className="infoData">{companyURL}</div>
          </div>
        </div>
        <div className="recruitInfoHeaderSection">
          <div className="ImageHeader">공고 정보</div>
          <div style={{ display: 'flex' }}>
            <img className="companyImg" src={LinkIcon} alt="기업 이미지" />
            <img className="companyImg" src={LinkIcon} alt="기업 이미지" />
            <img className="companyImg" src={LinkIcon} alt="기업 이미지" />
            <img className="companyImg" src={LinkIcon} alt="기업 이미지" />
          </div>
        </div>
        <div className="recruitInfoHeaderSection">
          <div className="infoHeader">업무 소개</div>
          <div style={{ border: '1px solid black', paddingLeft: '2%', marginTop: '1%', overflow: 'scroll' }}>
            업무 내용이
            들어갑니다아아아아아아아아아ㅏ아아ㅏ아아아아아아ㅏ아ㅏ아아아아아ㅏ아아아아아아아ㅏ아아아아아아ㅏ아아아아아아
            만약 업무 내용이 길다면 스크롤바가 생겨서 표현하는 것이 좋다고 봄. 내용의 디테일 폼에서만 스크롤 바가 생기게
            부탁합니다 ㅠㅠㅠ ㄳㄳ ㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇ ㅁㄴㅇㅁㄴㅇㅁㄴㅇㄴㅁㅇㅁㄴㅇㅁㅇ
            ㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㅇㅁㄴㅇ ㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㅇ
            ㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㄴ 업무 내용이
            들어갑니다아아아아아아아아아ㅏ아아ㅏ아아아아아아ㅏ아ㅏ아아아아아ㅏ아아아아아아아ㅏ아아아아아아ㅏ아아아아아아
            만약 업무 내용이 길다면 스크롤바가 생겨서 표현하는 것이 좋다고 봄. 내용의 디테일 폼에서만 스크롤 바가 생기게
            부탁합니다 ㅠㅠㅠ ㄳㄳ ㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇ ㅁㄴㅇㅁㄴㅇㅁㄴㅇㄴㅁㅇㅁㄴㅇㅁㅇ
            ㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㅇㅁㄴㅇ ㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㅇ
            ㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㄴ 업무 내용이
            들어갑니다아아아아아아아아아ㅏ아아ㅏ아아아아아아ㅏ아ㅏ아아아아아ㅏ아아아아아아아ㅏ아아아아아아ㅏ아아아아아아
            만약 업무 내용이 길다면 스크롤바가 생겨서 표현하는 것이 좋다고 봄. 내용의 디테일 폼에서만 스크롤 바가 생기게
            부탁합니다 ㅠㅠㅠ ㄳㄳ ㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇ ㅁㄴㅇㅁㄴㅇㅁㄴㅇㄴㅁㅇㅁㄴㅇㅁㅇ
            ㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㅇㅁㄴㅇ ㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㅇ
            ㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㄴ 업무 내용이
            들어갑니다아아아아아아아아아ㅏ아아ㅏ아아아아아아ㅏ아ㅏ아아아아아ㅏ아아아아아아아ㅏ아아아아아아ㅏ아아아아아아
            만약 업무 내용이 길다면 스크롤바가 생겨서 표현하는 것이 좋다고 봄. 내용의 디테일 폼에서만 스크롤 바가 생기게
            부탁합니다 ㅠㅠㅠ ㄳㄳ ㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇ ㅁㄴㅇㅁㄴㅇㅁㄴㅇㄴㅁㅇㅁㄴㅇㅁㅇ
            ㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㅇㅁㄴㅇ ㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㅇ
            ㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㄴ
          </div>
        </div>
      </form>
      <Button
        component="label"
        style={{
          backgroundColor: '#FF6B6B',
          color: 'white',
          fontSize: '1.5em',
          fontWeight: '700',
          borderRadius: '20px',
          marginLeft: '40%',
          marginBottom: '3%',
          width: '15%',
        }}
      >
        신청하기
        <input type="file" hidden />
      </Button>
    </Container>
  );
}

export default CompanyForm;
