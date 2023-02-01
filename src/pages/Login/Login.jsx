import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';


const Container = styled.div`
    margin: 0 auto;
    width: 390px;
    height: 1100px;
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

const LoginTitle = styled.p`
    color:#767676;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
`

const EmailInput = styled.input`
    width: 322px;
    border:none;
    margin: 10px 0 0;
    padding-bottom: 5px;
    outline: none;
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
    border:none;
    margin: 10px 0 0;
    padding-bottom: 5px;
    outline: none;
    border-bottom: 1px solid #DBDBDB;
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
        color: #FFFFFF;
    }
    &.on{
        background-color: ${props => props.theme.color.primary.main};
    }
`

const SignTitle = styled(Link)`
    cursor: pointer;
    text-align: center;
    color:#767676;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
`

const ErrorMessage = styled.p`
    font-size: 12px;
    color: red;
    margin-top: 6px;
    `;


const loginAxios = axios.create({
    baseURL: 'https://mandarin.api.weniv.co.kr/user',
    headers: { 'Content-type': 'application/json' },
});


export default function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [emailError, setEmailError] = useState('');
    const [loginError, setLoginError] = useState('');
    const [isBtnActive, setIsBtnActive] = useState(true);

    const changeHandler = e => {
        const value = e.target.value;

        if (e.target.type === 'email') {
            setEmail(prev => value);
            emailValidation(value);
        } else if (e.target.type === 'password') {
            setPassword(prev => value);
        }
    };

    const emailValidation = emailValue => {
        const emailRegex =
            /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;

        if (!emailRegex.test(emailValue)) {
            setEmailError(prev => {
                if (emailValue === '') return '';
                else return '올바른 이메일 형식이 아닙니다.';
            });
        } else {
            setEmailError('');
        }
    };

    const submitLogin = async e => {
        e.preventDefault();
        console.log('submit login');
        try {
            const response = await loginAxios.post('/login', {
                user: {
                    email,
                    password,
                },
            });

            if (!response.data.user) {
                setLoginError('이메일 또는 비밀번호가 일치하지 않습니다.');
            } else if (response.data.user) {
                localStorage.setItem('Access Token', response.data.user.token);
                localStorage.setItem('user ID', response.data.user.accountname);
                localStorage.setItem('user', JSON.stringify(response.data.user));

                console.log(localStorage.getItem('Access Token'))
                console.log(localStorage.getItem('user ID'))
                navigate('/home');
            } else {
                console.log('로그인 실패');
                console.log(response);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (!!email && !!password && !emailError) {
            setIsBtnActive(false);
        } else {
            setIsBtnActive(true);
        }
    }, [email, password, emailError]);


    return (
        <>
            <Container>
                <form onSubmit={submitLogin}>
                    <HeaderTitle>로그인</HeaderTitle>
                    <LoginValue>
                        <LoginTitle>이메일</LoginTitle>
                        <EmailInput id="inputEmail" type="email" onChange={changeHandler} required />
                        <ErrorMessage>{emailError}</ErrorMessage>
                        <PassWordTitle >비밀번호</PassWordTitle>
                        <PasswordInput id="inputPwd" type="password" onChange={changeHandler} required />
                        <ErrorMessage>{loginError}</ErrorMessage>
                    </LoginValue>

                    <ResultBtn disabled={isBtnActive}
                        className={!!email && !!password && !emailError? "on" : false}
                   >로그인</ResultBtn>
                </form>
                <SignTitle to='/signup'>이메일로 회원가입</SignTitle>
            </Container>
        </>
    )
}

