import React from 'react'
import styled from 'styled-components'
import commentimg from '../../assets/images/icon-comment.svg'


const CommentBtn = styled.button`
  background-image: url(${commentimg});
  width:18px;
  height:18px; 
  cursor: pointer;
  background-color: #FFFFFF;
  border:none;
`

export default function CommuComentButton() {
  return (
    <><CommentBtn/></>
  )
}
