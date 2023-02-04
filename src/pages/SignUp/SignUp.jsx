import React from 'react';
import { useForm } from 'react-hook-form';
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
  margin: 30px 34px 0;
`

const ResultBtn = styled(Button)`
    &.on{
        background-color: ${props => props.theme.color.primary.main};
    }
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
    border:none;
    margin: 10px 0 0;
    padding-bottom: 5px;
    outline: none;
    border-bottom: 1px solid #DBDBDB;
    &::placeholder{
      color: #DBDBDB;
    }
`

const ErrorMessage = styled.p`
    font-size: 12px;
    color: #EB5757;
    margin-top: 6px;
`
  
export default function Signup() {
  const {
    register,
    handleSubmit,
    watch,
    setFocus,
    reset,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const navigate = useNavigate();

  const isValid = !!watch("email") && !!watch("password") && !errors.email && !errors.password
  
  const submitEmail = async e => {
    const email = e.email,
      password = e.password;
    
      const response = await emailvalid({ user: { email } });
      if (response.message === '사용 가능한 이메일 입니다.') {
        navigate('/signup/profile', { state: { email, password } });
      } else {
        alert(response.message); 
        setFocus("email");
        reset({
          email: ""
        })
      }
    };
  
    return (
    <>
    <Container>
        <form onSubmit={handleSubmit(submitEmail)}>
        <HeaderTitle>이메일로 회원가입</HeaderTitle>
        <LoginValue>
          <Label>이메일</Label>
          <Input
            type="text"
            placeholder='이메일 주소를 입력해주세요' 
            {...register("email", {
              required: {
                value: true,
                message : "이메일을 입력하세요"
              },
              pattern: {
                value: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g,
                message : '올바른 이메일 형식이 아닙니다.'
              }
            })}
            />
            {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        <Label>비밀번호</Label>
        <Input
              type="password"
              placeholder='비밀번호를 설정해주세요' 
              {...register("password", {
                required: {
                  value: true,
                  message : "비밀번호를 입력하세요"
                },
                minLength: {
                  value: 6,
                  message: "6자 이상 입력하세요"
                }
              })}
            />
        {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
        </LoginValue>
        <ResultBtn
              text="다음" margin="20px 34px"
              color="white"
              backgroundColor="#C9D9F0"
              width="322px" height="44px"
              fontSize="14px"
              className={isValid ? "on" : false
              } />
          </form>
    </Container>
        
    </>
  )
}