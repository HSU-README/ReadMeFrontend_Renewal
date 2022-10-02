import React, { useState } from 'react';
import styled from 'styled-components';
import Search from '@mui/icons-material/Search';
import colors from 'styles/colors';

const Container = styled.div`
  width: 100%;
  height: 45px;
  border-radius: 50px;
  border: 1.5px solid;
  border-color: white;
  background-color: white;
  display: flex;
`;

const Textbar = styled.input`
  width: 100%;
  border-radius: 50px;
  border-right: 0px;
  border-top: 0px;
  border-left: 0px;
  border-bottom: 0px;
  font-weight: bold;
  font-size: 16px;
  outline: none;
`;

function Searchbar() {
  const [searchText, setSearchText] = useState('');
  const [placeHolder] = useState('제목을 입력해주세요.');
  const searchChange = (event: { target: any }) => {
    setSearchText(event.target.value);
  };
  return (
    <Container>
      <div style={{ margin: '6px', backgroundColor: 'white' }}>
        <Search fontSize="large" style={{ color: colors.primary }} />
      </div>
      <Textbar
        type="text"
        placeholder={placeHolder}
        onKeyUp={(e) => {
          if (e.key === 'Enter') {
            document.location.href = `http://localhost:3000/search?where=${searchText}`;
          }
        }}
        value={searchText}
        onChange={searchChange}
      />
    </Container>
  );
}

export default Searchbar;
