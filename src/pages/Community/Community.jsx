import { React } from 'react'
import CommuWritingButton from '../../components/CommuWritingButton/CommuWritingButton'
import PostList from '../../components/Post/PostList/PostList'
import * as S from "./style"

export default function Community() {
    return (
        <S.SectionContainer>
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
        </S.SectionContainer>
    )
}
