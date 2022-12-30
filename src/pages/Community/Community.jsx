import { React, useState } from 'react'
import styled from 'styled-components'
import PostList from '../../components/Post/PostList/PostList'

const SectionContainer = styled.section`
    /* padding: 20px; */
`
const Modal= styled.section`
    border-radius: 10px;
    height: 110px;
`

export default function Community({modal}) {
    return (
        <SectionContainer>
            <header>
                <h2 className='irOnly'>
                    게시물
                </h2>
            </header>
            <PostList />
            {/* 모달창 띄우는 기능 안되어서 해결해야 함 */}
            {modal === true ? <Modal>모달입니다 </Modal> : null}      
        </SectionContainer>
    )
}
