/* eslint-disable consistent-return */
import axios from 'axios';

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
<<<<<<< HEAD
  const response: any = await serverApi.post(
    'https://cors-anywhere.herokuapp.com/https://hsureadme.herokuapp.com/api/v1/recruit_post/new',
    {
      companyName,
      content,
      skillStack,
      jobOpening,
      region,
      division,
      applyLink,
      salary: Number(salary),
    },
  );
=======
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
>>>>>>> origin/main

  try {
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
  }
};

// 모든 채용 정보 불러오기
export const getAllReacuitData = () => {
<<<<<<< HEAD
  const response = serverApi.get(
    'https://cors-anywhere.herokuapp.com/https://hsureadme.herokuapp.com/api/v1/recruit_posts',
  );
=======
  const response = serverApi.get('https://hsureadme.herokuapp.com/api/v1/recruit_posts/');
>>>>>>> origin/main
  try {
    return response;
  } catch (error) {
    console.error(error);
  }
};
