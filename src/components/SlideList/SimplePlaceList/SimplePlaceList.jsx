import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import SimplePlaceListItem from './SimplePlaceListItem'

const SectionLink = styled(Link)`
    display: inline-block;
    padding: 0 28px 15px 16px;
`

const SectionTitle = styled.h2`
    font-weight: 700;
    font-size: 22px;
    line-height: 28px;
`

const SlideList = styled.ul`
    width: 100%;
    overflow-x: scroll;
    padding: 2px 22px;
    display: flex;
    justify-content: space-between;
    gap: 25px;
    touch-action: pan-x;

    &::-webkit-scrollbar {
        display: none;
    }
`

export default function SimplePlaceList() {
    const item1 = { image: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/%EB%8D%95%EC%88%98%EA%B6%81_%EC%A0%84%EA%B2%BD_%282013%29.jpg', title: '덕수궁', desc: '궁' }

    return (
        <section>
            <header>
                <SectionLink to='/'>
                    <SectionTitle>많이 찾는 장소</SectionTitle>
                </SectionLink>
            </header>
            <SlideList>
                <SimplePlaceListItem item={item1} />
                <SimplePlaceListItem item={item1} />
                <SimplePlaceListItem item={item1} />
                <SimplePlaceListItem item={item1} />
            </SlideList>
        </section>
    )
}
