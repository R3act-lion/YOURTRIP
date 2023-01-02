import React from 'react'
import styled from 'styled-components'
import SelectedListItem from './SelectedListItem'

const ListSelected = styled.ul`
    width: 100%;
    overflow-x: scroll;
    padding: 0 15px;
    display: flex;
    gap: 8px;
    touch-action: pan-x;
    &::-webkit-scrollbar {
        display: none;
    }
`

export default function SelectedList({checklist}) {
    return (
        <ListSelected>
            {checklist.map(item => {
                return (
                    <SelectedListItem key={item.contentid} place={item} />
                )
            })}
        </ListSelected>
    )
}