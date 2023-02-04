import React from 'react'
import * as S from "./style"

export default function DetailImage({ image }) {
    return (
        <S.ListItemImage>
            <S.ImageItem src={image} />
        </S.ListItemImage>
    )
}
