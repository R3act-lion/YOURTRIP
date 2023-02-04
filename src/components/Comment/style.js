import styled from "styled-components";

export const Contaier = styled.div`
  height: 61px;
  padding: 12px 20px 16px;
  border-top: 1px solid #b8b8b8;
`;

export const CommentUploadImg = styled.img`
  width: 36px;
  height: 36px;
  margin-right: 18px;
  border-radius: 50%;
`;

export const CommentInput = styled.input`
  color: #5b5b5b;
  border: none;
  font-size: 14px;
  padding: 10px 0;
  position: relative;
  bottom: 12px;
`;

export const CommentUploadBtn = styled.button`
  float: right;
  color: #5b5b5b;
  border: none;
  position: relative;
  top: 8px;
  background-color: #fff;
  font-size: 14px;
  font-weight: 500;
`;

export const Container = styled.section`
  padding: 5px 19px;
`;

export const CommentWrap = styled.section`
  border-bottom: 1px solid #dbdbdb;
`;

export const CommentProflie = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

export const CommentDiv = styled.div`
  display: flex;
`;

export const CommentImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  /* drop-shadow(1px 1px 4px rgba(0, 0, 0, 0.25)); */
`;

export const CommentName = styled.div`
  display: flex;
  flex-direction: column;
  padding: 7px 0 7px 13px;
`;

export const CommentWriter = styled.span`
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 4px;
`;

export const CommentTime = styled.span`
  font-size: 10px;
  font-weight: 400;
  color: #767676;
`;

export const CommentMoreBtn = styled.img`
  width: 20px;
  height: 20px;
  margin: 7px 0;
`;

export const CommentComments = styled.p`
  margin: 10px 0 20px;
  font-size: 14px;
  font-weight: 400;
  color: #333333;
`;

export const FormComment = styled.form`
  padding: 12px 16px;
  width: 390px;
  display: flex;
  position: fixed;
  bottom: 60px;
  background-color: white;
`;

export const ImageProfile = styled.img`
  width: 36px;
  height: 36px;
  vertical-align: top;
  margin-right: 16px;
`;

export const InputComment = styled.input`
  border: 0;
  outline: 0;
  flex-grow: 1;
`;
