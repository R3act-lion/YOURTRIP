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

export default function CommentItem() {
    return (
        <>
            <DivTop>
                <UserDesc />
                <ImageMost src={IconMore} alt='더보기' />
            </DivTop>
            <ParagraphContent>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit, quis eum veritatis et ipsa officiis officia harum earum, optio cumque facilis repellat iusto blanditiis, unde quae explicabo enim architecto natus?
            </ParagraphContent>
        </>
    )
}