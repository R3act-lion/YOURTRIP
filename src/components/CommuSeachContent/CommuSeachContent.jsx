import React from 'react'
import styled from 'styled-components'
import CommuHeartButton from '../CommuHeartButton/CommuHeartButton'
import CommuComentButton from '../CommuComentButton/CommuComentButton'
import CommuSeachImg from './CommuSeachImg'


const Container = styled.div`
    padding-top: 25px;
    width: 390px;
    text-align: center;
    background-color: #FFFFFF;
`

const ComContact = styled.div`
    margin-left: 30px;
    margin-right: 30px;
    padding-top: 50px;
    text-align: left;
`

const SearchTitle = styled.h1`
    display: inline;
    font-size: 16px;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color:#3C70BC;
`

const ContactText = styled.p`
    margin-left: 3px;
    display: inline;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
`


const ContactEtc = styled.div`
  display: flex;
  align-items: center;
  margin-top: 16px;
`


const AddText = styled.p`
  margin-left: 6px;
  margin-right: 16px;
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;
  color: #767676;
` 

const DateText = styled.p`
  margin-top: 14px;
  text-align: left;
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;
  color: #767676;
  
`



export default function CommuSeachContent({item : title,content,date}) {
  return (
    <Container>
        <ComContact>
        <SearchTitle>{title}</SearchTitle>
        <ContactText>{content}</ContactText> 
        <CommuSeachImg/>
      <ContactEtc>
        <CommuHeartButton/>
        <AddText>58</AddText>
        <CommuComentButton/>
        <AddText>12</AddText>
      </ContactEtc>
      <DateText>{date}</DateText>
      </ComContact>
      </Container>    
  )
}
