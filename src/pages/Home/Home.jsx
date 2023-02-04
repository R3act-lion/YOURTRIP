import React from 'react'
import { useSelector } from 'react-redux'
import PostList from '../../components/SlideList/PostList/PostList'
import RecommendList from '../../components/SlideList/RecommendList/RecommendList'
import SimplePlaceList from '../../components/SlideList/SimplePlaceList/SimplePlaceList'
import * as S from "./style"

export default function Home() {
    window.scrollTo(0, 0)

    const { placeData } = useSelector(state => state.placeData);

    return (
        <>
            <S.SectionRecommend>
                <S.HeadingTwoTitle>
                    오늘의 추천
                </S.HeadingTwoTitle>
                {
                    !!placeData.today_recommended
                    ? <RecommendList selectedItem={placeData.today_best.list} />
                    : <></>
                }
            </S.SectionRecommend>
            <S.SectionMost>
                <S.HeadingTwoTitle>
                    많이 찾는 여행지
                </S.HeadingTwoTitle>
                <ul>
                    {
                        !!placeData.today_best
                        ? <SimplePlaceList selectedItem={placeData.today_best.list} />
                        : <></>
                    }
                </ul>
            </S.SectionMost>
            <PostList />
        </>
    )
}