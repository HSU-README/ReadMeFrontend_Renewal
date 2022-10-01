import { atom } from 'recoil';

// 테이블 state
export const chartState = atom({
  key: 'chartState',
  default: new Array(36).fill(''),
});

// 문서 저장시 태그 state
export const tagsState = atom({
  key: 'tagsState',
  default: '',
});

// 문서 삭제 state
export const deletePofolState = atom({
  key: 'deletePofolState',
  default: false,
});

// 삭제 문서 ID state
export const deletePofolDocIdState = atom({
  key: 'deletePofolDocIdState',
  default: 0,
});

// 채용공고 삭제 state
export const deleteRecruitmentState = atom({
  key: 'deleteRecruitmentState',
  default: false,
});

// 삭제 채용공고 ID state
export const deleteRecruitmentIdState = atom({
  key: 'deleteRecruitmentIdState',
  default: 0,
});

// 나의 포트폴리오 state
export const userPortfolioState = atom({
  key: 'userPortfolioState',
  default: [],
});

// 나의 채용공고 state
export const userRecruitmentState = atom({
  key: 'userRecruitmentState',
  default: [],
});

// 문서 삭제창 open state
export const openDialogState = atom({
  key: 'openDialogState',
  default: false,
});

// 문서 좋아요 state
export const likeState = atom({
  key: 'likeState',
  default: false,
});

// 채용공고 등록시 첨부이미지 state
export const recruitmentImagesState = atom({
  key: 'recruitmentImagesState',
  default: <any>[],
});
