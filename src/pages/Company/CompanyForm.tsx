import React, {useEffect, useState} from 'react';
import Container, {ImageBox} from './style';
import Banner from '../../assets/images/banner1.png';
function CompanyForm() {
    const [fileNames, setFileNames] = useState<string[]>([]);
    const [companyName, setCompanyName] = useState('');
    const [contents, setContents] = useState('');
    const [tech, setTech] = useState('');
    const [companyURL, setCompanyURL] = useState('');
    const [salary, setSalary] = useState('');
    const[duty, setDuty] = useState('');
    const[location, setLocation] = useState('');
    const[career, setCareer] = useState('');
    const textChange = (e:React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>, setFunction:Function) => {
        setFunction(e.target.value);
    }
    return(
        <Container>
            <form>
                <div 
                 style={{
                    border:'1px solid black',
                    borderRadius:'20px',
                    width:'67rem',
                    marginBottom:'3%'
                 }}
                >
                    <ImageBox background={Banner} />
                    <ImageBox background={Banner} />
                    <ImageBox background={Banner} />
                    <ImageBox background={Banner} />
                </div>
                <div className="section">
                    <label className="sectionName">회사명</label>
                    <div
                     className="inputCompanyName">테스트</div>
                </div>
                <div className="section">
                    <label className="sectionName" style={{bottom:'3rem'}}>구인 내용</label>
                    <div
                     placeholder="스마일게이트"
                     style={{
                        height:' 6rem'
                     }}
                     className="inputCompanyName"/>
                </div>
                <div className="section">
                    <label className="sectionName">기술 스택</label>
                    <div
                     className="inputCompanyName"></div>
                </div>
                <div className="section">
                    <label className="sectionName">직무</label>
                    <div
                     className="inputCompanyName2">개발
                    </div>
                     <label className="sectionName">구분</label>
                     <div
                     className="inputCompanyName2">개발
                    </div>
                </div>
                <div className="section">
                    <label className="sectionName">지역</label>
                    <div
                     className="inputCompanyName2">개발
                    </div>
                     <label className="sectionName">연봉(월급)</label>
                     <div
                     className="inputCompanyName2">개발
                    </div>
                </div>
                <div className="section">
                    <label className="sectionName">지원 링크</label>
                    <a>
                        <div
                        className="inputCompanyName" style={{color:'blue'}}>www.naver.com
                        </div>
                    </a>
                </div>
            </form>
        </Container>
    );
}

export default CompanyForm;