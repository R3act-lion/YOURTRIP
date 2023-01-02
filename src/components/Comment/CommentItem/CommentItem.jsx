import { React, useState } from 'react'
import styled from 'styled-components'
import IconMore from '../../../assets/images/icon-more.svg'
import UserDesc from '../../UserDesc/UserDesc'
import CommentModal from '../../Modal/CommentModal'

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

export default function CommentItem({ user, content }) {
    let [commentModal, setCommentModal]= useState(false);
    // console.log(user)
    // console.log(content)
    
    return (
        <>
            <DivTop>
                <UserDesc img={user.image} name={user.username} id={user.accountname} />
                <ImageMost src={IconMore} alt='더보기' onClick={()=>{setCommentModal(true)}}/>

            </DivTop>
            <ParagraphContent>
                {content}

            </ParagraphContent>
            {commentModal === true ? <CommentModal setCommentModal={setCommentModal}/> : null}
        </>
    )
}