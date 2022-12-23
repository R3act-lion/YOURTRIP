import React from 'react'
import styled from 'styled-components'
import PostList from '../../components/Post/PostList/PostList'

const SectionContainer = styled.section`
    /* padding: 20px; */
`

export default function Community() {
    return (
        <SectionContainer>
            <header>
                <h2 className='irOnly'>
                    게시물
                </h2>
            </header>
            <PostList />
        </SectionContainer>
    )
}
