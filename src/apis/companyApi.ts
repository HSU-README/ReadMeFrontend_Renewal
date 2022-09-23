import axios from 'axios';
import { ToastError, ToastSuccess } from 'hooks/toastHook';
import { RecruitmentType } from 'types/recruitment';

const serverApi = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 회사 공고 등록 api
export const employmentNotification = async (
  companyName: string,
  content: string,
  skillStack: string,
  jobOpening: string,
  region: string,
  division: string,
  applyLink: string,
  salary: string,
) => {
  const response: any = await serverApi.post('https://hsureadme.herokuapp.com/api/v1/recruit_post/new', {
    companyName,
    content,
    skillStack,
    jobOpening,
    region,
    division,
    applyLink,
    salary: Number(salary),
  });

  try {
    console.log(response);
    return response;
  } catch (error) {
    return console.log(error);
  }
};

// 모든 채용 정보 불러오기
export const getAllRecruitment = () => {
  const response = serverApi.get('https://hsureadme.herokuapp.com/api/v1/recruit_posts/');
  try {
    return response;
  } catch (error) {
    return console.log(error);
  }
};

// 유저 채용 정보 불러오기
export const getUserRecruitment = async (companyName: String) => {
  const response = await serverApi.get('https://hsureadme.herokuapp.com/api/v1/recruit_posts/');
  try {
    const data = response.data.result;
    const result = data.filter((recruitment: RecruitmentType) => recruitment.companyName === companyName);
    return result;
  } catch (error) {
    return console.log(error);
  }
};

// 특정 채용공고 삭제
export const deleteRecruitment = async (recruitmentId: number) => {
  const response: any = await serverApi
    .post(`https://hsureadme.herokuapp.com/api/v1/recruit_posts/delete/${recruitmentId}`, {
      recruitmentId,
    })
    .catch(() => console.log(recruitmentId));
  try {
    const successMessage = JSON.stringify(response.data.message);
    ToastSuccess(successMessage);
    return recruitmentId;
  } catch (error: any) {
    const errorMessage = JSON.stringify(error.response.data.errorMessage);
    return ToastError(errorMessage);
  }
};
