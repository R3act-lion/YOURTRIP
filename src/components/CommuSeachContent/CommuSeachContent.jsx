import React from 'react'
import CommuComentButton from '../CommuComentButton/CommuComentButton'
import CommuHeartButton from '../CommuHeartButton/CommuHeartButton'
import CommuSeachImg from './CommuSeachImg'
import * as S from "./style"


export default function CommuSeachContent({item : title,content,date}) {
  return (
    <S.Container>
        <S.ComContact>
        <S.SearchTitle>{title}</S.SearchTitle>
        <S.ContactText>{content}</S.ContactText> 
        <CommuSeachImg/>
      <S.ContactEtc>
        <CommuHeartButton/>
        <S.AddText>58</S.AddText>
        <CommuComentButton/>
        <S.AddText>12</S.AddText>
      </S.ContactEtc>
      <S.DateText>{date}</S.DateText>
      </S.ComContact>
      </S.Container>    
  )
}
