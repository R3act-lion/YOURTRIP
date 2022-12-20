import React from 'react'
import styled from 'styled-components'
import uploadbutton from '../../assets/images/btn-upload-img-fill.svg'

const ImgInput = styled.button`
    background-image: url(${uploadbutton});
    background-repeat: no-repeat;
    border: 0;
    background-size: cover;
    width:50px;
    top:90%;
    height:50px;
    position:fixed;
    right:20%;
    background-color: #FFFFFF;
    cursor: pointer;
`


export default function UploadImgButton() {
  return (
    <>
    <ImgInput/>
    </>
  )
}
