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

  const [thumbnail] = useState(
    'https://firebasestorage.googleapis.com/v0/b/fir-readme-storage.appspot.com/o/companyDefaultImage.jpeg?alt=media&token=33dddfd1-b803-4768-ac6b-9b41f2646bf6',
  );
  // const [docTags, setDocTags] = useState<TagType[]>([]);

  const [hide, setHide] = useState(true);
  const [, setDeleteState] = useRecoilState(deleteRecruitmentState);
  const [, setOpenDialog] = useRecoilState(openDialogState);

  useEffect(() => {
    const { id, companyName, content } = data;
    setRecruitmentId(id);
    setUserName(companyName);
    // if (designerUrl !== '') {
    //   setProfileImg(designerUrl);
    // }
    setRecruitmentContent(content);

    // setThumbnail(docUrl);
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
          style={{
            width: '45px',
            height: '45px',

            position: 'absolute',
            left: '205px',
            top: '10px',
            float: 'right',
            zIndex: '999',
          }}
          onClick={() => {
            setDeleteRecruitmentId(recruitmentId);
            setDeleteState(true);
            setOpenDialog(true);
          }}
          aria-hidden="true"
        />
      )}

      <Link to={`companyinfo/${recruitmentId}`} style={{ textDecoration: 'none', color: 'black', width: '300px' }}>
        <div className="pofol-thumbnail-container">
          <img style={{ width: '100%', height: '100%' }} className="pofol-thumbnail" src={thumbnail} alt="thumbnail" />
        </div>
        <div className="company-title">{userName}</div>
        <div className="recruitment-content">
          {recruitmentContent.length > 15 ? (
            <span>{recruitmentContent.slice(0, 17)} ...</span>
          ) : (
            <span>recruitmentContent</span>
          )}
        </div>
      </Link>
    </Container>
  );
}
