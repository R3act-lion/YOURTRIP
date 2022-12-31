import { React } from 'react'
import styled from 'styled-components'
import UserDesc from '../../UserDesc/UserDesc'
import MoreImg from '../../../assets/images/icon-more.svg'
import HeartImg from '../../../assets/images/icon-heart.svg'
import CommentImg from '../../../assets/images/icon-comment.svg'
import { useNavigate } from 'react-router'

export const DivPost = styled.div`
    position: relative;
    padding: 20px;
`

export const ImageMore = styled.img`
    position: absolute;
    top: 30px;
    right: 20px;
`

export const DivContent = styled.div`
    padding-left: 54px;
    margin-top: 16px;
`

export const ParagraphContent = styled.p`
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    margin-bottom: 15px;
`

export const ImageContent = styled.img`
    width: 290px;
    height: 228px;
    vertical-align: top;
    margin-bottom: 15px;
    border-radius: 10px;
    flex-shrink: 0;
`

export const ImageAdditional = styled.img`
    width: 15px;
    height: 15px;
    vertical-align: middle;
    margin-right: 8px;
`

export const ParagraphAdditional = styled.p`
    display: inline-block;
    font-weight: 400;
    font-size: 12px;
    line-height: 12px;
    color: #767676;
    margin-right: 18px;
`

export const ParagraphTime = styled.p`
    font-weight: 400;
    font-size: 10px;
    line-height: 12px;
    color: #767676;
    margin-top: 18px;
`

export default function PostItem({feedData}) {
    const navigate= useNavigate();

    return (
        <>
        {feedData.map((item,index)=>{
                const imageData= item.image.split(',');
                const createdAt = item.createdAt.split('-');

                return(
                <li onClick={()=>{navigate(`/post/${index}`, {state: {postDetail:feedData}} )}} key={item.id}>
                <DivPost>
                    <UserDesc img={item.author.image} name={item.author.username} id={item.author.accountname}/>
                    <ImageMore src={MoreImg} alt='더보기'/>
                    <DivContent>
                        <ParagraphContent>
                            {item.content}
                        </ParagraphContent>
                        {(imageData != '') &&
                            <ImageContent src={imageData[0]} alt='' />
                        }
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
            )
        })} 
        </>
    )
}