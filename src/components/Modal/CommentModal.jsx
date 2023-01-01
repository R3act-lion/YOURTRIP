import { React, useRef, useEffect } from 'react'
import { ModalDiv, ModalContainer } from './DetailModal'
import ModalBar from './ModalBar'
import { ModalListItem } from './ModalList'

export default function CommentModal({setCommentModal}) {
    const commentModalRef= useRef();

    useEffect(()=>{
      const handler = (e)=>{
        if (commentModalRef.current && !commentModalRef.current.contains(e.target)) {
          setCommentModal(false);
        }
      }
      document.addEventListener('mousedown', handler);
    
      return () => {
        document.removeEventListener('mousedown', handler);
      }
    })
      
    return (
      <ModalDiv>
      <ModalContainer ref={commentModalRef}>
        <ModalBar />
        <ModalListItem>신고하기</ModalListItem>
      </ModalContainer>
      </ModalDiv>
    )
}
