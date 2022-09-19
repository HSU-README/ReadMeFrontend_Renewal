import React, { useState, useCallback, useEffect } from 'react';
import { Button, Input } from '@mui/material';
import { storage } from 'utils/firebase';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import Container from './style';
import SelectOption, { MenuItemType } from './Select';
import UploadImages from './uploadImages';
import { employmentNotification } from '../../apis/company';

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
  const [fileNames, setFileNames] = useState<any[]>([]);
  const [companyName, setCompanyName] = useState('');
  const [contents, setContents] = useState('');
  const [tech, setTech] = useState('');
  const [companyURL, setCompanyURL] = useState('');
  const [salary, setSalary] = useState('');
  const [duty, setDuty] = useState('');
  const [location, setLocation] = useState('');
  const [career, setCareer] = useState('');

  const textChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, setFunction: Function) => {
    setFunction(e.target.value);
  };
  const validation = (): boolean => {
    if (
      companyName === '' ||
      contents === '' ||
      tech === '' ||
      companyURL === '' ||
      salary === '' ||
      duty === '' ||
      location === '' ||
      career === ''
    ) {
      return false;
    }
    return true;
  };

  useEffect(() => {
    console.log(fileNames);
  }, [fileNames]);

  const captureToFirebase = () => {
    // console.log('test');
    fileNames.map(async (imageName) => {
      if (imageName !== undefined) {
        const storageRef = ref(storage, imageName.name);
        console.log(`img name:${imageName}`);
        // upload the file
        const uploadTask = await uploadBytesResumable(storageRef, imageName);
        const url = await getDownloadURL(uploadTask.ref);
        console.log(url);
        return url;
      }
      return 'https://firebasestorage.googleapis.com/v0/b/fir-readme-storage.appspot.com/o/thumnail.png?alt=media&token=ce69dedd-6098-44aa-aba5-202383541bc2';
    });
  };

  const postSubmit = useCallback(
    async (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      if (!validation()) {
        alert('양식을 정확히 기입해주세요');
      } else {
        captureToFirebase();
        employmentNotification(companyName, contents, tech, duty, location, companyURL, career, salary);
      }
    },
    [companyName, contents, tech, companyURL, salary, duty, location, career],
  );

  return (
    <>
      <Container>
        <form>
          <div className="section">
            <label className="sectionName" htmlFor="companyName">
              회사명
            </label>
            <Input
              onChange={(e) => textChange(e, setCompanyName)}
              placeholder="카카오"
              disableUnderline
              className="inputCompanyName"
              sx={{ height: '6vh' }}
              id="companyName"
            />
          </div>
          <div className="section">
            <label className="sectionName" style={{ top: '2rem' }} htmlFor="content">
              구인 내용
            </label>
            <Input
              onChange={(e) => textChange(e, setContents)}
              multiline
              rows={7}
              placeholder="스마일게이트"
              disableUnderline
              className="inputCompanyName"
              id="content"
            />
          </div>
          <div className="section">
            <label className="sectionName" htmlFor="skill">
              기술 스택
            </label>
            <Input
              onChange={(e) => textChange(e, setTech)}
              placeholder="Java, C++, ES6, React..."
              disableUnderline
              className="inputCompanyName"
              sx={{ height: '6vh' }}
              id="skill"
            />
          </div>
          <div className="section">
            <label className="sectionName" htmlFor="first-checkbox">
              직무
            </label>
            <SelectOption value={duty} setValue={setDuty} items={dutys} />
            <label className="sectionName" htmlFor="region">
              지역
            </label>
            <SelectOption value={location} setValue={setLocation} items={locations} />
            <label className="sectionName" htmlFor="career">
              구분
            </label>
            <SelectOption value={career} setValue={setCareer} items={careers} />
          </div>
          <div className="section">
            <label className="sectionName" htmlFor="companyLink">
              지원 링크
            </label>
            <Input
              onChange={(e) => textChange(e, setCompanyURL)}
              placeholder="www.readme.com"
              disableUnderline
              className="inputURL"
              sx={{ height: '6vh' }}
            />
            <label className="sectionName" htmlFor="salary">
              연봉(월급)
            </label>
            <Input
              onChange={(e) => textChange(e, setSalary)}
              placeholder="4000"
              disableUnderline
              sx={{ height: '6vh', bgcolor: 'white', borderRadius: '15px', paddingLeft: '2%', width: '10%' }}
            />
          </div>
          <div className="section">
            <label className="sectionName" htmlFor="companyImage">
              첨부 이미지
            </label>
            <UploadImages fileNames={fileNames} setFileNames={setFileNames} idx={0} />
            <UploadImages fileNames={fileNames} setFileNames={setFileNames} idx={1} />
            <UploadImages fileNames={fileNames} setFileNames={setFileNames} idx={2} />
            <UploadImages fileNames={fileNames} setFileNames={setFileNames} idx={3} />
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
          marginLeft: '38rem',
          marginBottom: '3em',
          height: '3rem',
        }}
        onClick={postSubmit}
      >
        공고 등록
      </Button>
    </>
  );
}

export default EnrollForm;
