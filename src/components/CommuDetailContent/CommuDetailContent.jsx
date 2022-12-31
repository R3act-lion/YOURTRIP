import React from 'react'
import styled from 'styled-components'
import CommuHeartButton from '../CommuHeartButton/CommuHeartButton'
import CommuComentButton from '../CommuComentButton/CommuComentButton' 
import CommuImgProfile from '../CommuprofileImg/CommuprofileImg'
import CommuCotactImg from '../CommuDetailContent/CommuCotactImg'

const Container = styled.div`
    padding-top: 50px;
    background-color: #FFFFFF;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    overflow: hidden;
    z-index: 10;
    
`

const HeaderTitle = styled.h1`
  margin-bottom: 2px;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  
`
const ComContact = styled.section`
  margin-top: 25px;
  display: flex;
  flex-direction: column;  
`

const HeaderId = styled.h1`
  margin-top: 2px;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #767676;
`

const ContactText = styled.p`
  width: 304px;
  margin-top:16px;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
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
  margin-top: 20px;
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;
  color: #767676;
  margin-bottom: 0;
`


export default function CommuDetailContent({ item : name, id, content, date}) {
    return (
      <>
      <Container>
      <CommuImgProfile/>
      <ComContact>
        <HeaderTitle>{name}</HeaderTitle>
        <HeaderId>@ {id}</HeaderId>
        <ContactText>{content}</ContactText>
        <CommuCotactImg/>
        <ContactEtc>
          <CommuHeartButton/>
          <AddText>58</AddText>
          <CommuComentButton/>
          <AddText>12</AddText>
        </ContactEtc>
        <DateText>{date}</DateText>
      </ComContact>
      </Container>
      </>
    )
  }