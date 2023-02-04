import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Imgsircle from '../../assets/images/profile.svg';
import UploadImgButton from '../../components/UploadButtonImg/UploadButtonImg';
import Button from '../../modules/Button/Button';
import { signUp, userIdValid } from "../../Upload/api";

const Container = styled.div`
    margin: 0 auto;
    width: 390px;
    height: 100vh;
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

const ProfileImgDiv = styled.div`
    position: relative;
    margin: 0 auto;
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
    margin: 0 34px;
`

const Label = styled.label`
    color:#767676;
    font-weight: 500;
    display : inline-block;
    margin-top: 20px;
    font-size: 12px;
    line-height: 15px;
`

const Input = styled.input`
    width: 322px;
    margin: 10px 0 0;
    border: none;
    outline: none;
    padding-bottom: 5px;
    border-bottom: 1px solid #DBDBDB;
    &::placeholder{
        color: #DBDBDB;
    }
`

const ResultBtn = styled(Button)`
    &.on{
        background-color: ${props => props.theme.color.primary.main};
    }
`

const ErrorMessage = styled.p`
    font-size: 12px;
    color: red;
    margin-top: 6px;
`

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
            <Container>
                 <HeaderTitle>프로필설정</HeaderTitle>
                <HeaderSubTitle>나중에 언제든지 변경할 수 있습니다.</HeaderSubTitle>

                <ProfileImgDiv>
                    <UploadImg src={userImage ? userImage : Imgsircle} />
                    <UploadImgButton stateFunc={setUserImage} />
                </ProfileImgDiv>

                <ResultValue onSubmit={handleSubmit(submitProfile)}>
                    <Label>사용자 이름</Label>
                    <Input
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
                    {errors.userName && <ErrorMessage>{errors.userName.message}</ErrorMessage>}
                    <Label>계정 ID</Label>
                    <Input
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
                    {errors.userId && <ErrorMessage>{errors.userId.message}</ErrorMessage>}

                    <Label>소개</Label>
                    <Input
                        type='text'
                        placeholder='당신에 대해 간단하게 소개해주세요!'
                        {...register('userDesc', {
                            required: {
                                value: true,
                                message: '소개를 입력해주세요.'
                            }
                        })}
                    />
                    {errors.userDesc && <ErrorMessage>{errors.userDesc.message}</ErrorMessage>}

                    <ResultBtn
                        text="시작하기" margin="30px 0"
                        color="white"
                        backgroundColor="#C9D9F0"
                        width="322px" height="44px"
                        fontSize="14px"
                        className={isValid ? "on" : false}
                    />
                </ResultValue>
            </Container>
                
        </>
    )
};
