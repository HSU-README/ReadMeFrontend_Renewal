import React, { useContext, useRef } from 'react';
import { ICanvasComponent } from 'types/canvas';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { storage } from 'utils/firebase';
import { CanvasContext } from '../canvasContainer';

function ImageElement(props: ICanvasComponent) {
  const { content, id } = props;
  const { actions } = useContext(CanvasContext);
  const uploadRef = useRef<HTMLInputElement>(null);

  const getBase64 = (file: File) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(file);
    });

  const getImageDimensions = async (file: string): Promise<{ [key: string]: number }> =>
    new Promise((resolved) => {
      const i = new Image();
      i.onload = () => {
        resolved({
          w: i.width,
          h: i.height,
          nw: i.naturalWidth,
          nh: i.naturalHeight,
        });
      };
      i.src = file;
    });

  const getAdjustedDimenstions = (width: number, height: number, resultWidth: number) => {
    const ratio = width / height;
    return { calcWidth: resultWidth, calcHeight: resultWidth / ratio };
  };

  const imageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e?.target?.files?.[0];
    if (file) {
      const storageRef = ref(storage, file.name);
      // upload the file
      const uploadTask = uploadBytesResumable(storageRef, file);

      const imageUrl: any = await uploadTask.then(() => getDownloadURL(uploadTask.snapshot.ref));

      const base64 = (await getBase64(file)) as string;
      const imageDimensions: {
        [key: string]: number;
      } = await getImageDimensions(base64);

      const { calcWidth } = getAdjustedDimenstions(imageDimensions?.nw, imageDimensions?.nh, 150);
      const { calcHeight } = getAdjustedDimenstions(imageDimensions?.nw, imageDimensions?.nh, 150);
      actions?.updateCanvasData({
        id,
        content: imageUrl.toString(),
        dimension: {
          width: `${calcWidth || 0}`.replace('px', ''),
          height: parseInt(`${calcHeight || 0}`, 10)
            .toString()
            .replace('px', ''),
        },
      });
    }
  };
  const triggerUpload = () => {
    const element = uploadRef?.current;
    if (element) {
      element.click();
    }
  };

  const renderUploadContent = () => (
    <>
      <div className="image-upload-container" onClick={triggerUpload} aria-hidden="true">
        <div>Upload Image</div>
      </div>
      <input
        ref={uploadRef}
        type="file"
        id="imageFile"
        name="imageFile"
        accept=".jpg, .png, .jpeg"
        onChange={imageUpload}
      />
    </>
  );

  const renderImage = () => (
    <div
      style={{
        backgroundImage: `url(${content})`,
        backgroundSize: 'cover',
        width: '100%',
        height: '100%',
        backgroundRepeat: 'no-repeat',
      }}
    />
  );

  return !content ? renderUploadContent() : renderImage();
}

export default ImageElement;
