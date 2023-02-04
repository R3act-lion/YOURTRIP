import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import ModalBar from './ModalBar';
import * as S from "./style";

export default function EditModal({setEditModal, postId, writerImg, image, content}) {
  const navigate= useNavigate();
  const editModalRef= useRef();
  const token = JSON.parse(localStorage.getItem('defaultAccount')).token;
  const url = "https://mandarin.api.weniv.co.kr";

  async function Editposting() {
        try {
            const res = await fetch(url + "/post/" + postId, {
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

  useEffect(()=>{
    const handler = (e)=>{
      if (editModalRef.current && !editModalRef.current.contains(e.target)) {
        setEditModal(false);
      }
    }
    document.addEventListener('mousedown', handler);
  
    return () => {
      document.removeEventListener('mousedown', handler);
    }
  })
    
  return (
    <S.ModalDiv>
    <S.ModalContainer ref={editModalRef}>
      <ModalBar />
      <S.ModalListItem onClick={()=>{navigate("/community/edit", 
        {state : { postId: postId, writerImg: writerImg, image: image, content: content }} 
          )}}>수정하기
      </S.ModalListItem>
      <S.ModalListItem 
        onClick={()=>{
          Editposting()
          navigate("/community")
        }}>삭제하기</S.ModalListItem>
    </S.ModalContainer>
    </S.ModalDiv>
  )
}
