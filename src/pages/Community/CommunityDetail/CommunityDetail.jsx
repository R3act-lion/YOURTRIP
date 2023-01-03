import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useLocation, useNavigate, useParams } from 'react-router'
import { DivPost, ImageMore, DivContent, ParagraphContent, ImageContent, ImageAdditional, ParagraphAdditional, ParagraphTime } from '../../../components/Post/PostItem/PostItem'
import UserDesc from '../../../components/UserDesc/UserDesc'
import MoreImg from '../../../assets/images/icon-more.svg'
import HeartImg from '../../../assets/images/icon-heart.svg'
import CommentImg from '../../../assets/images/icon-comment.svg'
import Carousel from '../../../components/Carousel/Carousel'
import PlaceCommentListItem from '../../../components/Comment/PlaceComment/PlaceCommentListItem'
import WritePlaceComment from '../../../components/Comment/WritePlaceComment/WritePlaceComment'

const DivWrite = styled.div`
    /* margin-left: -20px; */
    margin-top: 24px;
    border-top: 1px solid #DBDBDB;
`

const ListComment = styled.ul`
    padding: 4px 14px;
`

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
    // console.log(postContent);
    // console.log(postWriter);
    // console.log(postData);

    const imageData = postData.image.split(',');
    const createdAt = postData.createdAt.split('-');

    const [comments, setComments] = useState([]);
    const [updateTarget, updateState] = useState([]);

    console.log(comments);

    useEffect(() => {
        getComments(postData.id, setComments)
    }, [updateTarget])

    return (
        <>
            {
                <>
                    <DivPost>
                        <UserDesc img={postWriter.image} name={postWriter.username} id={postWriter.accountname} />
                        <ImageMore src={MoreImg} alt='더보기' 
                            onClick={() => {
                                accountname === authorAccountname
                                    ? setEditModal(true)
                                    : setDetailModal(true) }} />
                        <DivContent>
                            <ParagraphContent>
                                {postContent}
                            </ParagraphContent>
                            <Carousel imageData={imageData} />
                            <ImageAdditional src={HeartImg} alt='좋아요' />
                            <ParagraphAdditional>
                                {postData.heartCount}
                            </ParagraphAdditional>
                            <ImageAdditional src={CommentImg} alt='댓글' />
                            <ParagraphAdditional>
                                {comments.length}
                            </ParagraphAdditional>
                            <ParagraphTime>
                                {`${createdAt[0]}년 ${createdAt[1]}월 ${createdAt[2].slice(0, 2)}일`}
                            </ParagraphTime>
                        </DivContent>
                    </DivPost>
                    <DivWrite>
                        <ListComment>
                            {
                                comments.map((comment) => {
                                    // console.log(comment);

                                    return <PlaceCommentListItem key={comment.id} comment={comment} isPost={true} />
                                })
                                
                            }
                        </ListComment>
                        <WritePlaceComment postId={postData.id} renderFunction={updateState} />
                    </DivWrite>
                </>
            }
        </>
    )
}
