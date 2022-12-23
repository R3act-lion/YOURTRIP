import React from 'react'
import styled from 'styled-components'

const ListItemImage = styled.li`
    flex-basis: 212px;
    flex-shrink: 0;
    height: 280px;
`

const ImageItem = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
`

export default function RecommendImage({ image, alt }) {
    return (
        <ListItemImage>
            <ImageItem src={image} alt={alt} />
        </ListItemImage>
    )
}
