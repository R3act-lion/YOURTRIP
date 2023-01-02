import { React, useState } from 'react'
import styled from 'styled-components'
import PostCommentList from '../../components/Comment/PostComment/PostCommentList'
import WriteComment from '../../components/Comment/WriteComment/WriteComment'
import { useLocation, useParams } from 'react-router'
import CommunityDetail from '../Community/CommunityDetail/CommunityDetail'
import DetailModal from '../../components/Modal/DetailModal'

const SectionContainer = styled.section`
    min-height: calc(100vh - 108px);
    margin-bottom: 61px;
`

export default function Post() {
    window.scroll(0, 0);
    const location = useLocation();
    let [detailModal, setDetailModal] = useState(false);

    // console.log(location.state);

    return (
        <SectionContainer>
            <header>
                <h2 className='irOnly'>
                    게시물 상세 페이지
                </h2>
            </header>
            <CommunityDetail postContent={location.state.content} postWriter={location.state.writer} postData={location.state.postDetail} setDetailModal={setDetailModal} />
            {/* <PostCommentList/>
            <WriteComment /> */}
            {detailModal === true
                ? <DetailModal setDetailModal={setDetailModal} />
                : null}

        </SectionContainer>

    )
}
