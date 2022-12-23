import React from 'react'
import styled from 'styled-components'
import DetailPlaceListItem from './DetailPlaceListItem'

const ListDetailPlace = styled.ul`
    margin: 20px 0;
`

export default function DetailPlaceList({list}) {
    window.scrollTo(0,0)

    return (
        <ListDetailPlace>
            {
                list.map(place => <DetailPlaceListItem key={place.title} place={place} isSecondary={true} />)
            }
        </ListDetailPlace>
    )
}