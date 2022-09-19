import React, { Dispatch, SetStateAction, useState } from 'react';
import { ImageBox } from './style';

export type uploadImageProps = {
  fileNames: File[];
  setFileNames: Dispatch<SetStateAction<File[]>>;
  idx: number;
};

function UploadImages({ fileNames, setFileNames, idx }: uploadImageProps) {
  const [fileImages, setFileImages] = useState<string[]>([]);
  const onSelectFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = (event.target as HTMLInputElement).files;
    if (fileNames.length > 0) {
      setFileNames([]);
      setFileImages([]);
    }
    if (selectedFiles !== null) {
      const selectedFilesArray = Array.from(selectedFiles);
      const imageArray = URL.createObjectURL(selectedFilesArray[0]);
      const imageUrlArray = selectedFilesArray[0];
      const tmpArray = [...fileNames];
      const tmpImageArray = [...fileImages];
      tmpArray[idx] = imageUrlArray;
      tmpImageArray[idx] = imageArray;
      setFileNames(tmpArray);
      setFileImages(tmpImageArray);
    }
  };

  return (
    <ImageBox background={fileImages[idx]}>
      <label>
        <div
          style={{
            visibility: `${fileNames[idx] ? 'hidden' : 'visible'}`,
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
