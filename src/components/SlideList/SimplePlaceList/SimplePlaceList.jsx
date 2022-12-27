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

    let randomIndexArray = []
    let placelist = []
    while (randomIndexArray.length < 5){
        let randomNum = Math.floor(Math.random() * selectedItem.length)
        if (randomIndexArray.indexOf(randomNum) === -1) {
        randomIndexArray.push(randomNum)
        }
    }
    randomIndexArray.map(i => placelist.push(selectedItem[i]))

    return (
        <ListPlace>
            {
                placelist.map(place => <SimplePlaceListItem key={place.title} place={place} />)
            }
        </ListPlace>
    )
}
