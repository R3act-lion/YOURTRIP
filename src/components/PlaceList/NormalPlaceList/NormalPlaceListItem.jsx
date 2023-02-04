import React from 'react'
import { Link } from 'react-router-dom'
import * as S from "../style"

export default function NormalPlaceListItem({ place, data  }) {
    const url = '/placedetail/' + place.title

    return (
        <S.ListItemPlace>
            <Link to={url} state={{ place, data }} >
                <article>
                    <S.ImagePlace src={place.firstimage} alt='' />
                    <header>
                        <S.HeadingThreeTitle>{place.title}</S.HeadingThreeTitle>
                    </header>
                    <S.ParagraphDescription>{place.category}</S.ParagraphDescription>
                    {/* <ButtonHeart>
                        <ImageHeart src={IconHeart} alt='' />
                    </ButtonHeart> */}
                </article>
            </Link>
        </S.ListItemPlace>
    )
}