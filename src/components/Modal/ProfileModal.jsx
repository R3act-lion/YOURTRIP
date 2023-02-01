import { React, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router';
import { ModalContainer, ModalDiv } from './DetailModal';
import ModalBar from './ModalBar';
import { ModalListItem } from './ModalList';

export default function ProfileModal({setProfileModal, setLogoutModal}) {
  const navigate= useNavigate();
  const profileModalRef= useRef();

    useEffect(()=>{
      const handler = (e)=>{
        if (profileModalRef.current && !profileModalRef.current.contains(e.target)) {
            setProfileModal(false);
        }
      }
      document.addEventListener('mousedown', handler);
    
      return () => {
        document.removeEventListener('mousedown', handler);
      }
    })
      
    return (
      <ModalDiv>
      <ModalContainer ref={profileModalRef}>
        <ModalBar />
        <ModalListItem>
            설정 및 개인정보
        </ModalListItem>
        <ModalListItem onClick={()=>{
            setLogoutModal(true)}}>
            로그아웃
        </ModalListItem>
      
        </ModalContainer>
      </ModalDiv>
    )
}
