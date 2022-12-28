import React from 'react'
import styled from 'styled-components'
import PlaceCommentListItem from './PlaceCommentListItem'

const ListComment = styled.ul`
    padding: 5px 19px 65px;
`

export default function PlaceCommentList() {
    return (
        <ListComment>
            <PlaceCommentListItem />
            <PlaceCommentListItem />
            <PlaceCommentListItem />
        </ListComment>
    )
}
