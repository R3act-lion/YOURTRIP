import { React } from 'react'
import styled from 'styled-components'
import CommuWritingButton from '../../components/CommuWritingButton/CommuWritingButton'
import PostList from '../../components/Post/PostList/PostList'

const SectionContainer = styled.section`
    width: 390px;
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
            {
                localStorage.getItem('user')
                ?<CommuWritingButton/>
                : <></>
            }
        </SectionContainer>
    )
}
