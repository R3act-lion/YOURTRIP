import styled from 'styled-components'
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Imgsircle from '../../assets/images/profile.svg'


const Container = styled.div`
    margin: 0 auto;
    width: 390px;
    height: 850px;
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`


const HeaderTitle = styled.h1`
    margin-top: 54px;
    margin-bottom: 12px;
    font-weight: 500;
    font-size: 24px;
    line-height: 30px;
    color: #000000;
    text-align: center;
    `

const HeaderSubTitle = styled.p`
    margin-bottom: 30px;
    color:#767676;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    text-align: center;
    `

const ImgView = styled.img.attrs({
    src:`${Imgsircle}`,
    })`
    width:110px;
    height:110px;
    margin: 0 auto;
    margin-bottom: 30px;
    position: relative;
`

const ResultValue = styled.div`
    margin: 0 auto;
`

const ResultTitle = styled.label`
    margin-bottom: 10px;
    color:#767676;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
`

const NameInput = styled.input`
    width: 322px;
    margin-bottom: 16px;
    border-top:none;
    border-left:none;
    border-right:none;
    border-bottom: 1px solid #DBDBDB;
    &::placeholder{
        color: #DBDBDB;
    }
`

const IdInput = styled.input`
    width: 322px;
    margin-bottom: 16px;
    border-top:none;
    border-left:none;
    border-right:none;
    border-bottom: 1px solid #DBDBDB;
    &::placeholder{
        color: #DBDBDB;
        line-height: 14px;
    }
    
`

const IntroInput = styled.input`
    width: 322px;
    margin-bottom: 30px;
    border-top:none;
    border-left:none;
    border-right:none;
    border-bottom: 1px solid #DBDBDB;
    &::placeholder{
        color: #DBDBDB;
        line-height: 14px;
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
    &:hover{
        background-color: #C9D9F0;
        color: #FFFFFF;}
`

    const idAxios = axios.create({
        baseURL: 'https://mandarin.api.weniv.co.kr/user',
        headers: { 'Content-type': 'application/json' },
      });
      
      const registerAxios = axios.create({
        baseURL: 'https://mandarin.api.weniv.co.kr/',
        headers: { 'Content-type': 'application/json' },
      });
      
      export default function SignUpProfile() {
        const navigate = useNavigate();
        const location = useLocation();
        const userEmail = location.state.email;
        const userPassword = location.state.password;
      
        console.log(userEmail, userPassword);
      
        const [userName, setUserName] = useState('');
        const [userId, setUserId] = useState('');
        const [userIntro, setUserIntro] = useState('');
      
        const [userNameError, setUserNameError] = useState('');
        const [userIdError, setUserIdError] = useState('');
        const [isBtnActive, setIsBtnActive] = useState(true);
      
        const userNameValidation = e => {
          console.log(e.target.value);
          const value = e.target.value;
      
          setUserName(prev => value);
      
          if ((value.length < 2 && value !== '') || value.length > 10) {
            setUserNameError('2~10자 이내여야 합니다.');
          } else if (value === '') {
            setUserNameError('사용자 이름을 입력해주세요.');
          } else {
            setUserNameError('');
          }
        };
      
        const userIdValidation = e => {
          const value = e.target.value;
          const userIdRegex = /^[_A-Za-z0-9.]*$/;
      
          setUserId(prev => value);
      
          if (!userIdRegex.test(value)) {
            setUserIdError('영문, 숫자, 특수문자(,),(_)만 사용가능합니다.');
          } else if (value === '') {
            setUserIdError('계정 ID를 입력해주세요.');
          } else {
            setUserIdError('');
          }
        };
      
        const userIntroCheck = e => {
          const value = e.target.value;
      
          if (value === '') {
            setUserIntro('');
          } else {
            setUserIntro(prev => value);
          }
        };
      
        useEffect(() => {
          if (!userNameError && !userIdError) {
            if (!!userName && !!userId) {
              setIsBtnActive(prev => false);
            } else {
              setIsBtnActive(prev => true);
            }
          } else {
            setIsBtnActive(prev => true);
          }
        }, [userId, userName, userNameError, userIdError]);
      
        const submitProfile = async e => {
          e.preventDefault();
          console.log('submit');
      
          try {
            console.log(userId);
            const response = await idAxios.post('/accountnamevalid', { user: { accountname: userId } });
      
            if (response.data.message === '사용 가능한 계정ID 입니다.') {
              console.log(response.data.message);
              await submitRegister();
            } else if (response.data.message === '이미 가입된 계정ID 입니다.') {
              console.log(response.data.message);
            } else if (response.data.message === '잘못된 접근입니다.') {
              console.log(response.data.message);
            }
          } catch (error) {
            console.log(error.message);
          }
        };
      
        const data = {
          user: {
            username: userName,
            email: userEmail,
            password: userPassword,
            accountname: userId,
            intro: userIntro,
          },
        };
      
        const submitRegister = async () => {
          try {
            await registerAxios
              .post('/user', data)
              .then(response => {
                console.log(response);
                console.log('회원가입 성공');
                navigate('/Login');
              })
              .catch(response => console.log(response.data.message));
          } catch (error) {
            console.log(error.message);
          }
        };
        return (
    <>
    <Container>
        <HeaderTitle>프로필설정</HeaderTitle>
        <HeaderSubTitle>나중에 언제든지 변경할 수 있습니다.</HeaderSubTitle>
        <form onSubmit={submitProfile}>
        <ImgView/>

        <ResultValue>
        <ResultTitle htmlFor='userName'>사용자이름</ResultTitle>
        <br/>
        <NameInput
         id='userName'
         type='text' 
         onChange={userNameValidation}
         placeholder='2~10자 이내여야 합니다.'
         required
        />
        <ResultTitle>계정ID</ResultTitle>
        <br/>
        <IdInput 
        id='userId'
        type='text' 
        onChange={userIdValidation}
        placeholder='영문,숫자,특수문자(.),(_)만 사용 가능합니다.'
        required
         />
        <ResultTitle>소개</ResultTitle>
        <br/>
        <IntroInput 
        id='userDesc'
        type='text'
        onChange={userIntroCheck}
        placeholder='나의 소개를 입력 해주세요'
        />
        </ResultValue>
        <ResultBtn disabled={isBtnActive}>시작하기</ResultBtn>
        </form>
    </Container>

    </>
  );
}
