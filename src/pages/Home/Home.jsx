import React from 'react'
import styled from 'styled-components'

import RecommendList from '../../components/SlideList/RecommendList/RecommendList'
import SimplePlaceList from '../../components/SlideList/SimplePlaceList/SimplePlaceList'
import PostList from '../../components/SlideList/PostList/PostList'

const SectionRecommend = styled.section`
    padding-top: 28px;
`

const SectionMost = styled.section`
    padding-top: 30px;
`

const HeadingTwoTitle = styled.h2`
    font-size: 22px;
    font-weight: 700;
    line-height: 28px;
    margin-bottom: 15px;
    padding-left: 16px;
`

export default function Home() {
    window.scrollTo(0,0)

    return (
        <>
            <SectionRecommend>
                <HeadingTwoTitle>
                    오늘의 고양이
                </HeadingTwoTitle>
                <RecommendList />
            </SectionRecommend>
            <SectionMost>
                <HeadingTwoTitle>
                    많이 찾는 고양이
                </HeadingTwoTitle>
                <SimplePlaceList />
            </SectionMost>
            <PostList />
        </>
    )
}