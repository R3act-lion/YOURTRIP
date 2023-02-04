import { React, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router';
import ModalBar from './ModalBar';
import * as S from "./style";

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
      <S.ModalDiv>
      <S.ModalContainer ref={profileModalRef}>
        <ModalBar />
        <S.ModalListItem>
            설정 및 개인정보
        </S.ModalListItem>
        <S.ModalListItem onClick={()=>{
            setLogoutModal(true)}}>
            로그아웃
        </S.ModalListItem>
      
        </S.ModalContainer>
      </S.ModalDiv>
    )
}
