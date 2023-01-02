import axios from 'axios'
import React from 'react'
import styled from 'styled-components'
import UploadButton from '../../assets/images/btn-upload-img-fill.svg' 

const ButtonImg = styled.div`
    background-image: url(${UploadButton});
    background-repeat: no-repeat;
    border: 0;
    background-size: cover;
    width:50px;
    height:50px;
    cursor: pointer;
    position: absolute;
    top:70px;
    left:70px;
    `


    
const imgAxios = axios.create({
   baseURL: 'https://mandarin.api.weniv.co.kr',
   headers: { 'Content-type': 'multipart/form-data' },
 });


export default function UploadButtonImg({stateFunc}) {
  
   const submitImg =  async (e) => {
    const value = e.target.files[0]
    console.log(value)
    const formData = new FormData();
  
    formData.append('image', value);

    const response = await imgAxios.post('/image/uploadfile',formData);
    console.log(response.data.filename);
    stateFunc(`https://mandarin.api.weniv.co.kr/${response.data.filename}`);
  }

  
  return (
    <>
    <label htmlFor="image">
    <ButtonImg/>
    <input 
    style={{display: "none"}}
    id="image"
    type='file'
    accept=".jpg, .gif, .png, .jpeg, .bmp, .tif, .heic"
    onChange={submitImg}
    />
    
    </label>
    </>
  )
}
