import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { DocumentType, TagType } from 'types/document';
import { Container } from './styles';

export default function MainSelectCard({ data }: { data: DocumentType }) {
  const [documentId, setDocumentId] = useState(0);
  const [userName, setUserName] = useState('');
  const [profileImg, setProfileImg] = useState(
    'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
  );
  const [documentDate, setDocumentDate] = useState('');
  const [docTitle, setDocTitle] = useState('');
  const [thumbnail, setThumbnail] = useState('');
  const [docLikeCnt, setDocLikeCnt] = useState(0);
  const [docTags, setDocTags] = useState<TagType[]>([]);

  useEffect(() => {
    const { docId, title, docDate, tags, likeCnt, docUrl, designer, designerUrl } = data;
    const date = docDate;
    const year = date.substring(0, 4);
    const month = date.substring(5, 7);
    const day = date.substring(8, 10);
    setDocumentId(docId);
    setUserName(designer);
    if (designerUrl !== '') {
      setProfileImg(designerUrl);
    }
    setDocumentDate(`${year}년 ${month}월 ${day}일`);
    setDocTitle(title);
    setThumbnail(docUrl);
    setDocLikeCnt(likeCnt);
    setDocTags(tags);
  }, [data]);

  return (
    // TODO link url 변경 필요
    <Container>
      <Link
        to={localStorage.getItem('readme_userInfo') != null ? `/preview/${documentId}` : '/login'}
        onClick={() => localStorage.getItem('readme_userInfo') == null && alert('로그인 후 이용 가능합니다.')}
        style={{ textDecoration: 'none', color: 'black', width: '300px' }}
      >
        <div className="pofol-thumbnail-container">
          <img style={{ width: '100%', height: '100%' }} className="pofol-thumbnail" src={thumbnail} alt="thumbnail" />
        </div>
        <div className="pofol-title">{docTitle}</div>
        <div className="top-info-container">
          <div className="hashtag-container">
            {docTags.map((tag: TagType) => (
<<<<<<< HEAD
              <Link
                to={`https://cors-anywhere.herokuapp.com/https://hsureadme.herokuapp.com/search?searchtag=${tag.name.slice(
                  1,
                )}`}
                style={{ textDecoration: 'none', color: 'black' }}
              >
=======
              <Link to={`search?searchtag=${tag.name.slice(1)}`} style={{ textDecoration: 'none', color: 'black' }}>
>>>>>>> origin/main
                <div style={{ color: 'gray', marginRight: '5px', fontSize: '14px' }} key={tag.name}>
                  {tag.name}
                </div>
              </Link>
            ))}
          </div>
          <div className="docDate">{documentDate}</div>
        </div>

        <hr style={{ margin: '0px auto', color: 'lightgrey' }} />
        <div className="bottom-info-container">
          <div className="user-info-container">
            <div className="profile-image-container">
              <img
                style={{ width: '30px', height: '30px', objectFit: 'contain', borderRadius: '50%' }}
                className="profile-image"
                src={profileImg}
                alt="thumbnail"
              />
            </div>
            <div className="user-name">{userName}</div>
          </div>
          <div className="like-container">
            <img
              style={{ width: '20px', height: '20px' }}
              className="like-img"
              src={require('assets/icons/heart.png')}
              alt="like"
            />
            <div className="likeCnt">{docLikeCnt}</div>
          </div>
        </div>
      </Link>
    </Container>
  );
}
