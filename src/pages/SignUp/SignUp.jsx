import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router";
import styled from 'styled-components';
import Button from '../../modules/Button/Button';
import { emailvalid } from "../../Upload/api";

const Container = styled.div`
    width: 390px;
    height: 100vh;
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
    border:none;
    margin: 10px 0 0;
    padding-bottom: 5px;
    outline: none;
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
    border:none;
    margin: 10px 0 0;
    padding-bottom: 5px;
    outline: none;
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
    color: #EB5757;
    margin-top: 6px;
    margin-bottom: 16px;
    `;
  
export default function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [pwError, setPwError] = useState('');
    const [isBtnActive, setIsBtnActive] = useState(false);
  
    const navigate = useNavigate();
  
    const emailValidation = e => {
      const value = e.target.value;
      setEmail(value);

      const emailRegex =
        /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
  
      if (emailRegex.test(value)) {
          setEmailError('');
      } else {
        setEmailError('올바른 이메일 형식이 아닙니다.');
      }
    };
  
    const pwValidation = e => {
      const value = e.target.value;
  
      setPassword(value);
  
      if (value.length > 0 && value.length < 6) {
        setPwError('6자 이상 입력하세요');
      } else {
        setPwError('');
      }
    };

  useEffect(() => {
    if (!!email && !!password && !emailError && !pwError) {
          setIsBtnActive(true);
      } else {
        setIsBtnActive(false);
      }
    }, [email, password, emailError, pwError]);
  
    const submitEmail = async e => {
      e.preventDefault();
      try {
        const response = await emailvalid({ user: { email } });
        
        if (response.message === '사용 가능한 이메일 입니다.') {
          navigate('/signup/profile', { state: { email, password } });
        } else {
          alert(response.message); 
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
        <ResultBtn
          text="다음" margin="20px 34px"
          color="white"
          backgroundColor="#C9D9F0"
          width="322px" height="44px"
          fontSize="14px" className={isBtnActive ? "on" : false
          } />
        </form>
    </Container>
        
    </>
  )
}