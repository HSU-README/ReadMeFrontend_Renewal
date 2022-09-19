import React, { Dispatch ,ChangeEventHandler, InputHTMLAttributes, SetStateAction, useState, useEffect } from 'react';
import { ImageBox } from './style';
import Banner from '../../assets/images/banner1.png'
import { url } from 'inspector';
export type uploadImageProps = {
   fileNames: string[],
   setFileNames: Dispatch<SetStateAction<string[]>>
   idx:number;
}

function UploadImages({fileNames, setFileNames,idx}:uploadImageProps) {

    const onSelectFile = (event:React.ChangeEvent<HTMLInputElement>) =>{
        const selectedFiles = (event.target as HTMLInputElement).files;
        if(fileNames.length>0) setFileNames([])
        if(selectedFiles !== null){
            const selectedFilesArray = Array.from(selectedFiles);
            const imageArray = URL.createObjectURL(selectedFilesArray[0]);
            const tmpArray = [...fileNames];
            tmpArray[idx] = imageArray;
            setFileNames(tmpArray);
        }
    }
    useEffect(() => {
    },[fileNames]);
    return (
         <ImageBox background={fileNames[idx]}>
             <label>
                <div 
                    style={{
                        visibility : `${fileNames[idx] ? 'hidden' : 'visible'}`
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