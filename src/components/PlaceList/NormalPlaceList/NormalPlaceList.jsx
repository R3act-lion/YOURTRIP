import React from 'react'
import styled from 'styled-components'
import NormalPlaceListItem from './NormalPlaceListItem'

const ListNormalPlace = styled.ul`
    margin-top: 16px;
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
`

export default function NormalPlaceList({ data, placelist }) {
    return (
        <ListNormalPlace>
            {
                placelist.map((place, index) => <NormalPlaceListItem data={data} key={index + place.title} place={place}  />)
            }
        </ListNormalPlace>
    )
}