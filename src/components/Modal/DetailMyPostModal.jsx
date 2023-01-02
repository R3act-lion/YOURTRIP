import { React, useRef, useEffect } from 'react'
import { UNSAFE_DataRouterStateContext, useNavigate } from 'react-router';
import { ModalDiv, ModalContainer } from './DetailModal'
import ModalBar from './ModalBar'
import { ModalListItem } from './ModalList'

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
      <ModalDiv>
      <ModalContainer ref={detailMyPostModalRef}>
        <ModalBar />
        <ModalListItem onClick={()=>{
          navigate("/")
          setDetailMyPostModal(false)}
          }>수정하기</ModalListItem>
      <ModalListItem onClick={()=>{
          navigate("/")
          }
          }>삭제하기</ModalListItem>

      </ModalContainer>
      </ModalDiv>
    )
}
