import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import IconHeart from '../../../assets/images/icon-heart.svg'

const PlaceListItem = styled.li`
    flex-basis: 190px;
    flex-shrink: 0;
    position: relative;
`

const PlaceImage = styled.img`
    width: 100%;
    height: 255px;
    object-fit: cover;
    margin-bottom: 10px;
    border-radius: 5px;
`

const PlaceTitle = styled.h3`
    font-weight: 700;
    font-size: 20px;
    line-height: 25px;
    margin-bottom: 5px;
`

const PlaceDesc = styled.p`
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
`

const HeartButton = styled.button`
    width: 36px;
    height: 36px;
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: rgba( 255, 255, 255, 1 );
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`

const HeartImage = styled.img`
    width: 50%;
    height: 50%;
`

export default function SimplePlaceListItem({ item: {image, title, desc} }) {
    return (
        <PlaceListItem>
            <Link to='/'>
                <article>
                    <PlaceImage src={image} alt='' />
                    <header>
                        <PlaceTitle>{title}</PlaceTitle>
                    </header>
                    <PlaceDesc>{desc}</PlaceDesc>
                    <HeartButton>
                        <HeartImage src={IconHeart} alt='' />
                    </HeartButton>
                </article>
            </Link>
        </PlaceListItem>
    )
}