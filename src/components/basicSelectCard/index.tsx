import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { DocumentType, TagType } from 'types/document';
import Container from './styles';

export default function BasicSelectCard({ data }: { data: DocumentType }) {
  const [docuemntId, setDocumentId] = useState<number>(0);
  const [, setUserName] = useState('');
  const [, setProfileImg] = useState(
    'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
  );
  const [, setDocDate] = useState('');
  const [docTitle, setDocTitle] = useState<string>('');
  const [thumbnail, setThumbnail] = useState('');
  const [, setLikeCnt] = useState(0);
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

    setDocDate(`${year}년 ${month}월 ${day}일`);
    setDocTitle(title);
    setThumbnail(docUrl);
    setLikeCnt(likeCnt);
    setDocTags(tags);
  }, []);

  return (
    // TODO link url 변경 필요
    <Container>
      <Link to={`/preview/${docuemntId}`} style={{ textDecoration: 'none', color: 'black' }}>
        <div className="pofol-thumbnail-container">
          <img
            style={{ width: '100%', height: '100%', objectFit: 'fill' }}
            className="pofol-thumbnail"
            src={thumbnail}
            alt="thumbnail"
          />
        </div>
        <div className="pofol-title">{docTitle}</div>
        <div className="top-info-container">
          <div className="hashtag-container">
            {docTags.map((tag: TagType) => (
              <Link to={`search?searchtag=${tag.name.slice(1)}`} style={{ textDecoration: 'none', color: 'black' }}>
                <div style={{ color: 'gray', marginRight: '5px', fontSize: '14px', fontWeight: '600' }} key={tag.name}>
                  {tag.name}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Link>
    </Container>
  );
}
