import React from 'react'
import styled from 'styled-components'
import uploadbutton from '../../assets/images/btn-write.svg'
import { useNavigate } from 'react-router-dom'

const UploadButton = styled.button`
  background-image:url(${uploadbutton});
  width:50px;
  height:50px;
  display: block;
  position: fixed;
  bottom: 11%;
  right: 600px;
  border: none;
  border-radius: 50%;
  background-color: #FFFFFF;
  cursor: pointer;
  z-index: 10;
`

export default function CommuWritingButton(){
  const navigate= useNavigate();

  return (
    <><UploadButton onClick={ ()=>{navigate('/community/upload')} }/></>
  )
  }
