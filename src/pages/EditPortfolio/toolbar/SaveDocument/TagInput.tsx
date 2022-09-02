import React, { Dispatch, SetStateAction, useState } from 'react';
import { TextField, Button } from '@mui/material';

interface TagInputProps {
  tagsArray: string[];
  setTagsArray: Dispatch<SetStateAction<string[]>>;
}

function TagInput({ tagsArray, setTagsArray }: TagInputProps) {
  const [tagText, setTagText] = useState('');
  return (
    <div>
      <div>
        {tagsArray.map((data) => (
          <Button
            style={{ minWidth: '50px', marginTop: '5px', padding: '0px', marginBottom: '5px', color: 'black' }}
            key={data}
            onClick={() => {
              if (window.confirm(`${data}태그를 삭제 하시겠어요?`)) {
                setTagsArray(tagsArray.filter((it) => it !== data));
              }
            }}
          >
            {data}
          </Button>
        ))}
      </div>
      <TextField
        id="outlined-basic"
        label="태그"
        placeholder="태그를 입력해주세요."
        value={tagText}
        variant="outlined"
        size="small"
        style={{ marginTop: '15px', width: '100%' }}
        onKeyPress={(e) => {
          console.log(e);
          if (tagsArray.length < 4) {
            if (e.key === 'Enter') {
              const tmpText = tagText.split('\n');
              const sendText = `#${tmpText}`;
              setTagText('');
              setTagsArray([...tagsArray, sendText]);
            }
          } else {
            alert('태그는 4개까지 선택 가능합니다.');
          }
        }}
        onChange={(e) => {
          setTagText(e.target.value);
        }}
      />
    </div>
  );
}

export default TagInput;
