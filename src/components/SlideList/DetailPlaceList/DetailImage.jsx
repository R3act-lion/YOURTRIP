import React from 'react'
import styled from 'styled-components'

const ImageListItem = styled.li`
    flex-basis: 212px;
    flex-shrink: 0;
    height: 280px;
`

const ItemImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
`

export default function DetailImage({ image }) {
    return (
        <ImageListItem>
            <ItemImage src={image} />
        </ImageListItem>
    )
}
