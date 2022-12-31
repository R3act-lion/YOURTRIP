import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useLocation, useParams } from 'react-router'
import { DivPost, ImageMore, DivContent, ParagraphContent, ImageContent, ImageAdditional, ParagraphAdditional, ParagraphTime } from '../../../components/Post/PostItem/PostItem'
import UserDesc from '../../../components/UserDesc/UserDesc'
import MoreImg from '../../../assets/images/icon-more.svg'
import HeartImg from '../../../assets/images/icon-heart.svg'
import CommentImg from '../../../assets/images/icon-comment.svg'
import Carousel from '../../../components/Carousel/Carousel'


export default function CommunityDetail({ postId, postData }) {
  const item = postData[postId];
  const imageData= item.image.split(',');
  const createdAt = item.createdAt.split('-');

  return (
    <>
      <li>
        <DivPost>
            <UserDesc img={item.author.image} name={item.author.username} id={item.author.accountname}/>
            <ImageMore src={MoreImg} alt='더보기'/>
            <DivContent>
                <ParagraphContent> 
                    {item.content}
                </ParagraphContent>
                <Carousel imageData={imageData}/>
                <ImageAdditional src={HeartImg} alt='좋아요' />
                <ParagraphAdditional>
                    {item.heartCount}
                </ParagraphAdditional>
                <ImageAdditional src={CommentImg} alt='댓글' />
                <ParagraphAdditional>
                    {item.commentCount}
                </ParagraphAdditional>
                <ParagraphTime>
                    {`${createdAt[0]}년 ${createdAt[1]}월 ${createdAt[2].slice(0,2)}일`}
                </ParagraphTime>
            </DivContent>
        </DivPost>
      </li>
    </>
  )
}
