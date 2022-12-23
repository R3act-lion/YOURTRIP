import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import IconArrowRight from '../../../assets/images/icon-arrow-right.svg'
import PostListItem from './PostListItem'

const SectionPost = styled.section`
    padding: 28px 0;
`

const HeaderCommunidty = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 28px 15px 16px;
`

const HeadingTwoTitle = styled.h2`
    font-weight: 700;
    font-size: 22px;
    line-height: 28px;
`

const ImageTitle = styled.img`
    width: 10px;
    height: 18px;
`

const ListPost = styled.ul`
    width: 100%;
    overflow-x: scroll;
    padding: 2px 22px;
    display: flex;
    justify-content: space-between;
    gap: 8px;
    touch-action: pan-x;

    &::-webkit-scrollbar {
        display: none;
    }
`

export default function PostList() {
    const content = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure reiciendis distinctio rerum ducimus, eius ipsum quibusdam maxime praesentium. Dolorem eum quas perspiciatis commodi iste? Impedit praesentium corrupti numquam eaque nulla.';

    return (
        <SectionPost>
            <Link to='/'>
                <HeaderCommunidty>
                    <HeadingTwoTitle>우리의 이야기</HeadingTwoTitle>
                    <ImageTitle src={IconArrowRight} alt='' />
                </HeaderCommunidty>
            </Link>
            <ListPost>
                <PostListItem content={content} />
                <PostListItem content={content} />
                <PostListItem content={content} />
            </ListPost>
        </SectionPost>
    )
}
