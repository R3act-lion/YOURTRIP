import * as S from "./style"

export default function CommuCotactImg({image}) {
  return (
    <S.ContactImgItem>
        <S.ItemImage src={image} />
    </S.ContactImgItem>
  )
}
