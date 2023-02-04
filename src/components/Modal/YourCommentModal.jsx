import React, { useEffect, useRef } from 'react';
import ModalBar from './ModalBar';
import * as S from "./style";

export default function YourCommentModal({setYourCommentModal}) {

  const yourCommentModalRef= useRef();

  useEffect(()=>{
    const handler = (e)=>{
      if (yourCommentModalRef.current && !yourCommentModalRef.current.contains(e.target)) {
        setYourCommentModal(false);
      }
    }
    document.addEventListener('mousedown', handler);
  
    return () => {
      document.removeEventListener('mousedown', handler);
    }
  })
    
  return (
    <S.ModalDiv>
    <S.ModalContainer ref={yourCommentModalRef}>
      <ModalBar />
      <S.ModalListItem>신고하기</S.ModalListItem>
    </S.ModalContainer>
    </S.ModalDiv>
  )
}
