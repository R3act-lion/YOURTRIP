import React from 'react'
import styled from 'styled-components'

const ContactImgItem = styled.li`
    list-style: none;
    margin-top: 16px;
    margin-bottom: 15px;
    width: 304px;
    height: 228px;
    border-radius: 10px;
`
const ItemImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
`


export default function CommuCotactImg({image}) {
  return (
    <ContactImgItem>
        <ItemImage src={image} />
    </ContactImgItem>
  )
}
