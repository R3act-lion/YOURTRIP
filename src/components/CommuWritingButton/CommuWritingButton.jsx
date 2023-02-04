import React from 'react'
import { useNavigate } from 'react-router-dom'
import * as S from "./style"

export default function CommuWritingButton(){
  const navigate= useNavigate();

  return (
    <S.UploadButton onClick={ ()=>{navigate('/community/upload')} }/>
  )
  }
