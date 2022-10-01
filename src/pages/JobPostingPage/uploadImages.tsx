import React, { useEffect, useState } from 'react';
import { recruitmentImagesState } from 'recoil/atoms';
import { useRecoilState } from 'recoil';
import { ImageBox } from './style';

export type uploadImageProps = {
  idx: number;
};

function UploadImages({ idx }: uploadImageProps) {
  const [imagesState, setImagesState] = useRecoilState<any[]>(recruitmentImagesState);
  const [imageThumbnail, setImageThumbnail] = useState('');
  const onSelectFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = (event.target as HTMLInputElement).files;
    if (imagesState.length > 0) setImagesState([]);
    if (selectedFiles !== null) {
      const selectedFilesArray = Array.from(selectedFiles);
      const imageArray = selectedFilesArray[0];
      setImageThumbnail(URL.createObjectURL(imageArray));
      const tmpArray = [...imagesState];
      tmpArray[idx] = imageArray;
      setImagesState(tmpArray);
    }
  };
  useEffect(() => {}, [imageThumbnail]);
  return (
    <ImageBox background={imageThumbnail}>
      <label>
        <div
          style={{
            visibility: `${imageThumbnail ? 'hidden' : 'visible'}`,
          }}
        >
          +Add image
          <br />
          <span>up to image</span>
        </div>
        <input type="file" name="images" multiple onChange={onSelectFile} accept="image/png, image/jpeg, image/webp" />
      </label>
    </ImageBox>
  );
}

export default UploadImages;
