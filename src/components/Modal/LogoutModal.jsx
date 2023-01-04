import { React, useRef, useEffect } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

const ModalDiv = styled.section`
    position: fixed;
    left: 0;
    right: 0;
    bottom: 50%;
    width: 252px;
    margin: 0 auto;
    text-align: center;
    z-index: 50;
    background-color: #fff;
    border-radius: 10px;
`

const ModalHeader = styled.h1`
    padding: 22px;
    font-size: 16px;
    font-weight: 600;
`

const ModalSelectCont = styled.ul`
    display: flex;
    border-top: 0.5px solid #DBDBDB;
`

const ModalSelectItem= styled.li`
    flex-grow: 1;
    width: 50%;
    padding: 14px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
`

export default function LogoutModal({setLogoutModal}) {
  const logoutModalRef= useRef();
  const navigate= useNavigate();


    return (
      <ModalDiv>
      <ModalHeader ref={logoutModalRef}>
        로그아웃하시겠어요?
        </ModalHeader>
        <ModalSelectCont>
            <ModalSelectItem style={{borderRight: "0.5px solid #DBDBDB"}} onClick={()=>{
                setLogoutModal(false)}}>취소</ModalSelectItem>
            <ModalSelectItem style={{color: "#3C70BC"}} onClick={()=>{
                navigate('/login')
                setLogoutModal(false)
                localStorage.removeItem('Access Token');
                localStorage.removeItem('user ID');
                localStorage.removeItem('user');
                localStorage.removeItem('subtitle');
                localStorage.removeItem('title');
            }}
                >로그아웃</ModalSelectItem>
        </ModalSelectCont>
      </ModalDiv>
    )
}
