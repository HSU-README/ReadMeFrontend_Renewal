import React, {useState} from 'react';
import Container from './style';
import {TextField, Button, Input,} from '@mui/material';
import SelectOption, {MenuItemType} from './Select';
import UploadImages from './uploadImages';
const dutys:MenuItemType[] = [{name:"전략,기획"}, {name:"회계,재무"}, {name:"유통,물류"}, {name:"연구계발,설계"}, {name:"건축,인테리어"} , {name: "의료,보건"}, {name: "미디어"}, {name: "영상,영업관리"}, {name: "마케팅,광고,홍보"}, {name: "인사,노무"}, {name: "IT,SW"}, {name: "생산,생산관리"},{name: "토목,환경"}, {name:"교육"}, {name:"디자인"}, {name: "기타"}];
const locations:MenuItemType[] = [{name:"서울"},{name:"경기"},{name:"광주"},{name:"대구"},{name:"대전"},{name:"대구"},{name:"세종"},{name:"울산"},{name:"인천"},{name:"강원"},{name:"경북"},{name:"경남"},{name:"전남"},{name:"전북"},{name:"충남"},{name:"충북"},{name:"제주"},{name:"해외"},{name:"기타"}];
const careers:MenuItemType[] = [{name:"신입"},{name:"경력직"}];
function EnrollForm() {
    const [fileNames, setFileNames] = useState<string[]>([]);
    const[duty, setDuty] = useState('');
    const[location, setLocation] = useState('');
    const[career, setCareer] = useState('');
    return(
        <Container>
            <form>
                <div className="section">
                    <label className="sectionName">회사명</label>
                    <Input placeholder="스마일게이트" disableUnderline={true} className="inputCompanyName" sx={{height: '6vh'}}/>
                </div>
                <div className="section">
                    <label className="sectionName" style={{top: '2rem'}}>구인 내용</label>
                    <Input multiline={true} rows={7}  placeholder="스마일게이트" disableUnderline={true} className="inputCompanyName"/>
                </div>
                <div className="section">
                    <label className="sectionName">기술 스택</label>
                    <Input placeholder="Java, C++, ES6, React..." disableUnderline={true} className="inputCompanyName" sx={{height: '6vh'}}/>
                </div>
                <div className="section">
                    <label className="sectionName">직무</label>
                    <SelectOption value={duty} setValue={setDuty} items={dutys}/>
                    <label className="sectionName" >지역</label>
                    <SelectOption value={location} setValue={setLocation}  items={locations}/>
                    <label className="sectionName">구분</label>
                    <SelectOption value={career} setValue={setCareer}  items={careers}/>
                </div>
                <div className="section">
                    <label className="sectionName">지원 링크</label>
                    <Input placeholder="www.readme.com" disableUnderline={true} className="inputLink" sx={{height: '6vh'}}/>
                    <label className="sectionName">연봉(월급)</label>
                    <Input
                     placeholder="4000"
                    disableUnderline={true}
                    sx={{height: '6vh',bgcolor:'white',borderRadius:'15px',paddingLeft:'2%', width:'10%'}}
                    />
                </div>
                <div className="section">
                    <label className="sectionName">첨부 이미지</label>
                    <UploadImages fileNames={fileNames} setFileNames={setFileNames}/>
                </div>
            </form>
            <Button />
        </Container>
    );
}

export default EnrollForm;