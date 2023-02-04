import axios from 'axios';
import * as S from "./style";
    
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
    <S.ButtonImg/>
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
