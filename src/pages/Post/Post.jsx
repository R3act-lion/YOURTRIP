import { React, useState } from 'react'
import styled from 'styled-components'
import PostCommentList from '../../components/Comment/PostComment/PostCommentList'
import WriteComment from '../../components/Comment/WriteComment/WriteComment'
import { useLocation } from 'react-router'
import CommunityDetail from '../Community/CommunityDetail/CommunityDetail'
import DetailModal from '../../components/Modal/DetailModal'
import EditModal from '../../components/Modal/EditModal'

const SectionContainer = styled.section`
    min-height: calc(100vh - 108px);
    margin-bottom: 61px;
`

export default function Post() {
    window.scroll(0, 0);
    const location = useLocation();
    let [detailModal, setDetailModal] = useState(false);
    let [editModal, setEditModal]= useState(false);
    
    const accountname= localStorage.getItem("user ID");
    const authorAccountname= (JSON.parse(JSON.parse
        (location.state.postDetail.content.slice(14).replaceAll(/\(/g, '{').replaceAll(/\)/g, '}')).user)).accountname;


    return (
        <SectionContainer>
            <header>
                <h2 className='irOnly'>
                    게시물 상세 페이지
                </h2>
            </header>
            <CommunityDetail 
                postContent={location.state.content} 
                postWriter={location.state.writer} 
                postData={location.state.postDetail} 
                setDetailModal={setDetailModal} 
                setEditModal={setEditModal}
                accountname={accountname}
                authorAccountname={authorAccountname} />
            {/* <PostCommentList/>
            <WriteComment /> */}

            {detailModal === true
                ? <DetailModal setDetailModal={setDetailModal} />
                : null}
                
            {editModal === true
                ? <EditModal setEditModal={setEditModal}/>
                : null}          

        </SectionContainer>
    )
}
