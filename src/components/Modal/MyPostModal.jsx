import { React, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router';
import { ModalDiv, ModalContainer } from './DetailModal'
import ModalBar from './ModalBar'
import { ModalListItem } from './ModalList'

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
      <ModalDiv>
      <ModalContainer ref={myPostModalRef}>
        <ModalBar />
        <ModalListItem onClick={()=>{
          navigate("/mypost")
          setMyPostModal(false)}
          }>내가 작성한 글</ModalListItem>
      
        </ModalContainer>
      </ModalDiv>
    )
}
