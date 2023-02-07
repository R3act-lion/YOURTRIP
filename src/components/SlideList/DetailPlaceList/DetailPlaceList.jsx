import React from 'react';
import DetailPlaceListItem from './DetailPlaceListItem';
import * as S from "./style";

export default function DetailPlaceList({data, placeList}) {
    window.scrollTo(0, 0)

    return (
        <S.ListDetailPlace>
            {
                placeList.map((place, index) => <DetailPlaceListItem data={data} key={index + place.title} place={place} isSecondary={true} />)
            }
        </S.ListDetailPlace>
    )
}