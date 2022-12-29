import React from 'react'
import styled from 'styled-components'
import SimplePlaceListItem from './SimplePlaceListItem'

const ListPlace = styled.ul`
    width: 100%;
    overflow-x: scroll;
    padding: 2px 22px;
    display: flex;
    justify-content: space-between;
    gap: 25px;
    touch-action: pan-x;

    &::-webkit-scrollbar {
        display: none;
    }
`

export default function SimplePlaceList({ selectedItem, category }) {
    let placelist = []

    for (let index = 0; index < 10; index++) {
        placelist.push(selectedItem[Math.floor(Math.random() * selectedItem.length)]);
    }

    return (
        <ListPlace>
            {
                placelist.map((place, index) => <SimplePlaceListItem key={index + place.title} place={place} />)
            }
        </ListPlace>
    )
}
