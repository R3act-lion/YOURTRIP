import CommuComentButton from '../CommuComentButton/CommuComentButton'
import CommuCotactImg from '../CommuDetailContent/CommuCotactImg'
import CommuHeartButton from '../CommuHeartButton/CommuHeartButton'
import CommuImgProfile from '../CommuprofileImg/CommuprofileImg'
import * as S from "./style"

export default function CommuDetailContent({ item : name, id, content, date}) {
    return (
      <>
      <S.Container>
      <CommuImgProfile/>
      <S.ComContact>
        <S.HeaderTitle>{name}</S.HeaderTitle>
        <S.HeaderId>@ {id}</S.HeaderId>
        <S.ContactText>{content}</S.ContactText>
        <CommuCotactImg/>
        <S.ContactEtc>
          <CommuHeartButton/>
          <S.AddText>58</S.AddText>
          <CommuComentButton/>
          <S.AddText>12</S.AddText>
        </S.ContactEtc>
        <S.DateText>{date}</S.DateText>
      </S.ComContact>
      </S.Container>
      </>
    )
  }