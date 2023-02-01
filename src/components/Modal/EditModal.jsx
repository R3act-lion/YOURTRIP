import React, { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
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
    <ModalDiv>
    <ModalContainer ref={editModalRef}>
      <ModalBar />
      <ModalListItem onClick={()=>{navigate("/community/edit", 
        {state : { postId: postId, writerImg: writerImg, image: image, content: content }} 
          )}}>수정하기
      </ModalListItem>
      <ModalListItem 
        onClick={()=>{
          Editposting()
          navigate("/community")
        }}>삭제하기</ModalListItem>
    </ModalContainer>
    </ModalDiv>
  )
}
