import { React, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router';
import ModalBar from './ModalBar';
import * as S from "./style";

export default function MyPostModal({setMyPostModal}) {
  const navigate= useNavigate();
  const myPostModalRef= useRef();

    useEffect(()=>{
      const handler = (e)=>{
        if (myPostModalRef.current && !myPostModalRef.current.contains(e.target)) {
          setMyPostModal(false);
        }
      }
      document.addEventListener('mousedown', handler);
    
      return () => {
        document.removeEventListener('mousedown', handler);
      }
    })
      
    return (
      <S.ModalDiv>
      <S.ModalContainer ref={myPostModalRef}>
        <ModalBar />
        <S.ModalListItem onClick={()=>{
          navigate("/mypost")
          setMyPostModal(false)}
          }>내가 작성한 글</S.ModalListItem>
      
        </S.ModalContainer>
      </S.ModalDiv>
    )
}
