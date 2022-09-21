import axios from 'axios';
import { ToastSuccess } from 'hooks/toastHook';

const serverApi = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 좋아요 추가
export const likePortfolio = async (userId: number, docId: number) => {
  await serverApi
    .post(`https://hsureadme.herokuapp.com/api/v1/doc/${docId}/like`, {
      memberId: userId,
    })
    .catch(() => console.log(docId));
  try {
    ToastSuccess('좋아요 추가!');
    return docId;
  } catch (error) {
    return console.log(error);
  }
};

// 좋아요 취소
export const unlikePortfolio = async (userId: number, docId: number) => {
  await serverApi
    .post(`https://hsureadme.herokuapp.com/api/v1/doc/${docId}/unlike`, {
      memberId: userId,
    })
    .catch(() => console.log(docId));
  try {
    ToastSuccess('좋아요 취소!');
    return docId;
  } catch (error) {
    return console.log(error);
  }
};

// 유저가 좋아요한 문서들 불러오기
export const getUserLikePortfolio = async (userId: number) => {
  const response = await serverApi.get(`https://hsureadme.herokuapp.com/api/v1/member/${userId}/docs/like`);
  try {
    return response.data.result;
  } catch (error) {
    return console.log(error);
  }
};
