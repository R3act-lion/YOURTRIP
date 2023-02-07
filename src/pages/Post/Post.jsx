import { React, useState } from 'react'
import { useLocation } from 'react-router'
import DetailModal from '../../components/Modal/DetailModal'
import EditModal from '../../components/Modal/EditModal'
import CommunityDetail from '../Community/CommunityDetail/CommunityDetail'
import * as S from "./style"

export default function Post() {
    window.scroll(0, 0);
    const location = useLocation();
    let [detailModal, setDetailModal] = useState(false);
    let [editModal, setEditModal]= useState(false);
    
    const accountname= localStorage.getItem("user ID");
    const authorAccountname= (JSON.parse(JSON.parse
        (location.state.postDetail.content.slice(14).replaceAll(/\(/g, '{').replaceAll(/\)/g, '}')).user)).accountname;

    return (
        <S.SectionContainer>
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
                ? <EditModal setEditModal={setEditModal} 
                    postId={location.state.postDetail.id}
                    writerImg={location.state.writer.image}
                    image={location.state.postDetail.image}
                    content={location.state.content}
                     />
                : null}          

        </S.SectionContainer>
    )
}
