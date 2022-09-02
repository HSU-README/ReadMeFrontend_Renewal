import React, { Dispatch, SetStateAction } from 'react';
import { FormControl, Input } from '@mui/material';

interface titleProps {
  isEditable: boolean;
  title: string;
  setTitle: Dispatch<SetStateAction<string>>;
}

function TitleForm({ isEditable, title, setTitle }: titleProps) {
  return (
    <FormControl variant="standard" style={{ marginLeft: '90px', width: '50%' }}>
      <Input
        value={title}
        placeholder="제목을 입력해주세요."
        style={{
          backgroundColor: 'white',
          border: '1px solid black',
          borderRadius: '5px',
          padding: '1%',
        }}
        onChange={(e) => {
          if (isEditable) {
            if (title.length <= 13) {
              setTitle(e.target.value);
            } else {
              alert('제목은 최대 13글자까지 입력 가능합니다.');
              setTitle(title.substr(0, 12));
            }
          } else {
            alert('미리보기에서는 변경할 수 없습니다.');
          }
        }}
      />
    </FormControl>
  );
}

export default TitleForm;
