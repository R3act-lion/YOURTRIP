import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import RecommendList from '../../components/SlideList/RecommendList/RecommendList'
import SimplePlaceList from '../../components/SlideList/SimplePlaceList/SimplePlaceList'
import PostList from '../../components/SlideList/PostList/PostList'
import axios from 'axios'

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

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
        setLoading(true);
        try {
            const res = await axios.get(
            "https://sdh20282.github.io/YOURTRIP_data/data.json",
            )
            setData(Object.entries(res.data.area))
        } catch (e) {
            console.log(e);
        }
        setLoading(false)
        }
        fetchData();
    }, []);

    if (loading) {
        console.log("대기 중")
    }
    if (!data) {
        console.log("응답 값이 설정되지 않았습니다.");
        return null;
    }

    let selectedItem = [];
    let categoryList = [];

    let random = Math.floor(Math.random() * data.length)
    for (const key in data[random][1]) {
        if(key !== "count" && key !== "image" && key !== "전체_식당" && key !== "전체_여행지") categoryList.push(key)
    }
    categoryList.map(i => {
        selectedItem.push({...[i, data[random][1][i].list]})
    })

    let rand = Math.floor(Math.random() * 7);
    let title = selectedItem[rand][0]
    let list = selectedItem[rand][1]

    return (
        <>
            <SectionRecommend>
                <HeadingTwoTitle>
                    오늘의 추천
                </HeadingTwoTitle>
                <RecommendList data={data} title={title} selectedItem={list} />
            </SectionRecommend>
            <SectionMost>
                <HeadingTwoTitle>
                    많이 찾는 여행지
                </HeadingTwoTitle>
                <SimplePlaceList selectedItem={list} />
            </SectionMost>
            <PostList />
        </>
    )
}