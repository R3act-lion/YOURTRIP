import styled from 'styled-components'
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Imgsircle from '../../assets/images/profile.svg'
import UploadImgButton from '../../components/UploadButtonImg/UploadButtonImg'

const Container = styled.div`
    margin: 0 auto;
    width: 390px;
    height: 950px;
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

const ProfileImgDiv = styled.form`
    position: relative;
    margin: 0 auto;
    background-image: url(${Imgsircle});
    width:110px;
    height:110px;
    position: relative;
    margin-bottom: 30px;
    
`;



const ResultValue = styled.form`
    display: flex;
    flex-direction: column;
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

const ErrorMessage = styled.p`
    font-size: 12px;
    color: red;
    margin-top: 6px;
`

  const idAxios = axios.create({
        baseURL: 'https://mandarin.api.weniv.co.kr/user',
        headers: { 'Content-type': 'application/json' },
      });
      
  const registerAxios = axios.create({
        baseURL: 'https://mandarin.api.weniv.co.kr/',
        headers: { 'Content-type': 'application/json' },
      });

  export default function SignUProfile() {
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
        const [userImage, setUserImage] = useState("");
        
      
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
            image: userImage
          },
        };

      const handlerChangeFile = (e) => {
        console.log('d')
        let reader = new FileReader();
        if (e.target.files[0]){
            reader.readAsDataURL(e.target.files[0]);
        }
        reader.onloadend = () =>{
            const resultImage = reader.result;
            setUserImage(resultImage)
        };
        console.log(e.target.files);
      }

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
    
        <ProfileImgDiv>
        <label htmlFor='file'></label>
      <UploadImgButton id='file' onChange={handlerChangeFile}/>
        </ProfileImgDiv>     
              
        <ResultValue onSubmit={submitProfile}>
        <ResultTitle htmlFor='userName'>사용자이름</ResultTitle>
        <NameInput
         id='userName'
         type='text' 
         onChange={userNameValidation}
         placeholder='2~10자 이내여야 합니다.'
         required
        />
        <ErrorMessage>{userNameError}</ErrorMessage>
        <ResultTitle>계정ID</ResultTitle>
        <IdInput 
        id='userId'
        type='text' 
        onChange={userIdValidation}
        placeholder='영문,숫자,특수문자(.),(_)만 사용 가능합니다.'
        required
         />
         <ErrorMessage>{userIdError}</ErrorMessage>
        <ResultTitle>소개</ResultTitle>
        <IntroInput 
        id='userDesc'
        type='text'
        onChange={userIntroCheck}
        placeholder='나의 소개를 입력 해주세요'
        />
        <ResultBtn disabled={isBtnActive}>시작하기</ResultBtn>
        </ResultValue>
      
    </Container>
    </>
  )
};
