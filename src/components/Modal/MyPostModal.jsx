import { React, useRef, useEffect } from 'react'
import { ModalDiv, ModalContainer } from './DetailModal'
import ModalBar from './ModalBar'
import { ModalListItem } from './ModalList'

export default function MyPostModal({setMyPostModal}) {
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
      <ModalDiv>
      <ModalContainer ref={myPostModalRef}>
        <ModalBar />
        <ModalListItem>나의 게시물 보기</ModalListItem>
      </ModalContainer>
      </ModalDiv>
    )
}
