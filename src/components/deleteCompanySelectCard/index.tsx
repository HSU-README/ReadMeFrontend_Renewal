import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { deleteRecruitmentState, deleteRecruitmentIdState, openDialogState } from 'recoil/atoms';
import { useRecoilState } from 'recoil';
import closeBtn from 'assets/icons/close-button.png';
import { RecruitmentType } from 'types/recruitment';
import { Container } from './styles';

export default function DeleteCompanySelectCard({ data }: { data: RecruitmentType }) {
  const [recruitmentId, setRecruitmentId] = useState(0);
  const [, setDeleteRecruitmentId] = useRecoilState(deleteRecruitmentIdState);
  const [userName, setUserName] = useState('');
  const [recruitmentContent, setRecruitmentContent] = useState('');
  const [recruitmentSkill, setRecruitmentSkill] = useState('');
  const [recruitmentRegion, setRecruitmentRegion] = useState('');
  const [recruitementCareer, setRecruitementCareer] = useState('');
  const [recruitementDivision, setRecruitementDivision] = useState('');
  const [thumbnail] = useState(
    'https://firebasestorage.googleapis.com/v0/b/fir-readme-storage.appspot.com/o/companyDefaultImage.jpeg?alt=media&token=33dddfd1-b803-4768-ac6b-9b41f2646bf6',
  );

  const [hide, setHide] = useState(true);
  const [, setDeleteState] = useRecoilState(deleteRecruitmentState);
  const [, setOpenDialog] = useRecoilState(openDialogState);

  useEffect(() => {
    const { id, companyName, content, jobOpening, region, skillStack, division } = data;
    setRecruitmentId(id);
    setUserName(companyName);
    setRecruitmentSkill(skillStack);
    setRecruitmentContent(content);
    setRecruitmentRegion(region);
    setRecruitementCareer(jobOpening);
    setRecruitementDivision(division);
    console.log(data);
  }, [data]);

  return (
    // TODO link url 변경 필요
    <Container
      hide={hide}
      onMouseEnter={() => {
        setHide(false);
      }}
      onMouseLeave={() => {
        setHide(true);
      }}
    >
      {hide ? (
        <div />
      ) : (
        <img
          className="deleteImg"
          alt="delete"
          src={closeBtn}
          onClick={() => {
            setDeleteRecruitmentId(recruitmentId);
            setDeleteState(true);
            setOpenDialog(true);
          }}
          aria-hidden="true"
        />
      )}

      <Link to={`/companyinfo/${recruitmentId}`} style={{ textDecoration: 'none', color: 'black', width: '300px' }}>
        <div className="pofol-thumbnail-container">
          <img style={{ width: '100%', height: '100%' }} className="pofol-thumbnail" src={thumbnail} alt="thumbnail" />
        </div>
        <div className="company-title">{userName}</div>
        <div className="recruitment-content">
          {recruitmentContent.length > 10 ? (
            <span>{recruitmentContent.slice(0, 11)} ...</span>
          ) : (
            <span>{recruitmentContent}</span>
          )}
        </div>
        <div className="top-info-container">
          <div className="hashtag-container">
            <div style={{ color: 'gray', marginRight: '5px', fontSize: '14px' }}>#{recruitmentRegion}</div>
            <div style={{ color: 'gray', marginRight: '5px', fontSize: '14px' }}>#{recruitementDivision}</div>
            <div style={{ color: 'gray', marginRight: '5px', fontSize: '14px' }}>#{recruitmentSkill}</div>
            <div style={{ color: 'gray', marginRight: '5px', fontSize: '14px' }}>#{recruitementCareer}</div>
          </div>
        </div>
      </Link>
    </Container>
  );
}
