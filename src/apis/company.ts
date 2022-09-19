import { StringGradients } from 'antd/lib/progress/progress';
import axios from 'axios';
import { ToastSuccess } from 'hooks/toastHook';

const serverApi = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

//회사 공고 등록 api
export const employmentNotification = 
  async (
    companyName:string, 
    content:string, 
    skillStack:string, 
    jobOpening:string, 
    region:string, 
    division: string,
    applyLink:string, 
    salary:string
    ) => {
  const response:any = await serverApi.post('api/v1/recruit_post/new', {
    companyName,
    content,
    skillStack,
    jobOpening,
    region,
    division,
    applyLink,
    salary: Number(salary)
  })

  try{
    console.log(response);
    return response
  }catch(error) {
    console.error(error);
  }
};

//모든 채용 정보 불러오기
export const getAllReacuitData = () =>{
  const response = serverApi.get('api/v1/recruit_posts')
  try{
    return response
  }catch(error) {
    console.error(error);
  }
}
