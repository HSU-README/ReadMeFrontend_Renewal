import React, { useEffect, useRef, useState } from 'react';
import { likePortfolio, unlikePortfolio, getUserLikePortfolio } from 'apis/likeApi';
import { DocumentType } from 'types/document';

interface IProps {
  isEditable: boolean;
  userId: number;
  docId: number;
}

export default function LikeButton({ isEditable, userId, docId }: IProps) {
  const thumbsImageRef = useRef<HTMLImageElement>(null);
  const [like, setLike] = useState(false);

  useEffect(() => {
    async function fetchUserLikePortfolioData() {
      const datas = await getUserLikePortfolio(userId);
      await datas.map((data: DocumentType) => (data.docId === docId ? setLike(true) : console.log('not same docId')));
    }
    fetchUserLikePortfolioData();
  }, []);

  if (!isEditable) {
    if (like) {
      return (
        <img
          alt="unlike"
          ref={thumbsImageRef}
          onClick={() => {
            setLike(false);
            unlikePortfolio(userId, docId);
          }}
          style={{ width: '35px', height: '35px', marginLeft: '100px' }}
          src={require('assets/icons/likeon.png')}
          aria-hidden="true"
        />
      );
    }
    return (
      <img
        alt="like"
        ref={thumbsImageRef}
        onClick={() => {
          setLike(false);
          likePortfolio(userId, docId);
        }}
        style={{ width: '35px', height: '35px', marginLeft: '100px' }}
        src={require('assets/icons/likeoff.png')}
        aria-hidden="true"
      />
    );
  }
  return <div />;
}
