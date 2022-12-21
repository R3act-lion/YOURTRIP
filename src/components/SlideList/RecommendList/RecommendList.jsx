import React from 'react'
import styled from 'styled-components'
import RecommendListItem from './RecommendListItem'

const SectionHeader = styled.h2`
    font-size: 22px;
    font-weight: 700;
    line-height: 28px;
    margin-bottom: 15px;
    padding-left: 16px;
`

export default function RecommendList() {
    return (
        <section>
            <header>
                <SectionHeader>
                    오늘의 여행지
                </SectionHeader>
            </header>
            <ul>
                <RecommendListItem />
                <RecommendListItem />
            </ul>
        </section>
    )
}