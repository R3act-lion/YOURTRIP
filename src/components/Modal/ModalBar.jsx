import React from 'react'
import styled from 'styled-components'
import iconModalBar from '../../assets/images/icon-modal-bar.svg'

const ModalBarImg = styled.img`
    display: block;
    margin: 0 auto;
    position: relative;
    bottom: 18px;
`

export default function modalBar() {
  return (
     <ModalBarImg src={iconModalBar}></ModalBarImg>
  )
}
