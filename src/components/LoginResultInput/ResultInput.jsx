import React from 'react'
import styled from 'styled-components'

const LoginValue = styled.div`
    margin-top: 40px;
    margin-left: 34px;
    margin-right: 34px;
`

const LoginTitle = styled.p`
    color:#767676;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
`

const EmailInput = styled.input`
    width: 322px;
    border-top:none;
    border-left:none;
    border-right:none;
    border-bottom: 1px solid #DBDBDB;
    
`

const PassWordTitle = styled.p`
    margin-top: 16px;
    color:#767676;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
`

const PasswordInput = styled.input`
    width: 322px;
    border-top:none;
    border-left:none;
    border-right:none;
    border-bottom: 1px solid #DBDBDB;
`

export default function ResultInput() {
  return (
    <>
     <LoginValue>
        <LoginTitle id="email" type="email" >이메일</LoginTitle>
        <EmailInput/>
        <PassWordTitle id="password" type="password">비밀번호</PassWordTitle>
        <PasswordInput/>
        </LoginValue>
    </>
  )
}
