import React from 'react'
import styled from 'styled-components'
import Imgsircle from '../../../assets/GyuminImg/Profile.png'
import contactimg from '../../../assets/GyuminImg/contact1.png'
import heartimg from '../../../assets/GyuminImg/Heart.svg'
import commentimg from '../../../assets/GyuminImg/comment.svg'
import detailsbutton from '../../../assets/GyuminImg/triple.png'
import uploadbutton from '../../../assets/GyuminImg/button.png'


const MainTitle = styled.h1`
    font-weight: 500;
    font-size: 24px;
    line-height: 30px;
    color:#000000;
`

export default function HeaderTitle() {
  return (
    <>
      <Container>
        <ProfileImg />
        <ComContact>
          <HeaderTitle>애월읍 위니브 감귤농장</HeaderTitle>
          <HeaderId>@ weniv_Mandarin</HeaderId>
          <ContactText>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi sint modi aspernatur quas, consequatur illum libero quisquam recusandae ducimus quae quo tempora, deleniti sed, voluptas aliquid fugiat dolore inventore aut.
            Soluta veritatis numquam modi consequatur! Dolorum laboriosam perspiciatis quo odit impedit tempora, quae repellat eum aspernatur rem quisquam. Pariatur enim voluptates repellat eligendi veritatis perspiciatis ratione vero, fugiat impedit assumenda!</ContactText>
          <ContactImg />
          <ContactEtc>
            <HeartImg />
            <AddText>58</AddText>
            <CommentImg />
            <AddText>12</AddText>
          </ContactEtc>
          <DateText>2020년 10월 21일</DateText>
        </ComContact>
        <DetailsButton />
      </Container>
      <UploadButton />
    </>
  )
}

