import React, { useState } from 'react'
import styled from 'styled-components'
import { useNavigate } from "react-router";
import axios from 'axios';
import { useEffect } from 'react';

const Container = styled.div`
    width: 390px;
    height: 850px;
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`


const HeaderTitle = styled.h1`
    margin-top: 54px;
    font-weight: 500;
    font-size: 24px;
    line-height: 30px;
    color: #000000;
    text-align: center;
`

const LoginValue = styled.div`
    margin-top: 40px;
    margin-left: 34px;
    margin-right: 34px;
`

const LoginTitle = styled.label`
    color:#767676;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
`

const EmailInput = styled.input`
    width: 322px;
    margin-top: 10px;
    border-top:none;
    border-left:none;
    border-right:none;
    border-bottom: 1px solid #DBDBDB;
    &::placeholder{
      color: #DBDBDB;
    }
    
`

const PassWordTitle = styled.label`
    color:#767676;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
`

const PasswordInput = styled.input`
    width: 322px;
    margin-top: 10px;
    border-top:none;
    border-left:none;
    border-right:none;
    border-bottom: 1px solid #DBDBDB;
    &::placeholder{
      color: #DBDBDB;
    }
`

const ResultBtn = styled.button`
    width: 322px;
    height: 44px;
    margin: 30px 34px 20px 34px;
    border: 0px;
    background: #C9D9F0;
    border-radius: 44px;
    font-size: 14px;
    line-height: 18px;
    color: #FFFFFF;
    cursor: pointer;
`

const ErrorMessage = styled.p`
    font-size: 12px;
    color: #EB5757;
    margin-top: 6px;
    margin-bottom: 16px;
    `;


const emailAxios = axios.create({
    baseURL: 'https://mandarin.api.weniv.co.kr/user',
    headers: { 'Content-type': 'application/json' },
  });
  
export default function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [pwError, setPwError] = useState('');
    const [isBtnActive, setIsBtnActive] = useState(true);
  
    const navigate = useNavigate();
  
    const emailValidation = e => {
      const value = e.target.value;
  
      setEmail(prev => value);
      const emailRegex =
        /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
  
      if (!emailRegex.test(value)) {
        setEmailError(prev => {
          if (value === '') return '';
          else return '올바른 이메일 형식이 아닙니다.';
        });
      } else {
        setEmailError('');
      }
    };
  
    const pwValidation = e => {
      const value = e.target.value;
  
      setPassword(prev => value);
  
      if (value.length < 6) {
        if (value === '') {
          setPwError('');
        } else {
          setPwError('6자 이상 입력');
        }
      } else {
        setPwError('');
      }
    };

    useEffect(() => {
      console.log(emailError, pwError );
      if (!emailError && !pwError) {
        if (!!email && !!password) {
          setIsBtnActive(prev => false);
        } else {
          setIsBtnActive(prev => true);
        }
      } else {
        setIsBtnActive(prev => true);
      }
    }, [email, password, emailError, pwError,]);
  
    const submitEmail = async e => {
      e.preventDefault();
      console.log('submit');
      try {
        const response = await emailAxios.post('/emailvalid', { user: { email } });
  
        if (response.data.message === '사용 가능한 이메일 입니다.') {
          console.log('사용가능');
          navigate('/signup/profile', { state: { email, password } });
        } else if (response.data.message === '이미 가입된 이메일 주소 입니다.') {
          setEmailError('이미 가입된 계정ID 입니다.');
        } else if (response.data.message === '잘못된 접근입니다.') {
          console.log('잘못된 접근입니다.');
        }
      } catch (error) {
        console.log(error.message);
      }
    };
  
  
    return (
    <>
    <Container>
        <form onSubmit={submitEmail}>
        <HeaderTitle>이메일로 회원가입</HeaderTitle>
        <LoginValue>
        <LoginTitle>이메일</LoginTitle>
        <EmailInput
        name="email" 
        type="text" 
        placeholder='이메일 주소를 입력해주세요'  
        onChange={emailValidation}
        required={true}
        />
        <ErrorMessage>{emailError}</ErrorMessage>
        <PassWordTitle>비밀번호</PassWordTitle>
        <PasswordInput 
        name="password"
        type="password"
        placeholder="비밀번호를 설정해주세요"
        onChange={pwValidation}
        required={true}
        />
        <ErrorMessage>{pwError}</ErrorMessage>
        </LoginValue>
        <ResultBtn disabled={isBtnActive}
        style={{backgroundColor: 
          ((email === "") && (password === "")) 
              ? "#C9D9F0" : "#3C70BC"}}>다음</ResultBtn>
        </form>
    </Container>
        
    </>
  )
}