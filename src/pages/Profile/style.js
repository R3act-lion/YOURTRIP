import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  margin: 30px auto;
  width: 390px;
  height: 950px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const ProfileImgDiv = styled.div`
  position: relative;
  margin: 0 auto;
  position: relative;
  margin-bottom: 30px;
`;

export const UploadImg = styled.img`
  width: 110px;
  height: 110px;
  border-radius: 50%;
`;

export const ResultValue = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

export const ResultTitle = styled.label`
  margin: 15px 0 10px;
  color: #767676;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
`;

export const NameInput = styled.input`
  padding-bottom: 5px;
  border: none;
  border-bottom: 1px solid #dbdbdb;
  margin-bottom: 10px;
  font-size: 14px;
  ::placeholder {
    color: #dbdbdb;
  }
  :focus {
    outline: none;
    border-bottom: 1px solid #3c70bc;
  }
`;

export const IdInput = styled.input`
  padding-bottom: 5px;
  border: none;
  border-bottom: 1px solid #dbdbdb;
  margin-bottom: 10px;
  font-size: 14px;
  ::placeholder {
    color: #dbdbdb;
  }
  :focus {
    outline: none;
    border-bottom: 1px solid #3c70bc;
  }
`;

export const IntroInput = styled.input`
  width: 322px;
  padding-bottom: 5px;
  margin-bottom: 30px;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid #dbdbdb;
  ::placeholder {
    color: #dbdbdb;
  }
  :focus {
    outline: none;
    border-bottom: 1px solid #3c70bc;
  }
`;

export const ErrorMessage = styled.p`
  font-size: 12px;
  color: red;
  margin: 0;
  padding: 0;
`;

export const SectionFollowers = styled.section`
  padding: 24px 16px;
`;

export const ListItemFollowers = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & + li {
    margin-top: 20px;
  }
`;

export const SectionModity = styled.section`
  padding: 30px 35px;
  position: relative;
`;

export const FormPost = styled.form`
  text-align: left;
`;

export const LabelInput = styled.label`
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  color: #767676;
`;

export const InputUser = styled.input`
  width: 100%;
  line-height: 30px;
  border: 0;
  outline: 0;
  color: black;
  border-bottom: 1px solid #dbdbdb;
  margin-bottom: 15px;

  &::placeholder {
    color: #dbdbdb;
  }
`;

export const DivPlaceSelect = styled.div`
  width: 322px;
  height: 136px;
  position: relative;
  background: #fbfbfb;
  margin-top: 15px;
  border: 1px solid #dbdbdb;
  border-radius: 10px;
  padding: 18px 0;
`;

export const LinkAddPlace = styled(Link)`
  position: absolute;
  right: 8px;
  bottom: 5px;
`;

export const ImageAdd = styled.img`
  width: 32px;
  height: 32px;
`;

export const ButtonSave = styled.button`
  width: 90px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: #c9d9f0;
  border-radius: 32px;
  font-weight: 500;
  font-size: 14px;
  position: fixed;
  top: 8px;
  right: calc(50vw - 179px);
  z-index: 30;
  cursor: pointer;
  &.on {
    background-color: ${(props) => props.theme.color.primary.main};
  }
`;

export const SectionList = styled.section`
  padding: 30px 22px;
`;

export const HeadingTwoTitle = styled.h2`
  font-weight: 500;
  font-size: 20px;
  line-height: 14px;
`;

export const FormSearch = styled.form`
  position: relative;
  margin-bottom: 30px;
`;

export const InputSearch = styled.input`
  width: 316px;
  height: 32px;
  background-color: #f2f2f2;
  border-radius: 32px;
  margin-top: 15px;
  border: 0;
  outline: 0;
  color: black;
  padding: 0 13px;
`;

export const ButtonSearch = styled.button`
  position: absolute;
  right: 40px;
  top: 20px;
  background-color: rgba(0, 0, 0, 0);
  cursor: pointer;
`;

export const ImageSearch = styled.img`
  width: 20px;
  height: 20px;
  vertical-align: top;
`;

export const ParagraphResult = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 14px;
  margin-bottom: 20px;
`;

export const ListResult = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const ListItemResult = styled.li`
  display: flex;
  align-items: center;

  & + li {
    margin-top: 15px;
  }
`;

export const ImageResult = styled.img`
  width: 77px;
  height: 77px;
  object-fit: cover;
  margin-right: 10px;
  border-radius: 5px;
`;

export const ParagraphName = styled.p`
  font-weight: 500;
  font-size: 20px;
  line-height: 25px;
  margin-bottom: 8px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
`;

export const ParagraphDesc = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;
  color: #676767;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
`;

export const ButtonCheck = styled.button`
  width: 32px;
  margin-left: auto;
  margin-right: 11px;
`;

export const ImageCheck = styled.img`
  flex-grow: 1;
`;
