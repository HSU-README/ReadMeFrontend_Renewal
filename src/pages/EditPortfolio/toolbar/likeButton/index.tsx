import React, { useEffect, useRef } from 'react';
import { getUserLikePortfolio, likePortfolio, unlikePortfolio } from 'apis/likeApi';
import { likeState } from 'recoil/atoms';
import { useRecoilState } from 'recoil';
import { DocumentType } from 'types/document';

interface IProps {
  isEditable: boolean;
  userId: number;
  docId: number;
}

export default function LikeButton({ isEditable, userId, docId }: IProps) {
  const thumbsImageRef = useRef<HTMLImageElement>(null);
  const [like, setLike] = useRecoilState(likeState);

  useEffect(() => {
    async function fetchUserLikePortfolioData() {
      const datas = await getUserLikePortfolio(userId);
      await datas.map((data: DocumentType) => (data.docId === Number(docId) ? setLike(true) : ''));
    }
    fetchUserLikePortfolioData();
  }, [docId, setLike, userId]);

  if (!isEditable) {
    if (like) {
      return (
        <img
          alt="make-unlike"
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
        alt="make-like"
        ref={thumbsImageRef}
        onClick={() => {
          setLike(true);
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
