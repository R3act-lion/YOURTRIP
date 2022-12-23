import React from 'react'
import styled from 'styled-components'
import UserDesc from '../UserDesc/UserDesc'

const SectionResult = styled.section`
    padding: 20px;
`

const HeadingTwoResult = styled.h2`
    font-weight: 700;
    font-size: 16px;
    line-height: 14px;
`

const ListResult = styled.ul`
    margin: 15px 0;

    & > li + li {
        margin-top: 16px;
    }
`

export default function SearchResult() {
    return (
        <SectionResult>
            <header>
                <HeadingTwoResult>
                    장소
                </HeadingTwoResult>
            </header>
            <ListResult>
                <li>
                    <UserDesc />
                </li>
                <li>
                    <UserDesc />
                </li>
                <li>
                    <UserDesc />
                </li>
            </ListResult>
        </SectionResult>
    )
}