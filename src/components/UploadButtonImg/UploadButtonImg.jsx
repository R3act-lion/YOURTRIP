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

    


export default function UploadButtonImg({onChangFunction}) {

  return (
    <>
    <label htmlFor="image">
    <ButtonImg/>
    <input 
    style={{display: "none"}}
    id="image"
    type='file'
    accept=".jpg, .gif, .png, .jpeg, .bmp, .tif, .heic"
    onChange={onChangFunction} />
    
    </label>
    </>
  )
}
