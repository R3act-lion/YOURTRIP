import React from 'react'
import { useLocation } from 'react-router'
import styled from 'styled-components'
import RecommendList from '../../../components/SlideList/RecommendList/RecommendList'
import RecommendPlaceList from '../../../components/SlideList/RecommendPlaceList/RecommendPlaceList'
import SimplePlaceList from '../../../components/SlideList/SimplePlaceList/SimplePlaceList'

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

export default function LocationTheme() {
    window.scrollTo(0,0)
    const url = '/location/placelist'

    const location = useLocation();
    const category = location.state.category
    const selectedItem = location.state.selectedItem
    const data = location.state.data
    let title, list;
    
    if (category === "place") {
        let rand = Math.floor(Math.random() * 7);
        title = selectedItem[rand][0]
        list = selectedItem[rand][1]
    }

    return (
        <>
            {category === "place" ? 
                <>
                    <SectionRecommend>
                        <HeadingTwoTitle>
                            오늘의 추천
                        </HeadingTwoTitle>
                        <RecommendList data={data} title={title} selectedItem={list} category={category} url={url} />
                    </SectionRecommend>
                    <SectionMost>
                        <HeadingTwoTitle>
                            많이 찾는 여행지
                        </HeadingTwoTitle>
                        <SimplePlaceList selectedItem={list} category={category} url={url}/>
                    </SectionMost>
                </>
            :
                <RecommendPlaceList selectedItem={selectedItem} category={category} />
            }
        </>
    )
}
