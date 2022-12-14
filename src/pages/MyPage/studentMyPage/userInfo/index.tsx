import React, { useCallback, useState, useEffect, useRef } from 'react';
import useInput from 'hooks/useInput';
import { Container, Button, Avatar } from 'pages/MyPage/studentMyPage/userInfo/styles';
import { getUser, updateUser } from 'apis/userApi';
import { storage } from 'utils/firebase';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

function UserInfo() {
  const readmeUserInfo = localStorage.getItem('readme_userInfo');
  const [image, setImage] = useState<any>(
    'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
  );
  const [file, setFile] = useState<any>({});
  const fileInput = useRef<any>();
  const [name, onChangeName, setName] = useInput('');
  const [university, onChangeUniversity, setUniversity] = useInput('');
  const [major, onChangeMajor, setMajor] = useInput('');
  const [interests, onChangeInterests, setInterests] = useInput('');
  const userId = readmeUserInfo !== null ? JSON.parse(readmeUserInfo).id : null;
  useEffect(() => {
    async function fetchUserData() {
      const data = await getUser(userId);
      setName(data.name);
      if (!data.profileUrl) {
        setImage('https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png');
      } else {
        setImage(data.profileUrl);
      }
      setUniversity(data.university);
      setMajor(data.major);
      setInterests(data.interests);
    }
    fetchUserData();
  }, []);

  const onChangeImage = (e: any) => {
    setFile(e.target.files[0]);

    // 화면에 프로필 사진 표시
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2 && reader.result !== null) {
        setImage(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  const onSubmit = useCallback(
    (e: any) => {
      e.preventDefault();
      if (file.name === undefined) {
        updateUser(userId, name, image, university, major, interests);
      } else {
        // create a refernce to the file tp be uploaded
        const storageRef = ref(storage, file.name);
        // upload the file
        uploadBytesResumable(storageRef, file).then(() => {
          getDownloadURL(storageRef).then((url) => updateUser(userId, name, url, university, major, interests));
        });
      }
    },
    [file, image, interests, major, name, university, userId],
  );

  return (
    <Container>
      <div onClick={() => fileInput.current.click()} aria-hidden="true">
        <Avatar bgImg={image} />
      </div>

      <input
        type="file"
        style={{ display: 'none' }}
        accept="image/jpg,impge/png,image/jpeg"
        name="profile_img"
        onChange={onChangeImage}
        ref={fileInput}
      />
      <div className="section-updateName">
        <span className="inputName">이름</span>
        <div className="nickName">
          <input value={name || ''} onChange={onChangeName} style={{ width: '100%' }} />
        </div>
      </div>

      <div className="section-update">
        <div className="inputBorder university">
          <div>
            <span className="inputName">학교명</span>
            <input className="contentInput" value={university || ''} onChange={onChangeUniversity} />
          </div>
          <div>
            <span className="inputName">전공</span>
            <input className="contentInput" value={major} onChange={onChangeMajor} />
          </div>
        </div>
        <div className="inputBorder">
          <span className="inputName">관심분야</span>
          <input
            className="contentInput"
            value={interests || ''}
            onChange={onChangeInterests}
            style={{ width: '70%', textAlign: 'left' }}
          />
        </div>
      </div>
      <Button className="button-wrapper" onClick={onSubmit}>
        정보 수정
      </Button>
    </Container>
  );
}

export default UserInfo;
