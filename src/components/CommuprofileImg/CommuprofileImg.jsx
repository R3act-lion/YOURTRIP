import React from 'react'
import styled from 'styled-components'
import Imgsircle from '../../assets/images/profile.svg'

const CommuImgProfile = styled.img.attrs({
    src: `${Imgsircle}`,
})`
    width:36px;
    height:36px;
    margin: 25px 12px 0px 16px;
`

export default function ProfileImg() {
    return (
        <>
            <CommuImgProfile />
        </>
    )
}
