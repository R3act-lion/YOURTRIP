import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import IconArrowRight from '../../../assets/images/icon-arrow-right.svg'
import RecommendImage from './RecommendImage'

const ListItemRecommend = styled.li`
    & + li {
        margin-top: 32px;
    }
`

const HeaderTheme = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 22px 16px 22px;
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

const ImageArrowRight = styled.img`
    width: 10px;
    height: 18px;
`

const ListImage = styled.ul`
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

export default function RecommendListItem({ data, title, placelist, category, url }) {
    // console.log(placelist);

    return (
        <ListItemRecommend>
            <section>
                <Link to={url || '/home/placelist'} state={{data, placelist}}>
                    <HeaderTheme>
                        <ImageListTitle>
                            {
                                !!title
                                ? title
                                : '오늘의 추천'
                            }
                        </ImageListTitle>
                        <ImageArrowRight src={IconArrowRight} alt="" />
                    </HeaderTheme>
                    <ListImage>
                        {
                            placelist.map((place, index) => <RecommendImage key={index + place.title} image={place.firstimage} alt={place.title} />)
                        }
                    </ListImage>
                </Link>
            </section>
        </ListItemRecommend>
    )
}