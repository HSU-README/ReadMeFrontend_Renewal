// 문서 타입
export type DocumentType = {
  jobOpenning: string;
  docId: number;
  title: string;
  docDate: String;
  visibility: string;
  tags: TagType[];
  likes: LikeType[];
  likeCnt: number;
  docUrl: string;
  designer: string;
  designerUrl: string;
};

export type RecruitType = {
  companyName: string;
  content: string;
  skillStack: string[];
  jobOpening: string;
  region: string;
  division: string;
  applyLink: string;
  salary: Number;
  firebaseUrl: string;
};

// 태그 타입
export type TagType = {
  name: string;
};

// 좋아요 타입
export type LikeType = {
  id: number;
  memberId: BigInt;
  docId: BigInt;
};

export type ComponentType = {
  type: string;
  x: number;
  y: number;
  width: string;
  height: string;
  imgUrl?: string;
  iconUrl?: string;
  textContent?: string;
  tableCol?: number;
  tableRow?: number;
  zindex?: number;
  tableContents?: TableType[];
};

// 컴포넌트 내 테이블 타입
export type TableType = {
  row: number;
  column: number;
  content: string;
};
