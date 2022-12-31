import styled from 'styled-components'
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Imgsircle from '../../../assets/images/profile.svg'
import UploadImgButton from '../../../components/UploadButtonImg/UploadButtonImg'


const Container = styled.div`
    margin: 30px auto;
    width: 390px;
    height: 950px;
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`
const ProfileImgDiv = styled.div`
    position: relative;
    margin: 0 auto;
    position: relative;
    margin-bottom: 30px;
`;

const UploadImg = styled.img`
    width:110px;
    height:110px;
    border-radius: 50%;
`

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


const ButtonSave = styled.button`
    width: 90px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    background-color: #C9D9F0;
    border-radius: 32px;
    font-weight: 500;
    font-size: 14px;
    position: fixed;
    top: 8px;
    right: calc(50vw - 179px);
    z-index: 30;
    cursor: pointer;
`

// const idAxios = axios.create({
//     baseURL: 'https://mandarin.api.weniv.co.kr/user',
//     headers: { 'Content-type': 'application/json' },
//   });
  
// const registerAxios = axios.create({
//     baseURL: 'https://mandarin.api.weniv.co.kr/',
//     headers: { 'Content-type': 'application/json' },
//   });

    const userToken = localStorage.getItem('Access Token');
    const baseURL = process.env.REACT_APP_URL;  

    const instance = axios.create({
    baseURL,
    headers: {
    Authorization: `Bearer ${userToken}`,
    'Content-type': 'application/json',
    },
  });

    const instanceAuth = axios.create({
    baseURL,
    headers: {
      Authorization: `Bearer ${userToken}`,
      'Content-type': 'application/json',
    },
  });

      const getProfile = async accountname => {
    try {
      const response = await instanceAuth.get(`/profile/${accountname}`);
  
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  };

    export default function ProfileModify() {
        const navigate = useNavigate();
        const location = useLocation();
        
        
    
        const [userName, setUserName] = useState('');
        const [userId, setUserId] = useState('');
        const [userIntro, setUserIntro] = useState('');
        const [userImage, setUserImage] = useState("");

    
        const [userNameError, setUserNameError] = useState('');
        const [userIdError, setUserIdError] = useState('');
        const [isBtnActive, setIsBtnActive] = useState(true);
        

        const localID = localStorage.getItem('user ID');


        

        useEffect(() => {
          getProfile(localID).then(res => {
            const { accountname, username, intro, image } = res.profile;

            setUserId(prev => username);
            setUserName(prev => accountname);
            setUserIntro(prev => intro);
            setUserImage(prev => image);
          })
        },[]);

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


        const userNameValidation = e => {
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
      
        // 계정 ID 유효성 검사
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
      
        // 소개 유효성 검사
        const userIntroCheck = e => {
          const value = e.target.value;
      
          if (value === '') {
            setUserIntro('');
          } else {
            setUserIntro(prev => value);
          }
        };

      
        const submitProfile = async e => {
          e.preventDefault();
      
          try {
            const res = await axios.put('/user', {
              user: {
                username: userName,
                accountname: userId,
                intro: userIntro,
                image: userImage,
              },
            });
      
            if (res.data.message === '사용 가능한 계정ID 입니다.') {
              console.log(res.data.message);
              await editProfile();
            } else if (res.data.message === '이미 가입된 계정ID 입니다.') {
              console.log(res.data.message);
            } else if (res.data.message === '잘못된 접근입니다.') {
              console.log(res.data.message);
            }
          } catch (error) {
            console.log(error.message);
          }
        };

        const editProfile = async () => {
          try {
            const response = await instance.put(`/user`);
        
            return response.data;
          } catch (error) {
            return new Error(error);
          }
        };


    return (
        
    <Container>
        <ProfileImgDiv> 
          <UploadImg src= {userImage ? userImage:Imgsircle} />
          <UploadImgButton stateFunc={setUserImage}/>
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
        <ButtonSave disabled={isBtnActive}>저장</ButtonSave>
      </ResultValue>
    </Container>
        
    )
}
