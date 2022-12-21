import React from 'react'
import styled from 'styled-components'
import IconCOmmunity from '../../../assets/images/icon-community-mini.svg'

const CommuintyListItem = styled.li`
    flex-basis: 166px;
    flex-shrink: 0;
    height: 147px;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    padding: 12px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const ItemContent = styled.p`
    font-weight: 400;
    font-size: 14px;
    line-height: 160%;
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
`

const ItemImage = styled.img`
    width: 16px;
`

export default function PostListItem({content}) {
    return (
        <CommuintyListItem>
            <ItemContent>
                {content}
            </ItemContent>
            <ItemImage src={IconCOmmunity} alt='' />
        </CommuintyListItem>
    )
}