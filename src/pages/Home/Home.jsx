import React from 'react'
import MainContainer from '../../components/MainContainer/MainContainer'

import RecommendList from '../../components/SlideList/RecommendList/RecommendList'
import SimplePlaceList from '../../components/SlideList/SimplePlaceList/SimplePlaceList'
import PostList from '../../components/SlideList/PostList/PostList'
import DetailPlaceList from '../../components/SlideList/DetailPlaceList/DetailPlaceList'

export default function Home() {
    return (
        <MainContainer>
            <RecommendList />
            <SimplePlaceList />
            <PostList />
            <DetailPlaceList />
        </MainContainer>
    )
}