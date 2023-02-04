import styled from "styled-components";
import Button from "../../modules/Button/Button";

export const Container = styled.div`
  margin: 0 auto;
  width: 390px;
  height: 100vh;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const HeaderTitle = styled.h1`
  margin-top: 54px;
  margin-bottom: 12px;
  font-weight: 500;
  font-size: ${(props) => props.theme.fontSize.lv1};
  line-height: 30px;
  color: ${(props) => props.theme.color.text.black};
  text-align: center;
`;

export const HeaderSubTitle = styled.p`
  margin-bottom: 30px;
  color: ${(props) => props.theme.color.gray.g1};
  font-weight: 500;
  font-size: ${(props) => props.theme.fontSize.lv7};
  line-height: 15px;
  text-align: center;
`;

export const ProfileImgDiv = styled.div`
  position: relative;
  margin: 0 auto;
  margin-bottom: 30px;
`;

export const UploadImg = styled.img`
  width: 110px;
  height: 110px;
  border-radius: ${(props) => props.theme.borderRadius.circle};
`;

export const ResultValue = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 34px;
`;

export const Label = styled.label`
  color: ${(props) => props.theme.color.gray.g1};
  font-weight: 500;
  display: inline-block;
  margin-top: 20px;
  font-size: ${(props) => props.theme.fontSize.lv7};
  line-height: 15px;
`;

export const Input = styled.input`
  width: 322px;
  margin: 10px 0 0;
  border: none;
  outline: none;
  padding-bottom: 5px;
  border-bottom: 1px solid ${(props) => props.theme.color.gray.g2};
  &::placeholder {
    color: ${(props) => props.theme.color.gray.g2};
  }
`;

export const ResultBtn = styled(Button)`
  &.on {
    background-color: ${(props) => props.theme.color.primary.main};
  }
`;

export const ErrorMessage = styled.p`
  font-size: ${(props) => props.theme.fontSize.lv7};
  color: ${(props) => props.theme.color.text.red};
  margin-top: 6px;
`;

export const LoginValue = styled.div`
  margin: 30px 34px 0;
`;
