import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import Imgsircle from '../../assets/images/profile.svg';
import UploadImgButton from '../../components/UploadButtonImg/UploadButtonImg';
import { signUp, userIdValid } from "../../Upload/api";
import * as S from "./style";

export default function SignUProfile() {
    const navigate = useNavigate();
    const location = useLocation();
    const userEmail = location.state.email;
    const userPassword = location.state.password;

    const [userImage, setUserImage] = useState("");

    const { 
        register,
        handleSubmit,
        watch,
        setFocus,
        reset,
        formState: { errors },
    } = useForm({ mode: "onChange" });

     const data = {
        user: {
            username: watch("userName"),
            email: userEmail,
            password: userPassword,
            accountname: watch("userId"),
            intro: watch("userDesc"),
            image: userImage
        },
    };

    const isValid = !!watch("userName") && !!watch("userId") && !!watch("userDesc") && !errors.userName && !errors.userId && !errors.userDesc

    const submitProfile = async e => {
        const userId = e.userId

        const response = await userIdValid({ user: { accountname : userId } })

        if (response.message === '사용 가능한 계정ID 입니다.') {
            await submitRegister();
        } else {
            alert(response.message);
            setFocus("userId")
            reset({
                userId: ""
            })
        }
    };

    const submitRegister = async () => {
        const response = await signUp(data)
        if (!!response.message) {
            alert('회원가입에 성공했습니다.')
            navigate('/Login')
        } 
    };

    return (
        <>
            <S.Container>
                 <S.HeaderTitle>프로필설정</S.HeaderTitle>
                <S.HeaderSubTitle>나중에 언제든지 변경할 수 있습니다.</S.HeaderSubTitle>

                <S.ProfileImgDiv>
                    <S.UploadImg src={userImage ? userImage : Imgsircle} />
                    <UploadImgButton stateFunc={setUserImage} />
                </S.ProfileImgDiv>

                <S.ResultValue onSubmit={handleSubmit(submitProfile)}>
                    <S.Label>사용자 이름</S.Label>
                    <S.Input
                        type='text'
                        placeholder='2~10자 이내여야 합니다.'
                        {...register('userName', {
                            required: {
                                value: true,
                                message: '사용자 이름을 입력해주세요.'
                            }, minLength: {
                                value: 2,
                                message: '2~10자 이내여야 합니다.'
                            }, maxLength: {
                                value: 10,
                                message: '2~10자 이내여야 합니다.'
                            }
                        })} 
                    />
                    {errors.userName && <S.ErrorMessage>{errors.userName.message}</S.ErrorMessage>}
                    <S.Label>계정 ID</S.Label>
                    <S.Input
                        type='text'
                        placeholder='영문, 숫자, 특수문자(.) , (_)만 사용 가능합니다.'
                        {...register('userId', {
                            required: {
                                value: true,
                                message: '계정 ID를 입력해주세요.'
                            }, pattern: {
                                value: /^[_A-Za-z0-9.]*$/,
                                message: '영문, 숫자, 밑줄 및 마침표만 사용할 수 있습니다.'
                            }
                        })}
                    />
                    {errors.userId && <S.ErrorMessage>{errors.userId.message}</S.ErrorMessage>}

                    <S.Label>소개</S.Label>
                    <S.Input
                        type='text'
                        placeholder='당신에 대해 간단하게 소개해주세요!'
                        {...register('userDesc', {
                            required: {
                                value: true,
                                message: '소개를 입력해주세요.'
                            }
                        })}
                    />
                    {errors.userDesc && <S.ErrorMessage>{errors.userDesc.message}</S.ErrorMessage>}

                    <S.ResultBtn
                        text="시작하기" margin="30px 0"
                        color="white"
                        backgroundColor="#C9D9F0"
                        width="322px" height="44px"
                        fontSize="14px"
                        className={isValid ? "on" : false}
                    />
                </S.ResultValue>
            </S.Container>
                
        </>
    )
};
