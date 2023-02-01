import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import IconMarker from '../../../assets/images/icon-location-mini.svg'
import DetailImage from './DetailImage'

const ListItemDetail = styled.li`
    & + li {
        margin-top: 20px;
    }
`

const HeaderDetail = styled.header`
    margin-left: 22px;
`

const HeadingTwoTitle = styled.h2`
    font-weight: 700;
    font-size: 20px;
    line-height: 25px;
    margin-bottom: 7px;
`

const HeadingThreeTitle = styled.h3`
    font-weight: 700;
    font-size: 20px;
    line-height: 25px;
    margin-bottom: 7px;
`

const ImageMarker = styled.img`
    width: 10px;
    height: 14px;
    margin-right: 4px;
    vertical-align: top;
`

const ParagraphCategory = styled.p`
    display: inline-block;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    vertical-align: top;
`

const ListImage = styled.ul`
    width: 100%;
    overflow-x: scroll;
    display: flex;
    gap: 8px;
    padding: 2px 22px;
    touch-action: pan-x;
    margin: 7px 0;

    &::-webkit-scrollbar {
        display: none;
    }
`

const ParagraphDescription = styled.p`
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    margin: 0 22px;
    white-space: normal;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
`

export default function DetailPlaceListItem({ data, place }) {
    const url = '/placedetail/' + place.title

    return (
        <ListItemDetail>
            <Link to={url} state={{data, place}} >
                <section>
                    <HeaderDetail>
                        {
                            !!true
                                ? <HeadingTwoTitle>
                                    {place.title}
                                </HeadingTwoTitle>
                                : <HeadingThreeTitle>
                                    {place.title}
                                </HeadingThreeTitle>
                        }
                        <ImageMarker src={IconMarker} alt='' />
                        <ParagraphCategory>
                            {place.addr1.split(" ")[1]} | {place.detail}
                        </ParagraphCategory>
                    </HeaderDetail>
                    <ListImage>
                        {Array.from(Array(2), (x, i) => <DetailImage key={i} image={place.firstimage} /> )}
                    </ListImage>
                </section>
            </Link>
        </ListItemDetail>
    )
}
