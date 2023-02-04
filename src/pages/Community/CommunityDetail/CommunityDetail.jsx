import React, { useEffect, useState } from 'react'
import CommentImg from '../../../assets/images/icon-comment.svg'
import HeartImg from '../../../assets/images/icon-heart.svg'
import MoreImg from '../../../assets/images/icon-more.svg'
import Carousel from '../../../components/Carousel/Carousel'
import PlaceCommentListItem from '../../../components/Comment/PlaceComment/PlaceCommentListItem'
import WritePlaceComment from '../../../components/Comment/WritePlaceComment/WritePlaceComment'
import UserDesc from '../../../components/UserDesc/UserDesc'
import * as S from "../style"

const getComments = async (postId, callBack) => {
    const uploadAccount = JSON.parse(localStorage.getItem('defaultAccount'));
    const url = "https://mandarin.api.weniv.co.kr";

    try {
        const res = await fetch(url + "/post/" + postId + '/comments/?limit=10000&skip=0', {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${uploadAccount.token}`,
                "Content-Type": "application/json",
            }
        });
        const resJson = await res.json();
        callBack(resJson.comments)
    } catch (err) {
        console.error(err);
    }
}

export default function CommunityDetail({ postContent, postWriter, postData, setDetailModal, setEditModal, accountname, authorAccountname }) {

    const imageData = postData.image.split(',');
    const createdAt = postData.createdAt.split('-');

    const [comments, setComments] = useState([]);
    const [updateTarget, updateState] = useState([]);

    useEffect(() => {
        getComments(postData.id, setComments)
    }, [updateTarget])

    console.log(imageData)

    return (
        <>
            {
                <>
                    <S.DivPost>
                        <UserDesc img={postWriter.image} name={postWriter.username} id={postWriter.accountname} />
                        <S.ImageMore src={MoreImg} alt='더보기' 
                            onClick={() => {
                                accountname === authorAccountname
                                    ? setEditModal(true)
                                    : setDetailModal(true) }} />
                        <S.DivContent>
                            <S.ParagraphContent>
                                {postContent}
                            </S.ParagraphContent>
                            <Carousel imageData={imageData} />
                            <S.ImageAdditional src={HeartImg} alt='좋아요' />
                            <S.ParagraphAdditional>
                                {postData.heartCount}
                            </S.ParagraphAdditional>
                            <S.ImageAdditional src={CommentImg} alt='댓글' />
                            <S.ParagraphAdditional>
                                {comments.length}
                            </S.ParagraphAdditional>
                            <S.ParagraphTime>
                                {`${createdAt[0]}년 ${createdAt[1]}월 ${createdAt[2].slice(0, 2)}일`}
                            </S.ParagraphTime>
                        </S.DivContent>
                    </S.DivPost>
                    <S.DivWrite>
                        <S.ListComment>
                            {
                                comments.map((comment) => {
                                    console.log(comment);

                                    return <PlaceCommentListItem key={comment.id} comment={comment} isPost={true} commentId={comment.id} postId={postData.id}/>
                                })
                                
                            }
                        </S.ListComment>
                        <WritePlaceComment postId={postData.id} renderFunction={updateState} />
                    </S.DivWrite>
                </>
            }
        </>
    )
}
