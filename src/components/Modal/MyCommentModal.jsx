import React, { useEffect, useRef } from 'react';
import ModalBar from './ModalBar';
import * as S from "./style";

export default function MyCommentModal({setMyCommentModal, postId, commentId}) {
  const token = JSON.parse(localStorage.getItem('user')).token;
  const url = "https://mandarin.api.weniv.co.kr";
  const myCommentModalRef= useRef();

  useEffect(()=>{
    const handler = (e)=>{
      if (myCommentModalRef.current && !myCommentModalRef.current.contains(e.target)) {
        setMyCommentModal(false);
      }
    }
    document.addEventListener('mousedown', handler);
  
    return () => {
      document.removeEventListener('mousedown', handler);
    }
  })

  async function deleteComment() {
    postId = postId;
    commentId = commentId;
    
    try {
        const res = await fetch(url + "/post/" + postId + "/comments/" + commentId, {
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json",
            }
        });
        const resJson = await res.json();
        console.log(resJson);
            
    } catch (err) {
        console.error(err);
    }
}
    
  return (
    <S.ModalDiv>
    <S.ModalContainer ref={myCommentModalRef}>
      <ModalBar />
      <S.ModalListItem>수정하기</S.ModalListItem>
      <S.ModalListItem onClick={
        ()=>{deleteComment()}}>삭제하기</S.ModalListItem>
    </S.ModalContainer>
    </S.ModalDiv>
  )
}
