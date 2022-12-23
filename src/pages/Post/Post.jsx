import React from 'react'
import styled from 'styled-components'
import PostItem from '../../components/Post/PostItem/PostItem'
import PostCommentList from '../../components/Comment/PostComment/PostCommentList'
import WriteComment from '../../components/Comment/WriteComment/WriteComment'

const SectionContainer = styled.section`
    min-height: calc(100vh - 108px);
`

export default function Post() {
    window.scroll(0, 0);

    return (
        <SectionContainer>
            <header>
                <h2 className='irOnly'>
                    게시물 상세 페이지
                </h2>
            </header>
            <PostItem />
            <PostCommentList />
            <WriteComment />
        </SectionContainer>
    )
}
