import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Imgsircle from '../../../assets/images/profile.svg';
import UploadImgButton from '../../../components/UploadButtonImg/UploadButtonImg';
import * as S from "../style";

export default function ProfileModify() {
  const navigate = useNavigate();

  const [userName, setUserName] = useState('');
  const [userId, setUserId] = useState('');
  const [userIntro, setUserIntro] = useState('');
  const [userImage, setUserImage] = useState("")

  const [userNameError, setUserNameError] = useState('');
  const [userIdError, setUserIdError] = useState('');
  const [isBtnActive, setIsBtnActive] = useState(true);
        

  const localID = localStorage.getItem('user ID');
  const userToken = localStorage.getItem('Access Token');  

  const instance = axios.create({
  baseURL: 'https://mandarin.api.weniv.co.kr/',
  headers: {
    Authorization: `Bearer ${userToken}`,
    'Content-type': 'application/json',
  },
});


  const getProfile = async accountname => {
    try {
  const response = await instance.get(`/profile/${accountname}`);
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  };

  useEffect(() => {
    getProfile(localID).then(res => {
      console.log(res)
      const { accountname, username, intro, image } = res.profile;

      setUserId(accountname);
      setUserName(username);
      setUserIntro(intro);
      setUserImage(image);
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
    }
  
    const submitProfile = async e => {
      e.preventDefault();
  
      try {
        const res = await instance.put('/user', {
          user: {
            username: userName,
            accountname: userId,
            intro: userIntro,
            image: userImage,
          },
        });
        if (res.data.message === '사용 가능한 계정ID 입니다.') {
          console.log(res.data.message);
      } else if (res.data.message === '이미 가입된 계정ID 입니다.') {
          console.log(res.data.message);
      } else if (res.data.message === '잘못된 접근입니다.') {
          console.log(res.data.message);
      }
        console.log(res)
        localStorage.setItem('user ID', userId);
        navigate(`/profile/${userId}`)
      } catch (error) {
        console.log(error.message);
      }
    }
      
    return (
    <S.Container>
        <S.ProfileImgDiv> 
          <S.UploadImg src= {userImage ? userImage : Imgsircle} />
          <UploadImgButton stateFunc={setUserImage}/>
        </S.ProfileImgDiv>     
              
      <S.ResultValue onSubmit={submitProfile}>
        <S.ResultTitle htmlFor='userName'>사용자이름</S.ResultTitle>
        <S.NameInput
          value={userName}
          id='userName'
          type='text' 
          onChange={userNameValidation}
          placeholder='2~10자 이내여야 합니다.'
          required
        >
        </S.NameInput>
        <S.ErrorMessage>{userNameError}</S.ErrorMessage>
        <S.ResultTitle>계정ID</S.ResultTitle>
        <S.IdInput 
        value={userId}
        id='userId'
        type='text' 
        onChange={userIdValidation}
        placeholder='영문,숫자,특수문자(.),(_)만 사용 가능합니다.'
        required
         />
         <S.ErrorMessage>{userIdError}</S.ErrorMessage>
        <S.ResultTitle>소개</S.ResultTitle>
        <S.IntroInput
        value={userIntro} 
        id='userDesc'
        type='text'
        onChange={userIntroCheck}
        placeholder='나의 소개를 입력 해주세요'
        />
        <S.ButtonSave 
        disabled={isBtnActive}
        style={{backgroundColor: 
          ((userName === "") && (userId === "") && (userIntro === "") ) 
              ? "#C9D9F0" : "#3C70BC"}}
        >
          저장
        </S.ButtonSave>
      </S.ResultValue>
    </S.Container>
    )
}