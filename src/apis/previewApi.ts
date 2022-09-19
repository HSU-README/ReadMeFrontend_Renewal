import axios from 'axios';

const serverApi = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const getPreview = async (docId: string) => {
  const response = await serverApi.get(`https://cors-anywhere.herokuapp.com/https://hsureadme.herokuapp.com/api/v1/doc/${docId}/preview`);
  console.log('response :', response);
  try {
    return response.data.result;
  } catch (error) {
    return console.log(error);
  }
};

export default getPreview;
