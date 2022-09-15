import React, { Dispatch ,ChangeEventHandler, InputHTMLAttributes, SetStateAction, useState, useEffect } from 'react';
import { ImageBox } from './style';
import Banner from '../../assets/images/banner1.png'
import { url } from 'inspector';
export type uploadImageProps = {
   fileNames: string[],
   setFileNames: Dispatch<SetStateAction<string[]>>
}

function UploadImages({fileNames, setFileNames}:uploadImageProps) {

    const onSelectFile = (event:React.ChangeEvent<HTMLInputElement>) =>{
        const selectedFiles = (event.target as HTMLInputElement).files;
        if(fileNames.length>0) setFileNames([])
        if(selectedFiles !== null){
            const selectedFilesArray = Array.from(selectedFiles);
            const imageArray = selectedFilesArray.map((file)=> {
                return URL.createObjectURL(file);
            });
            setFileNames((previousImages)=> previousImages.concat(imageArray));
        }
    }
    return (
        <div style={{display:"inline-block", width: '80%'}}>
            <ImageBox>
                <label>
                    +Add image
                    <br />
                    <span>up to image</span>
                    <input type="file" name="images" multiple onChange={onSelectFile} accept="image/png, image/jpeg, image/webp" />
                </label>
            </ImageBox>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                    {fileNames.length>0 &&
                    fileNames.length < 5 &&
                    fileNames.map((image,index)=>{
                        return(
                            <div style={{
                                width:'20%',
                                margin: '0.5rem',
                                position: 'relative',
                                boxShadow: 'rgba(0,0,0,0.05) 0px 1px 2px 0px'
                            }}>
                                <img style={{
                                    width: '100%'
                                }}
                                src={image}></img>
                                <button
                                style={{borderRadius:'15px',backgroundColor:'white'}}
                                onClick={(evnet)=>{
                                    evnet.preventDefault();
                                    setFileNames(fileNames.filter((e)=>e !== image));
                                }}
                                >
                                    x
                                </button>
                            </div>
                        )

                    })
                    }
            </div>
        </div>
    );
}

export default UploadImages;