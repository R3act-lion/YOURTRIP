import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import ModalBar from './ModalBar'
import { ModalListItem } from './ModalList'

export const ModalDiv = styled.section`
    position: fixed;
    width: 390px;
    margin: 0 auto;
    z-index: 30;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.8);
`

export const ModalContainer = styled.section`
    width: 390px;
    padding: 36px 0 10px;
    border-radius: 10px 10px 0 0;
    position: fixed;
    bottom: 0px;
    background-color: #fff;
`

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
    <ModalDiv>
    <ModalContainer ref={myCommentModalRef}>
      <ModalBar />
      <ModalListItem>수정하기</ModalListItem>
      <ModalListItem onClick={
        ()=>{deleteComment()}}>삭제하기</ModalListItem>
    </ModalContainer>
    </ModalDiv>
  )
}
