import React from 'react'
import { Link } from 'react-router-dom'
import * as S from "./style"

export default function SimplePlaceListItem({ place }) {
    const url = '/placedetail/' + place.title

    return (
        <S.ListItemPlace>
            <Link to={url} state={{ place }} >
                <article>
                    <S.ImagePlace src={place.firstimage} alt='' />
                    <header>
                        <S.HeadingThreeTitle>{place.title}</S.HeadingThreeTitle>
                    </header>
                    <S.ParagraphDescription>
                        {place.addr1.split(" ")[0]} | {place.addr1.split(" ")[1]} • {place.detail}
                    </S.ParagraphDescription>
                    {/* <ButtonHeart>
                        <ImageHeart src={IconHeart} alt='' />
                    </ButtonHeart> */}
                </article>
            </Link>
        </S.ListItemPlace>
    )
}