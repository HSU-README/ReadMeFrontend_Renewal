export type DocumentType = {
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

export type TagType = {
  name: string;
};

export type LikeType = {
  id: number;
  memberId: BigInt;
  docId: BigInt;
};
