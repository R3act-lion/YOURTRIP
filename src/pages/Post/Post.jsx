import React from 'react'
import styled from 'styled-components'
import PostItem from '../../components/Post/PostItem/PostItem'
import PostCommentList from '../../components/Comment/PostComment/PostCommentList'
import WriteComment from '../../components/Comment/WriteComment/WriteComment'
import { useLocation, useParams } from 'react-router'
import CommunityDetail from '../Community/CommunityDetail/CommunityDetail'

const SectionContainer = styled.section`
    min-height: calc(100vh - 108px);
`

export default function Post() {
    window.scroll(0, 0);
    const location = useLocation();
    const data= location.state.postDetail;

    let {id} = useParams();

    return (
        <SectionContainer>
            <header>
                <h2 className='irOnly'>
                    게시물 상세 페이지
                </h2>
            </header>
            <CommunityDetail postId={id} postData={data}/>
            <PostCommentList />
            <WriteComment />
        </SectionContainer>
    )
}
