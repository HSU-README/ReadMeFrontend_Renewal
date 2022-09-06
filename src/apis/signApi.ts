import axios from 'axios';

const serverApi = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const enrollUser = async (
  navigate: any,
  name: String,
  email: String,
  password: String,
  university: String,
  major: String,
) => {
  await serverApi
    .post('https://hsureadme.herokuapp.com/api/v1/member/new', {
      name,
      email,
      password,
      university,
      major,
    })
    .then(() => {
      navigate('/', {
        state: {
          isSignUpSuccess: true,
        },
      });
    })
    .catch((err) => {
      console.error(err);
    });
};

export default enrollUser;
