import React from 'react';
import SimplePlaceListItem from './SimplePlaceListItem';
import * as S from "./style";

export default function SimplePlaceList({ selectedItem, category }) {
    let placelist = []

    for (let index = 0; index < 10; index++) {
        placelist.push(selectedItem[Math.floor(Math.random() * selectedItem.length)]);
    }

    return (
        <S.ListPlace>
            {
                placelist.map((place, index) => <SimplePlaceListItem key={index + place.title} place={place} />)
            }
        </S.ListPlace>
    )
}
