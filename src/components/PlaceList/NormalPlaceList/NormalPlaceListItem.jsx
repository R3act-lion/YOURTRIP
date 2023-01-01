import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import IconHeart from '../../../assets/images/icon-heart.svg'

const ListItemPlace = styled.li`
    flex-basis: 162px;
    flex-shrink: 0;
    position: relative;
`

const ImagePlace = styled.img`
    width: 100%;
    height: 217px;
    object-fit: cover;
    margin-bottom: 10px;
    border-radius: 5px;
`

const HeadingThreeTitle = styled.h3`
    font-weight: 500;
    font-size: 18px;
    line-height: 23px;
    margin-bottom: 5px;
`

const ParagraphDescription = styled.p`
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
`

const ButtonHeart = styled.button`
    width: 30px;
    height: 30px;
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

const ImageHeart = styled.img`
    width: 50%;
    height: 50%;
`

export default function NormalPlaceListItem({ place, data  }) {
    const url = '/placedetail/' + place.title

    return (
        <ListItemPlace>
            <Link to={url} state={{ place, data }} >
                <article>
                    <ImagePlace src={place.firstimage} alt='' />
                    <header>
                        <HeadingThreeTitle>{place.title}</HeadingThreeTitle>
                    </header>
                    <ParagraphDescription>{place.category}</ParagraphDescription>
                    {/* <ButtonHeart>
                        <ImageHeart src={IconHeart} alt='' />
                    </ButtonHeart> */}
                </article>
            </Link>
        </ListItemPlace>
    )
}