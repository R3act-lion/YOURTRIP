import React from 'react'
import styled from 'styled-components'

const ListItemSelected = styled.li`
    flex-basis: 77px;
    flex-shrink: 0;
    border-radius: 5px;
    overflow: hidden;
`

const ImageSelected = styled.img`
    width: 100%;
    height: 77px;
    margin-bottom: 5px;
`

const ParagraphTitle = styled.p`
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
`

export default function SelectedListItem({place}) {
    return (
        <ListItemSelected>
            <ImageSelected src={place.firstimage} alt='' />
            <ParagraphTitle>
                {place.title}
            </ParagraphTitle>
        </ListItemSelected>
    )
}