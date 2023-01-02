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

const ListItemPostComment = styled.li`
    padding: 20px 10px;
    position: relative;

    & + li {
        padding-top: -20px;
    }
`

export default function PlaceCommentListItem({ comment, isPost }) {
    // console.log(writerData,'데이터입니다')

    if (isPost) {
        console.log(comment);

        return (
            <ListItemPostComment>
                <CommentItem user={comment.author} content={comment.content} />
            </ListItemPostComment>
        )
    }
    else {
        const writerData = JSON.parse(comment.link.replaceAll(/\(/g, '{').replaceAll(/\)/g, '}'));

        return (
            <ListItemComment>
                <CommentItem user={writerData} content={comment.itemImage} />
            </ListItemComment>
        )
    }

}