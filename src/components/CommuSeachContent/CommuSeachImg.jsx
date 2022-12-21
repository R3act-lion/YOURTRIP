import React from 'react'
import styled from 'styled-components'


const ImgSlide = styled.div`
    display: ${props => 
    props.image === 'null' ? 'none' : 'block'};
    width: 100%;
    overflow-x: scroll;
    display: flex;
    gap: 8px;
    touch-action: pan-x;

    &::-webkit-scrollbar {
        display: none;
    }
`

const ContactImg = styled.img`
    width: 121px;
    height: 126px;
    margin-top:10px;
    border: 0.5px solid #DBDBDB;
    border-radius: 10px;
  `

export default function CommuSeachImg({image}) {
  return (
    <ImgSlide>
        <ContactImg>{image}</ContactImg>
    </ImgSlide>
  )
}
