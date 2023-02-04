import profile from '../../assets/images/profile.svg'
import * as S from "./style"

export default function CommentUpload() {
  return (
    <S.Contaier>
        <S.CommentUploadImg src={profile}/>
        <S.CommentInput value="댓글 입력하기..." required/>
        <S.CommentUploadBtn>게시</S.CommentUploadBtn>
    </S.Contaier>
  )
}
