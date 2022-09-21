import axios from 'axios';

const serverApi = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const loginUser = async (navigate: any, email: String, password: String) => {
<<<<<<< HEAD
  await serverApi
    .post('https://cors-anywhere.herokuapp.com/https://hsureadme.herokuapp.com/api/v1/member/login', {
      email,
      password,
    })
    .then((response) => {
      if (response.data.code === 'S200') {
        const userInfo = JSON.stringify(response.data.result);
        // const successMessage = JSON.stringify(response.data.message);
=======
  await serverApi.post('https://hsureadme.herokuapp.com/api/v1/member/login', { email, password }).then((response) => {
    if (response.data.code === 'S200') {
      const userInfo = JSON.stringify(response.data.result);
      // const successMessage = JSON.stringify(response.data.message);
>>>>>>> origin/main

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
  memberType: String,
) => {
  await serverApi
    .post('https://hsureadme.herokuapp.com/api/v1/member/new', {
      name,
      email,
      password,
      university,
      major,
      memberType,
    })
    .then(() => {
      navigate('/', {
        state: {
          isSignUpSuccess: true,
        },
      });
    })
    .catch((err) => {
      if (err.response.data.errorCode === 'SI001') {
        alert('이미 존재하는 이름입니다');
      } else if (err.response.data.errorCode === 'SI002') {
        alert('이미 존재하는 이메일입니다.');
      }
    });
};

export default enrollUser;
