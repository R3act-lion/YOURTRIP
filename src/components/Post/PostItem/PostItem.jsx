import { React } from 'react'
import { useNavigate } from 'react-router'
import CommentImg from '../../../assets/images/icon-comment.svg'
import HeartImg from '../../../assets/images/icon-heart.svg'
import MoreImg from '../../../assets/images/icon-more.svg'
import UserDesc from '../../UserDesc/UserDesc'
import * as S from "./style"

export default function PostItem({ content, writer, feedData, setDetailMyPostModal }) {
    const navigate = useNavigate();
    const imageData = feedData.image.split(',');
    const createdAt = feedData.createdAt.split('-');

    return (
        <>
            <li onClick={() => { navigate(`/post/${feedData.id}`, { state: { postDetail: feedData, writer: writer, content: content } }) }} key={feedData.id}>
                <S.DivPost>
                    <UserDesc img={writer.image} name={writer.username} id={writer.accountname} />
                    <S.ImageMore src={MoreImg} alt='더보기' onClick={() => {
                        setDetailMyPostModal(true); 
                    }} />
                    <S.DivContent>
                        <S.ParagraphContent>
                            {content}
                        </S.ParagraphContent>
                        {(imageData != '') &&
                            <S.ImageContent src={imageData[0]} alt='' />
                        }
                        <S.ImageAdditional src={HeartImg} alt='좋아요' />
                        <S.ParagraphAdditional>
                            {feedData.heartCount}
                        </S.ParagraphAdditional>
                        <S.ImageAdditional src={CommentImg} alt='댓글' />
                        <S.ParagraphAdditional>
                            {feedData.commentCount}
                        </S.ParagraphAdditional>
                        <S.ParagraphTime>
                            {`${createdAt[0]}년 ${createdAt[1]}월 ${createdAt[2].slice(0, 2)}일`}
                        </S.ParagraphTime>
                    </S.DivContent>
                </S.DivPost>
            </li>
        </>
    )
}