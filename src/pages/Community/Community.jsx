import { React, useState } from 'react'
import styled from 'styled-components'
import PostList from '../../components/Post/PostList/PostList'

const SectionContainer = styled.section`
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
