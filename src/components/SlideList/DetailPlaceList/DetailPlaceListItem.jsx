import React from 'react'
import { Link } from 'react-router-dom'
import IconMarker from '../../../assets/images/icon-location-mini.svg'
import DetailImage from './DetailImage'
import * as S from "./style"

export default function DetailPlaceListItem({ data, place }) {
    const url = '/placedetail/' + place.title

    return (
        <S.ListItemDetail>
            <Link to={url} state={{data, place}} >
                <section>
                    <S.HeaderDetail>
                        {
                            !!true
                                ? <S.HeadingTwoTitle>
                                    {place.title}
                                </S.HeadingTwoTitle>
                                : <S.HeadingThreeTitle>
                                    {place.title}
                                </S.HeadingThreeTitle>
                        }
                        <S.ImageMarker src={IconMarker} alt='' />
                        <S.ParagraphCategory>
                            {place.addr1.split(" ")[1]} | {place.detail}
                        </S.ParagraphCategory>
                    </S.HeaderDetail>
                    <S.ListImage>
                        {Array.from(Array(2), (x, i) => <DetailImage key={i} image={place.firstimage} /> )}
                    </S.ListImage>
                </section>
            </Link>
        </S.ListItemDetail>
    )
}
