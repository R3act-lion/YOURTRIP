import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  width: 390px;
  height: 1100px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const HeaderTitle = styled.h1`
  margin-top: 54px;
  font-weight: 500;
  font-size: 24px;
  line-height: 30px;
  color: #000000;
  text-align: center;
`;

export const LoginValue = styled.div`
  margin-top: 40px;
  margin-left: 34px;
  margin-right: 34px;
`;

export const LoginTitle = styled.p`
  color: #767676;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
`;

export const EmailInput = styled.input`
  width: 322px;
  border: none;
  margin: 10px 0 0;
  padding-bottom: 5px;
  outline: none;
  border-bottom: 1px solid #dbdbdb;
`;

export const PassWordTitle = styled.p`
  margin-top: 16px;
  color: #767676;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
`;

export const PasswordInput = styled.input`
  width: 322px;
  border: none;
  margin: 10px 0 0;
  padding-bottom: 5px;
  outline: none;
  border-bottom: 1px solid #dbdbdb;
`;

export const ResultBtn = styled.button`
  width: 322px;
  height: 44px;
  margin: 30px 34px 20px 34px;
  border: 0px;
  background: #c9d9f0;
  border-radius: 44px;
  font-size: 14px;
  line-height: 18px;
  color: #ffffff;
  cursor: pointer;
  &:hover {
    background-color: #c9d9f0;
    color: #ffffff;
  }
  &.on {
    background-color: ${(props) => props.theme.color.primary.main};
  }
`;

export const SignTitle = styled(Link)`
  cursor: pointer;
  text-align: center;
  color: #767676;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
`;

export const ErrorMessage = styled.p`
  font-size: 12px;
  color: red;
  margin-top: 6px;
`;
