import React from 'react'
import * as S from "./style"

export default function RecommendImage({ image, alt }) {
    return (
        <S.ListItemImage>
            <S.ImageItem src={image} alt={alt} />
        </S.ListItemImage>
    )
}
