import React from 'react'
import styled from 'styled-components'
import IconMore from '../../../assets/images/icon-more.svg'
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
`

const ParagraphContent = styled.p`
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
`

export default function CommentItem({ user, content }) {
    return (
        <>
            <DivTop>
                <UserDesc img={user.image} name={user.username} id={user.accountname} />
                <ImageMost src={IconMore} alt='더보기' />
            </DivTop>
            <ParagraphContent>
                {content}
            </ParagraphContent>
        </>
    )
}