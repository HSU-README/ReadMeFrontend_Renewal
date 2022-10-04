/* eslint-disable consistent-return */
import React, { useState, useCallback, SetStateAction, Dispatch, useEffect } from 'react';
import { recruitmentImagesState } from 'recoil/atoms';
import { Button, Input } from '@mui/material';
import { storage } from 'utils/firebase';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import Container from './style';
import SelectOption, { MenuItemType } from './Select';
import UploadImages from './uploadImages';
import { employmentNotification } from '../../apis/companyApi';

const dutys: MenuItemType[] = [{ name: '영업/기획' }, { name: '개발' }, { name: '디자인' }, { name: '인턴/계약직' }];
const locations: MenuItemType[] = [
  { name: '서울' },
  { name: '경기' },
  { name: '광주' },
  { name: '대구' },
  { name: '대전' },
  { name: '대구' },
  { name: '세종' },
  { name: '울산' },
  { name: '인천' },
  { name: '강원' },
  { name: '경북' },
  { name: '경남' },
  { name: '전남' },
  { name: '전북' },
  { name: '충남' },
  { name: '충북' },
  { name: '제주' },
  { name: '해외' },
  { name: '기타' },
];
const careers: MenuItemType[] = [{ name: '신입' }, { name: '경력직' }];
function EnrollForm() {
  const readmeUserInfo = localStorage.getItem('readme_userInfo');
  const companyName = readmeUserInfo !== null ? JSON.parse(readmeUserInfo).name : null;
  const [contents, setContents] = useState('');
  const [tech, setTech] = useState('');
  const [companyURL, setCompanyURL] = useState('');
  const [salary, setSalary] = useState('');
  const [duty, setDuty] = useState('');
  const [location, setLocation] = useState('');
  const [career, setCareer] = useState('');
  const [contentsError, setContentsError] = useState(true);
  const [techError, setTechError] = useState(true);
  const [salaryError, setSalaryError] = useState(true);
  const [companyURLError, setCompanyURLError] = useState(true);
  const [photoUrl, setPhotoURL] = useState('');
  const [imagesState] = useRecoilState<any[]>(recruitmentImagesState);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(imagesState);
  }, [imagesState]);

  const textChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, setFunction: Function) => {
    setFunction(e.target.value);
  };
  const validation = (text: string, validationErr: Dispatch<SetStateAction<boolean>>): boolean => {
    if (text === '') {
      // 입력값이 잘못 된 경우, true.
      validationErr(false);
      return false;
    }
    validationErr(true);
    return true;
  };

  // const urlArray = new Array(4).fill(
  //   'https://firebasestorage.googleapis.com/v0/b/fir-readme-storage.appspot.com/o/thumnail.png?alt=media&token=ce69dedd-6098-44aa-aba5-202383541bc2',
  // );

  const captureToFirebase = async () => {
    const imageName = imagesState[0];
    if (imageName !== undefined) {
      const storageRef = ref(storage, imageName.name);
      // upload the file
      const uploadTask = await uploadBytesResumable(storageRef, imageName);
      const URL = await getDownloadURL(uploadTask.ref);
      setPhotoURL(URL);
      return URL;
    }
  };

  const postSubmit = useCallback(
    async (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      let chk = true;
      if (!validation(contents, setContentsError)) {
        chk = false;
      }
      if (!validation(tech, setTechError)) {
        chk = false;
      }
      if (!validation(companyURL, setCompanyURLError)) {
        chk = false;
      }
      if (!validation(salary, setSalaryError) || Number.isNaN(salary)) {
        chk = false;
      }
      if (chk) {
        console.log('here');
        const result = await captureToFirebase();
        try {
          console.log(`photoUrl ${photoUrl}`);
          console.log(`result ${result}`);
          if (result !== undefined) {
            console.log(result);
            employmentNotification(
              companyName,
              contents,
              tech,
              duty,
              location,
              career,
              companyURL,
              salary,
              result,
            ).then(() => {
              navigate('/');
            });
          }
        } catch (error) {
          console.log('here');
          console.error(error);
        }
      }
    },
    [companyName, contents, tech, career, salary, duty, location, companyURL, imagesState],
  );

  return (
    <>
      <Container>
        <form>
          <div className="section">
            <label className="sectionName" style={{}} htmlFor="content">
              구인 내용
            </label>
            <Input
              onChange={(e) => textChange(e, setContents)}
              multiline
              rows={7}
              placeholder="카카오 엔터프라이즈의 보안 플랫폼을 개발하고 운영하는 조직입니다. "
              disableUnderline
              className="inputCompanyName"
              id="content"
            />
            {!contentsError && <div className="validationText">구인 내용을 입력해주세요.</div>}
          </div>
          <div className="section">
            <label className="sectionName" htmlFor="skill">
              기술 스택
            </label>
            <Input
              onChange={(e) => textChange(e, setTech)}
              placeholder="Python, Go, Java, C++..."
              disableUnderline
              className="inputCompanyName"
              sx={{ height: '6vh' }}
              id="skill"
            />
            {!techError && <div className="validationText">필요한 기술을 입력해주세요.</div>}
          </div>
          <div className="section">
            <label className="sectionName" htmlFor="first-checkbox">
              직무
            </label>
            <SelectOption value={duty} setValue={setDuty} items={dutys} />
            <label className="sectionName" htmlFor="region" style={{ marginLeft: '3%' }}>
              지역
            </label>
            <SelectOption value={location} setValue={setLocation} items={locations} />
            <label className="sectionName" htmlFor="career" style={{ marginLeft: '9%' }}>
              구분
            </label>
            <SelectOption value={career} setValue={setCareer} items={careers} />
          </div>
          <div className="urlAndSalarySection">
            <div style={{ display: 'inline', width: '50%' }}>
              <label className="linkSectionName" htmlFor="companyLink">
                지원 링크
              </label>
              <Input
                onChange={(e) => textChange(e, setCompanyURL)}
                placeholder="https://readme-pro.netlify.app/"
                disableUnderline
                className="inputURL"
              />
              {!companyURLError && (
                <div className="validationText" style={{ paddingLeft: '11%' }}>
                  지원 링크를 입력해주세요.
                </div>
              )}
            </div>
            <div style={{ display: 'inline', width: '50%' }}>
              <label className="linkSectionName" htmlFor="salary">
                연봉(월급)
              </label>
              <Input
                onChange={(e) => textChange(e, setSalary)}
                placeholder="4500"
                disableUnderline
                className="inputURL"
              />
              {!salaryError && (
                <div className="validationText" style={{ marginLeft: '30%' }}>
                  연봉을 입력해주세요.
                </div>
              )}
            </div>
          </div>
          <div className="section">
            <label className="sectionName" htmlFor="companyImage">
              첨부 이미지
            </label>
            <UploadImages idx={0} />
            <UploadImages idx={1} />
            <UploadImages idx={2} />
            <UploadImages idx={3} />
          </div>
        </form>
      </Container>
      <Button
        style={{
          backgroundColor: '#FF6B6B',
          color: 'white',
          width: '15%',
          fontSize: '1.5em',
          fontWeight: '700',
          borderRadius: '20px',
          marginLeft: '42.5%',
          marginBottom: '3%',
        }}
        onClick={postSubmit}
      >
        공고 등록
      </Button>
    </>
  );
}

export default EnrollForm;
