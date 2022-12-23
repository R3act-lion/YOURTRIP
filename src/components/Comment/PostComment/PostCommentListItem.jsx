import React from 'react'
import styled from 'styled-components'
import CommentItem from '../CommentItem/CommentItem'

const ListItemComment = styled.li`
    padding: 20px 10px 0;
    position: relative;
`

export default function PostCommentListItem() {
    return (
        <ListItemComment>
            <CommentItem />
        </ListItemComment>
    )
}