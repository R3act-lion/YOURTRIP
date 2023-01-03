import React from 'react'
import styled from 'styled-components'
import { useEffect, useRef } from 'react'
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
    <ModalDiv>
    <ModalContainer ref={yourCommentModalRef}>
      <ModalBar />
      <ModalListItem>신고하기</ModalListItem>
    </ModalContainer>
    </ModalDiv>
  )
}
