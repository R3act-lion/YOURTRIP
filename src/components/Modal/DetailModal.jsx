import React, { useEffect, useRef } from 'react';
import ModalBar from './ModalBar';
import * as S from "./style";

export default function DetailModal({setDetailModal}) {

  const modalRef= useRef();

  useEffect(()=>{
    const handler = (e)=>{
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setDetailModal(false);
      }
    }
    document.addEventListener('mousedown', handler);
  
    return () => {
      document.removeEventListener('mousedown', handler);
    }
  })
    
  return (
    <S.ModalDiv>
    <S.ModalContainer ref={modalRef}>
      <ModalBar />
      <S.ModalListItem>신고하기</S.ModalListItem>
    </S.ModalContainer>
    </S.ModalDiv>
  )
}
