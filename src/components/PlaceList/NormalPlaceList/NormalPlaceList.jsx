import React from 'react'
import * as S from "../style"
import NormalPlaceListItem from './NormalPlaceListItem'

export default function NormalPlaceList({ data, placelist }) {
    return (
        <S.ListNormalPlace>
            {
                placelist.map((place, index) => <NormalPlaceListItem data={data} key={index + place.title} place={place}  />)
            }
        </S.ListNormalPlace>
    )
}