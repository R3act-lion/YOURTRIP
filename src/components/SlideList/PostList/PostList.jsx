import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import IconArrowRight from '../../../assets/images/icon-arrow-right.svg'
import PostListItem from './PostListItem'

const SectionLink = styled(Link)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 28px 15px 16px;
`

const SectionTitle = styled.h2`
    font-weight: 700;
    font-size: 22px;
    line-height: 28px;
`

const TitleImage = styled.img`
    width: 10px;
    height: 18px;
`

const SlideList = styled.ul`
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
        <section>
            <header>
                <SectionLink to='/'>
                    <SectionTitle>우리의 이야기</SectionTitle>
                    <TitleImage src={IconArrowRight} alt='' />
                </SectionLink>
            </header>
            <SlideList>
                <PostListItem content={content} />
                <PostListItem content={content} />
                <PostListItem content={content} />
            </SlideList>
        </section>
    )
}
