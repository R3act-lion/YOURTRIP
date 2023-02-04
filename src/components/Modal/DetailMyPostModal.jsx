import { React, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router';
import ModalBar from './ModalBar';
import * as S from "./style";

export default function DetailMyPostModal({setDetailMyPostModal}) {
  const navigate= useNavigate();
  const detailMyPostModalRef= useRef();

    useEffect(()=>{
      const handler = (e)=>{
        if (detailMyPostModalRef.current && !detailMyPostModalRef.current.contains(e.target)) {
          setDetailMyPostModal(false);
        }
      }
      document.addEventListener('mousedown', handler);
    
      return () => {
        document.removeEventListener('mousedown', handler);
      }
    })
      
    return (
      <S.ModalDiv>
      <S.ModalContainer ref={detailMyPostModalRef}>
        <ModalBar />
        <S.ModalListItem onClick={()=>{
          navigate("/")
          setDetailMyPostModal(false)}
          }>수정하기</S.ModalListItem>
      <S.ModalListItem onClick={()=>{
          navigate("/")
          }
          }>삭제하기</S.ModalListItem>

      </S.ModalContainer>
      </S.ModalDiv>
    )
}
