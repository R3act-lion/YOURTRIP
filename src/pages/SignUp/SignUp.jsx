import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router";
import { emailvalid } from "../../Upload/api";
import * as S from "./style";
  
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
    <S.Container>
        <form onSubmit={handleSubmit(submitEmail)}>
        <S.HeaderTitle>이메일로 회원가입</S.HeaderTitle>
        <S.LoginValue>
          <S.Label>이메일</S.Label>
          <S.Input
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
            {errors.email && <S.ErrorMessage>{errors.email.message}</S.ErrorMessage>}
        <S.Label>비밀번호</S.Label>
        <S.Input
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
        {errors.password && <S.ErrorMessage>{errors.password.message}</S.ErrorMessage>}
        </S.LoginValue>
        <S.ResultBtn
              text="다음" margin="20px 34px"
              color="white"
              backgroundColor="#C9D9F0"
              width="322px" height="44px"
              fontSize="14px"
              className={isValid ? "on" : false
              } />
          </form>
    </S.Container>
        
    </>
  )
}