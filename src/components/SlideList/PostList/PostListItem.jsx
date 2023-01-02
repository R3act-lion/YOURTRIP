import React from 'react'
import styled from 'styled-components'
import IconCOmmunity from '../../../assets/images/icon-community-mini.svg'
import { useNavigate } from 'react-router-dom'

const ListItemCommunity = styled.li`
    flex-basis: 166px;
    flex-shrink: 0;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
`

const DivCommunity = styled.div`
    height: 147px;
    padding: 12px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const ParagraphContent = styled.p`
    font-weight: 400;
    font-size: 14px;
    line-height: 160%;
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
`

const ImageCommunity = styled.img`
    width: 16px;
`

export default function PostListItem({ content, writer, feedData }) {
    const navigate = useNavigate();

    return (
        <ListItemCommunity onClick={() => { navigate(`/post/${feedData.id}`, { state: { postDetail: feedData, writer: writer, content: content } }) }}>
            <DivCommunity>
                <ParagraphContent>
                    {content}
                </ParagraphContent>
                <ImageCommunity src={IconCOmmunity} alt='' />
            </DivCommunity>
        </ListItemCommunity>
    )
}