import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from "./style";

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
            <S.Container>
                <form onSubmit={submitLogin}>
                    <S.HeaderTitle>로그인</S.HeaderTitle>
                    <S.LoginValue>
                        <S.LoginTitle>이메일</S.LoginTitle>
                        <S.EmailInput id="inputEmail" type="email" onChange={changeHandler} required />
                        <S.ErrorMessage>{emailError}</S.ErrorMessage>
                        <S.PassWordTitle >비밀번호</S.PassWordTitle>
                        <S.PasswordInput id="inputPwd" type="password" onChange={changeHandler} required />
                        <S.ErrorMessage>{loginError}</S.ErrorMessage>
                    </S.LoginValue>

                    <S.ResultBtn disabled={isBtnActive}
                        className={!!email && !!password && !emailError? "on" : false}
                   >로그인</S.ResultBtn>
                </form>
                <S.SignTitle to='/signup'>이메일로 회원가입</S.SignTitle>
            </S.Container>
        </>
    )
}

