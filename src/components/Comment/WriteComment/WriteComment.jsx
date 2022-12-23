import React from 'react'
import styled from 'styled-components'
import ProfileImage from '../../../assets/images/profile.svg'

const FormComment = styled.form`
    padding: 12px 16px;
    width: 390px;
    display: flex;
    position: fixed;
    bottom: 60px;
    background-color: white;
`

const ImageProfile = styled.img`
    width: 36px;
    height: 36px;
    vertical-align: top;
    margin-right: 16px;
`

const InputComment = styled.input`
    border: 0;
    outline: 0;
    flex-grow: 1;
`

const ButtonPost = styled.button`

`

export default function WriteComment() {
    return (
        <FormComment>
            <ImageProfile src={ProfileImage} alt='' />
            <label htmlFor="inputComment" className='irOnly'>댓글 내용 입력</label>
            <InputComment id='inputComment' placeholder='댓글 입력하기...' />
            <ButtonPost>
                게시
            </ButtonPost>
        </FormComment>
    )
}