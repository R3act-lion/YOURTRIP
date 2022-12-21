import React from 'react'
import styled from 'styled-components'
import IconMarker from '../../../assets/images/icon-location-mini.svg'
import DetailImage from './DetailImage'

const DetailHeader = styled.header`
    margin-left: 22px;
`

const DetailTitle = styled.h3`
    font-weight: 700;
    font-size: 20px;
    line-height: 25px;
    margin-bottom: 4px;
`

const MarkerImage = styled.img`
    width: 10px;
    height: 14px;
    margin-right: 4px;
    vertical-align: top;
`

const DetailCategory = styled.p`
    display: inline-block;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    vertical-align: top;
`

const ImageList = styled.ul`
    width: 100%;
    overflow-x: scroll;
    display: flex;
    gap: 8px;
    padding: 2px 22px;
    touch-action: pan-x;
    margin: 13px 0;

    &::-webkit-scrollbar {
        display: none;
    }
`

const DetailDesc = styled.p`
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    margin: 0 22px;
`

export default function DetailPlaceListItem({ item: { title, category, images, desc } }) {
    return (
        <li>
            <article>
                <DetailHeader>
                    <DetailTitle>
                        {title}
                    </DetailTitle>
                    <MarkerImage src={IconMarker} alt='' />
                    <DetailCategory>
                        {category}
                    </DetailCategory>
                </DetailHeader>
                <ImageList>
                    {images.map(image => <DetailImage image={image} />)}
                </ImageList>
                <DetailDesc>
                    {desc}
                </DetailDesc>
            </article>
        </li>
    )
}
