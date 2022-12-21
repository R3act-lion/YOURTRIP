import React from 'react'
import styled from 'styled-components'
import heartimg from '../../assets/images/icon-heart.svg'

const HeartButton = styled.button`
  background-image: url(${heartimg});
  background-repeat: no-repeat;
  width: 18px;
  height:18px;
  cursor: pointer;
  background-color: #FFFFFF;
  border:none;
`


export default function CommuHeartButton() {
  return (
    <>
    <HeartButton/>
    </>
  )
}
