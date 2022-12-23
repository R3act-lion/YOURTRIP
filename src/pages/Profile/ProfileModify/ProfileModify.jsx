import React from 'react'
import styled from 'styled-components'
import ProfileImage from '../../../assets/images/profile.svg'
import UploadImage from '../../../assets/images/btn-upload-img-fill.svg'

const SectionModity = styled.section`
    padding: 30px 35px;
    text-align: center;
    position: relative;
`

const FormPost = styled.form`
    text-align: left;
`

const ImageProfile = styled.img`
    width: 110px;
    margin-bottom: 30px;
`

const ImageUploadImage = styled.img`
    width: 36px;
    position: absolute;
    top: 102px;
    right: 140px;
`

const LabelInput = styled.label`
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    color: #767676;
`

const InputUser = styled.input`
    width: 100%;
    line-height: 30px;
    border: 0;
    outline: 0;
    color: black;
    border-bottom: 1px solid #DBDBDB;
    margin-bottom: 15px;

    &::placeholder {
        color: #DBDBDB;
    }
`

const ButtonSave = styled.button`
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

export default function ProfileModify() {
    setTimeout(() => {
        document.querySelector('h1').textContent = '프로필 수정'
        window.scrollTo(0, 0)
    }, 0);

    return (
        <SectionModity>
            <header>
                <h2 className='irOnly'>프로필 수정</h2>
            </header>
            <ImageProfile src={ProfileImage} alt='프로필 이미지' />
            <ImageUploadImage src={UploadImage} alt='업로드 이미지' />
            <FormPost>
                <LabelInput htmlFor='inputUserName' >사용자 이름</LabelInput>
                <InputUser id='inputUserName' placeholder='2~10자 이내여야 합니다.' />
                <LabelInput htmlFor='inputUserID' >계정 ID</LabelInput>
                <InputUser id='inputUserID' placeholder='영문, 숫자, 특수문자(.),(_)만 사용 가능합니다.' />
                <LabelInput htmlFor='inputUserIntro' >소개</LabelInput>
                <InputUser id='inputUserIntro' placeholder='자신과 판매할 상품에 대해 소개해 주세요!' />
                <ButtonSave>저장</ButtonSave>
            </FormPost>
        </SectionModity>
    )
}
