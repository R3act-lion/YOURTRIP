import React from 'react'
import styled from "styled-components"
import profile from '../../assets/images/profile.svg'

const Contaier= styled.div`
  height: 61px;
  padding: 12px 20px 16px;
  border-top: 1px solid #B8B8B8;
`

const CommentUploadImg= styled.img`
  width: 36px;
  height: 36px;
  margin-right: 18px;
  border-radius: 50%;
`

const CommentInput= styled.input`
  color: #5B5B5B;
  border: none;
  font-size: 14px;
  padding: 10px 0;
  position: relative;
  bottom: 12px;
`

const CommentUploadBtn= styled.button`
  float: right;
  color: #5B5B5B;
  border: none;
  position: relative;
  top: 8px;
  background-color: #fff;
  font-size: 14px;
  font-weight: 500;
`

export default function CommentUpload() {
  return (
    <Contaier>
        <CommentUploadImg src={profile}/>
        <CommentInput value="댓글 입력하기..." required/>
        <CommentUploadBtn>게시</CommentUploadBtn>
    </Contaier>
  )
}
