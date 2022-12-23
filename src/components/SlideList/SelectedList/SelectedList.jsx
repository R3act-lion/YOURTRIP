import React from 'react'
import styled from 'styled-components'
import SelectedListItem from './SelectedListItem'

const ListSelected = styled.ul`
    width: 100%;
    overflow-x: scroll;
    padding: 0 15px;
    display: flex;
    justify-content: space-between;
    gap: 8px;
    touch-action: pan-x;

    &::-webkit-scrollbar {
        display: none;
    }
`

export default function SelectedList() {
    return (
        <ListSelected>
            <SelectedListItem />
            <SelectedListItem />
            <SelectedListItem />
            <SelectedListItem />
            <SelectedListItem />
            <SelectedListItem />
        </ListSelected>
    )
}