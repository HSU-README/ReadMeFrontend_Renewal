import axios from 'axios';

const serverApi = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const loginUser = async (navigate: any, email: String, password: String) => {
  await serverApi.post('https://cors-anywhere.herokuapp.com/https://hsureadme.herokuapp.com/api/v1/member/login', { email, password }).then((response) => {
    if (response.data.code === 'S200') {
      const userInfo = JSON.stringify(response.data.result);
      // const successMessage = JSON.stringify(response.data.message);

      localStorage.setItem('readme_login', 'true');
      localStorage.setItem('readme_userInfo', userInfo);

      navigate('/', {
        state: {
          isLoginSuccess: true,
        },
      });
    }
  });
};

const enrollUser = async (
  navigate: any,
  name: String,
  email: String,
  password: String,
  university: String,
  major: String,
) => {
  await serverApi
    .post('https://cors-anywhere.herokuapp.com/https://hsureadme.herokuapp.com/api/v1/member/new', {
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
