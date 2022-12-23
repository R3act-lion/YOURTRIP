import React from 'react'
import styled from 'styled-components'
import PostCommentListItem from './PostCommentListItem'

const ListComment = styled.ul`
    padding: 5px 19px;
    border-top: 1px solid #DBDBDB;
`

export default function PostCommentList() {
    return (
        <ListComment>
            <PostCommentListItem />
            <PostCommentListItem />
            <PostCommentListItem />
        </ListComment>
    )
}