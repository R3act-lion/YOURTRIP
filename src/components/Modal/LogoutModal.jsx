import { React, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from "./style";

export default function LogoutModal({setLogoutModal}) {
  const logoutModalRef= useRef();
  const navigate= useNavigate();


    return (
      <S.ModalSection>
      <S.ModalHeader ref={logoutModalRef}>
        로그아웃하시겠어요?
        </S.ModalHeader>
        <S.ModalSelectCont>
            <S.ModalSelectItem style={{borderRight: "0.5px solid #DBDBDB"}} onClick={()=>{
                setLogoutModal(false)}}>취소</S.ModalSelectItem>
            <S.ModalSelectItem style={{color: "#3C70BC"}} onClick={()=>{
                navigate('/')
                setLogoutModal(false)
                localStorage.removeItem('Access Token');
                localStorage.removeItem('user ID');
                localStorage.removeItem('user');
                localStorage.removeItem('subtitle');
                localStorage.removeItem('title');
            }}
                >로그아웃</S.ModalSelectItem>
        </S.ModalSelectCont>
      </S.ModalSection>
    )
}
