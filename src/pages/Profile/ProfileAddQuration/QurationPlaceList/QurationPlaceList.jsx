import React from 'react'
import styled from 'styled-components';
import SearchIcon from '../../../../assets/images/icon-search.svg'
import QurationListItem from './QurationListItem';

const SectionList = styled.section`
    padding: 30px 22px;
`

const HeadingTwoTitle = styled.h2`
    font-weight: 500;
    font-size: 20px;
    line-height: 14px;
`

const FormSearch = styled.form`
    position: relative;
    margin-bottom: 30px;
`

const InputSearch = styled.input`
    width: 316px;
    height: 32px;
    background-color: #F2F2F2;
    border-radius: 32px;
    margin-top: 15px;
    border: 0;
    outline: 0;
    color: black;
    padding: 0 13px;
`

const ButtonSearch = styled.button`
    position: absolute;
    right: 40px;
    top: 20px;
    background-color: rgba(0, 0, 0, 0);
    cursor: pointer;
`

const ImageSearch = styled.img`
    width: 20px;
    height: 20px;
    vertical-align: top;
`

const ParagraphResult = styled.p`
    font-weight: 500;
    font-size: 16px;
    line-height: 14px;
    margin-bottom: 20px;
`

const ListResult = styled.ul`
    display: flex;
    flex-direction: column;
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

export default function QurationPlaceList() {
    setTimeout(() => {
        document.querySelector('h1').textContent = ''
        window.scrollTo(0, 0)
    }, 0);

    return (
        <SectionList>
            <header>
                <HeadingTwoTitle>
                    추가할 여행지를 선택하세요.
                </HeadingTwoTitle>
            </header>
            <FormSearch action=''>
                <label htmlFor="inputSearch" className='irOnly'>여행지 검색</label>
                <InputSearch id='inputSearch' placeholder='검색' />
                <ButtonSearch>
                    <ImageSearch src={SearchIcon} alt='검색' />
                </ButtonSearch>
            </FormSearch>
            <ParagraphResult>
                내가 저장한 공간
            </ParagraphResult>
            <ListResult>
                <QurationListItem />
                <QurationListItem />
                <QurationListItem />
                <QurationListItem />
                <QurationListItem />
            </ListResult>
            <ButtonSave>저장</ButtonSave>
        </SectionList>
    )
}
