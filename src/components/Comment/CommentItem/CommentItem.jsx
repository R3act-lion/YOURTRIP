import { React, useState } from 'react'
import styled from 'styled-components'
import IconMore from '../../../assets/images/icon-more.svg'
import MyCommentModal from '../../Modal/MyCommentModal'
import YourCommentModal from '../../Modal/YourCommentModal'
import UserDesc from '../../UserDesc/UserDesc'

const DivTop = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
`

const ImageMost = styled.img`
    width: 20px;
    height: 20px;
    vertical-align: top;
    margin-left: auto;
    cursor: pointer;
`

const ParagraphContent = styled.p`
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
`

export default function CommentItem({ user, content, postId, commentId }) {
    let [myCommentModal, setMyCommentModal]= useState(false);
    let [yourCommentModal, setYourCommentModal]= useState(false);
    const commentAuthor= user.accountname;
    const accountname= localStorage.getItem("user ID");
    console.log(user)
    
    return (
        <>
            <DivTop>
                <UserDesc img={user.image} name={user.username} id={user.accountname} />
                <ImageMost src={IconMore} alt='더보기' 
                    onClick={()=>{
                        commentAuthor === accountname 
                            ? setMyCommentModal(true)
                            : setYourCommentModal(true)}}
                />

            </DivTop>
            <ParagraphContent>
                {content}

            </ParagraphContent>
            {myCommentModal === true 
                ? <MyCommentModal setMyCommentModal={setMyCommentModal} postId={postId} commentId={commentId}/> 
                : null}

            {yourCommentModal === true
                ? <YourCommentModal setYourCommentModal={setYourCommentModal}/>
                : null}
        </>
    )
}