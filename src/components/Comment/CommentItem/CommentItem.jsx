import { React, useState } from 'react'
import IconMore from '../../../assets/images/icon-more.svg'
import MyCommentModal from '../../Modal/MyCommentModal'
import YourCommentModal from '../../Modal/YourCommentModal'
import UserDesc from '../../UserDesc/UserDesc'
import * as S from "./style"

export default function CommentItem({ user, content, postId, commentId }) {
    let [myCommentModal, setMyCommentModal]= useState(false);
    let [yourCommentModal, setYourCommentModal]= useState(false);
    const commentAuthor= user.accountname;
    const accountname= localStorage.getItem("user ID");

    return (
        <>
            <S.DivTop>
                <UserDesc img={user.image} name={user.username} id={user.accountname} />
                <S.ImageMost src={IconMore} alt='더보기' 
                    onClick={()=>{
                        commentAuthor === accountname 
                            ? setMyCommentModal(true)
                            : setYourCommentModal(true)}}
                />

            </S.DivTop>
            <S.ParagraphContent>
                {content}

            </S.ParagraphContent>
            {myCommentModal === true 
                ? <MyCommentModal setMyCommentModal={setMyCommentModal} postId={postId} commentId={commentId}/> 
                : null}

            {yourCommentModal === true
                ? <YourCommentModal setYourCommentModal={setYourCommentModal}/>
                : null}
        </>
    )
}