import React, { useState } from 'react';
import './styles.css';
import { InputAdornment } from '@mui/material';
import { TextField } from '@material-ui/core';
import Search from '@mui/icons-material/Search';

function Searchbar() {
  const [searchText, setSearchText] = useState('');
  const [placeHolder] = useState('제목을 입력해주세요.');
  const searchChange = (event: { target: any }) => {
    setSearchText(event.target.value);
  };
  return (
    <div style={{ marginLeft: '0px', position: 'relative', top: '5px' }}>
      <TextField
        className="inputRounded"
        placeholder={placeHolder}
        variant="outlined"
        size="small"
        onKeyUp={(e) => {
          if (e.key === 'Enter') {
            document.location.href = `https://hsureadme.herokuapp.com/api/search?where=${searchText}`;
          }
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          ),
        }}
        value={searchText}
        onChange={searchChange}
      />
    </div>
  );
}

export default Searchbar;
