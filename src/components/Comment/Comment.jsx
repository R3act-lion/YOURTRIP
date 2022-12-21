import React from 'react'
import styled from 'styled-components'
import profile from '../../assets/images/profile.svg'
import icon_more from '../../assets/images/icon-more.svg'

const Container= styled.section`
  padding: 5px 19px; 
  
`

const CommentWrap= styled.section`
  border-bottom: 1px solid #dbdbdb;
`

const CommentProflie= styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`

const CommentDiv=styled.div`
  display: flex;
`

const CommentImg= styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  drop-shadow(1px 1px 4px rgba(0, 0, 0, 0.25));
`

const CommentName= styled.div`
  display: flex;
  flex-direction: column;
  padding: 7px 0 7px 13px;
`

const CommentWriter= styled.span`
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 4px;
`

const CommentTime= styled.span`
  font-size: 10px;
  font-weight: 400;
  color: #767676;
`

const CommentMoreBtn= styled.img`
  width: 20px;
  height: 20px;
  margin: 7px 0;
  
`

const CommentComments= styled.p`
  margin: 10px 0 20px;
  font-size: 14px;
  font-weight: 400;
  color: #333333;
`

export default function Comment() {
        return(
            <Container>
            {['서귀포시 무슨 농장','감귤러버','귤은맛있어'].map((name)=>{
              return(
                <CommentWrap>
                  <CommentProflie>
                    <CommentDiv>
                    <CommentImg src={profile}/>     
                    <CommentName>
                      <CommentWriter>{name}</CommentWriter>
                      <CommentTime>5분전</CommentTime>
                    </CommentName>
                    </CommentDiv>
                    <CommentMoreBtn src={icon_more} />
                    
                  </CommentProflie>
                  <CommentComments>
                    해피초원목장 좋아요~ 해피초원목장 좋아요~ 해피초원목장 좋아요~ 해피초원목장 좋아요~ 해피초원목장 좋아요~ 해피초원목장 좋아요~ 해피초원목장 좋아요~ 해피초원목장 좋아요~ 
                  </CommentComments>
                </CommentWrap>
              )
            })}    
          </Container>
        )
}
