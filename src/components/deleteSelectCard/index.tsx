import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { deletePofolState, deletePofolDocIdState, openDialogState } from 'recoil/atoms';
import { useRecoilState } from 'recoil';
import closeBtn from 'assets/icons/close-button.png';
import { DocumentType, TagType } from 'types/document';
import { Container } from './styles';

export default function DeleteSelectCard({ data }: { data: DocumentType }) {
  const [documentId, setDocumentId] = useState(0);
  const [, setDeletePofolDocId] = useRecoilState(deletePofolDocIdState);
  const [documentDate, setDocumentDate] = useState('');
  const [docTitle, setDocTitle] = useState('');
  const [thumbnail, setThumbnail] = useState('');
  const [docLikeCnt, setDocLikeCnt] = useState(0);
  const [docTags, setDocTags] = useState<TagType[]>([]);

  const [hide, setHide] = useState(true);
  const [, setDeleteState] = useRecoilState(deletePofolState);
  const [, setOpenDialog] = useRecoilState(openDialogState);

  useEffect(() => {
    const { docId, title, docDate, tags, likeCnt, docUrl } = data;
    const date = docDate;
    const year = date.substring(0, 4);
    const month = date.substring(5, 7);
    const day = date.substring(8, 10);
    setDocumentId(docId);

    setDocumentDate(`${year}년 ${month}월 ${day}일`);
    setDocTitle(title);
    setThumbnail(docUrl);
    setDocLikeCnt(likeCnt);
    setDocTags(tags);
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
            setDeletePofolDocId(documentId);
            setDeleteState(true);
            setOpenDialog(true);
          }}
          aria-hidden="true"
        />
      )}

      <Link to={`preview/${documentId}`} style={{ textDecoration: 'none', color: 'black', width: '300px' }}>
        <div className="pofol-thumbnail-container">
          <img style={{ width: '100%', height: '100%' }} className="pofol-thumbnail" src={thumbnail} alt="thumbnail" />
        </div>
        <div className="pofol-title">{docTitle}</div>
        <div className="top-info-container">
          <div className="hashtag-container">
            {docTags.map((tag: TagType) => (
              <Link to={`search?searchtag=${tag.name.slice(1)}`} style={{ textDecoration: 'none', color: 'black' }}>
                <div style={{ color: 'gray', marginRight: '5px', fontSize: '14px' }} key={tag.name}>
                  {tag.name}
                </div>
              </Link>
            ))}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div className="docDate">{documentDate}</div>
            <div className="like-container">
              <img
                style={{ width: '25%', height: '25%' }}
                className="like-img"
                src={require('assets/icons/heart.png')}
                alt="like"
              />
              <div className="likeCnt">{docLikeCnt}</div>
            </div>
          </div>
        </div>
      </Link>
    </Container>
  );
}
