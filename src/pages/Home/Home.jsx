import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { asyncGetPlaceData } from '../../store/Data'

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
    window.scrollTo(0, 0)

    const { placeData } = useSelector(state => state.placeData);

    return (
        <>
            <SectionRecommend>
                <HeadingTwoTitle>
                    오늘의 추천
                </HeadingTwoTitle>
                {
                    !!placeData.today_recommended
                    ? <RecommendList selectedItem={placeData.today_best.list} />
                    : <></>
                }
            </SectionRecommend>
            <SectionMost>
                <HeadingTwoTitle>
                    많이 찾는 여행지
                </HeadingTwoTitle>
                <ul>
                    {
                        !!placeData.today_best
                        ? <SimplePlaceList selectedItem={placeData.today_best.list} />
                        : <></>
                    }
                </ul>
            </SectionMost>
            <PostList />
        </>
    )
}