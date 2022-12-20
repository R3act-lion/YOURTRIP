import React from 'react'
import styled from 'styled-components'
import uploadbutton from '../../assets/images/btn-write.svg'

const UploadButton = styled.button`
  background-image:url(${uploadbutton});
  width:50px;
  height:50px;
  position:fixed;
  right:40%;
  border: none;
  background-color: #FFFFFF;
  cursor: pointer;
`

export default function CommuWritingButton() {
  return (
    <><UploadButton/></>
  )
}
