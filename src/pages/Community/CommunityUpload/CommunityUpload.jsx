import React, { useRef } from 'react'
import styled from 'styled-components'
import UploadImage from '../../../assets/images/btn-upload-img-fill.svg'
import ProfileImage from '../../../assets/images/profile.svg'

const SectionUpload = styled.section`
    position: relative;
    min-height: calc(100vh - 108px);
`

const ButtonImageUpload = styled.button`
    position: fixed;
    bottom: 72px;
    right: calc(50vw - 179px);
    background-color: rgba(0, 0, 0, 0);
    cursor: pointer;
`

const ImageUpload = styled.img`
    width: 50px;
`

const ImageProfile = styled.img`
    width: 42px;
    margin: 20px 10px 0 20px;
    vertical-align: top;
`

const FormPost = styled.form`
    display: inline-block;
`

const TextAreaContent = styled.textarea`
    width: 300px;
    font-size: 16px;
    resize: none;
    border: none;
    outline: none;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    margin-top: 29px;
    color: #C4C4C4;

    &::-webkit-scrollbar {
        display: none;
    }
`

const ButtonUpload = styled.button`
    width: 90px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    background-color: #C9D9F0;
    border-radius: 32px;
    font-weight: 500;
    font-size: 14px;
    position: fixed;
    top: 8px;
    right: calc(50vw - 179px);
    z-index: 30;
    cursor: pointer;
`

export default function CommunityUpload() {
    const textArea = useRef();
    const handleResizeHeight = () => {
        textArea.current.style.height = 'auto'
        textArea.current.style.height = textArea.current.scrollHeight + 'px'
        textArea.current.style.color = 'black'
    }

    return (
        <SectionUpload>
            <ButtonImageUpload>
                <ImageUpload src={UploadImage} alt='이미지 업로드 버튼' />
            </ButtonImageUpload>
            <ImageProfile src={ProfileImage} alt='' />
            <FormPost action="">
                <label htmlFor="postInput"></label>
                <TextAreaContent id='postInput' ref={textArea} onInput={handleResizeHeight} rows={1} >게시글 입력하기</TextAreaContent>
                <ButtonUpload>
                    업로드
                </ButtonUpload>
            </FormPost>
        </SectionUpload>
    )
}
