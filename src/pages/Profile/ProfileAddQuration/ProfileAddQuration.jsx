import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import SelectedList from '../../../components/SlideList/SelectedList/SelectedList'
import AddImage from '../../../assets/images/icon-add.svg'

const SectionModity = styled.section`
    padding: 30px 35px;
    position: relative;
`

const FormPost = styled.form`
    text-align: left;
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

const DivPlaceSelect = styled.div`
    width: 322px;
    height: 136px;
    position: relative;
    background: #FBFBFB;
    margin-top: 15px;
    border: 1px solid #DBDBDB;
    border-radius: 10px;
    padding: 18px 0;
`

const LinkAddPlace = styled(Link)`
    position: absolute;
    right: 8px;
    bottom: 5px;
`

const ImageAdd = styled.img`
    width: 32px;
    height: 32px;
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
        document.querySelector('h1').textContent = '큐레이션 추가'
        window.scrollTo(0, 0)
    }, 0);

    return (
        <SectionModity>
            <header>
                <h2 className='irOnly'>큐레이션 추가</h2>
            </header>
            <FormPost>
                <LabelInput htmlFor='inputQuration' >큐레이션 제목</LabelInput>
                <InputUser id='inputQuration' placeholder='큐레이션 이름을 적어주세요.' />
                <LabelInput htmlFor='inputUserIntro' >소개</LabelInput>
                <InputUser id='inputUserIntro' placeholder='큐레이션에 대해 간단한 소개를 적어주세요. ' />
                <LabelInput>선택한 여행지</LabelInput>
                <DivPlaceSelect>
                    <SelectedList />
                    <LinkAddPlace to='/profile/addquration/list'>
                        <ImageAdd src={AddImage} alt='추가' />
                    </LinkAddPlace>
                </DivPlaceSelect>
                <ButtonSave>저장</ButtonSave>
            </FormPost>
        </SectionModity>
    )
}