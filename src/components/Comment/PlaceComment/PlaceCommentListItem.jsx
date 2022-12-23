import React from 'react'
import styled from 'styled-components'
import CommentItem from '../CommentItem/CommentItem'

const ListItemComment = styled.li`
    padding: 20px 10px;
    position: relative;

    & + li {
        border-top: 1px solid #DBDBDB;
    }
`

export default function PostCommentList() {
    return (
        <ListItemComment>
            <CommentItem />
        </ListItemComment>
    )
}