import axios from 'axios';
import { ToastError, ToastSuccess } from 'hooks/toastHook';

const serverApi = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getUser = async (userId: number) => {
  const response = await serverApi.get(`api/v1/member/${userId}`);
  try {
    return response.data.result;
  } catch (error) {
    return console.log(error);
  }
};

export const updateUser = async (
  userId: string,
  name: string,
  image: string,
  university: string,
  major: string,
  interests: string,
) => {
  const response = await serverApi.put(`api/v1/member/${userId}`, {
    name,
    profileUrl: image || '',
    university,
    major,
    interests: interests || '',
  });
  try {
    console.log(name);
    const successMessage = JSON.stringify(response.data.message);
    ToastSuccess(successMessage);
  } catch (error: any) {
    const errorMessage = JSON.stringify(error.response.data.errorMessage);
    ToastError(errorMessage);
  }
};
