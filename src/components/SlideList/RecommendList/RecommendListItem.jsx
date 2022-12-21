import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import IconArrowRight from '../../../assets/images/icon-arrow-right.svg'
import RecommendImage from './RecommendImage'

const ThemeLink = styled(Link)`
    margin-bottom: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 22px;
`

const ImageListTitle = styled.h3`
    display: inline-block;
    font-weight: 700;
    font-size: 18px;
    line-height: 23px;
`

const Blank = styled.span`
    display: block;
    margin: 5px;
`

const ArrowRightImage = styled.img`
    width: 10px;
    height: 18px;
`

const ImageList = styled.ul`
    width: 100%;
    overflow-x: scroll;
    display: flex;
    gap: 8px;
    padding: 2px 22px;
    touch-action: pan-x;

    &::-webkit-scrollbar {
        display: none;
    }
`

export default function RecommendListItem() {
    const image = 'https://dimg04.c-ctrip.com/images/0M74n12000a2jbclzF771_Q60.jpg_.webp'

    return (
        <section>
            <header>
                <ThemeLink to='/'>
                    <ImageListTitle>
                        다가오는 12월,<Blank></Blank>서울에서 만나는 크리스마스
                    </ImageListTitle>
                    <ArrowRightImage src={IconArrowRight} alt="" />
                </ThemeLink>
            </header>
            <ImageList>
                <RecommendImage image={image} />
                <RecommendImage image={image} />
                <RecommendImage image={image} />
            </ImageList>
        </section>

    )
}