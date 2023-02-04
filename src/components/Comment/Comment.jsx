import icon_more from '../../assets/images/icon-more.svg'
import profile from '../../assets/images/profile.svg'
import * as S from "./style"

export default function Comment() {
        return(
            <S.Container>
            {['서귀포시 무슨 농장','감귤러버','귤은맛있어'].map((name)=>{
              return(
                <S.CommentWrap>
                  <S.CommentProflie>
                    <S.CommentDiv>
                    <S.CommentImg src={profile}/>     
                    <S.CommentName>
                      <S.CommentWriter>{name}</S.CommentWriter>
                      <S.CommentTime>5분전</S.CommentTime>
                    </S.CommentName>
                    </S.CommentDiv>
                    <S.CommentMoreBtn src={icon_more} />
                    
                  </S.CommentProflie>
                  <S.CommentComments>
                    해피초원목장 좋아요~ 해피초원목장 좋아요~ 해피초원목장 좋아요~ 해피초원목장 좋아요~ 해피초원목장 좋아요~ 해피초원목장 좋아요~ 해피초원목장 좋아요~ 해피초원목장 좋아요~ 
                  </S.CommentComments>
                </S.CommentWrap>
              )
            })}    
          </S.Container>
        )
}
