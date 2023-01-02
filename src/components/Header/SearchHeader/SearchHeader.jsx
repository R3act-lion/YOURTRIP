import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import LeftArrowImg from '../../../assets/images/icon-arrow-left.svg'
import { useNavigate } from 'react-router-dom'
import { SearchContext } from "../../../context/Context"

const HeaderContainer = styled.header`
    width: 390px;
    height: 48px;
    display: flex;
    align-items: center;
    padding: 12px;
    border-bottom: 1px solid ${(props) => props.theme.color.gray.g2};
    background-color: white;
    position: fixed;
    z-index: 20;
`

const ImageLeftArrow = styled.img`
    width: 22px;
`

const InputSearch = styled.input`
    width: 316px;
    height: 32px;
    background: #F2F2F2;
    border-radius: 32px;
    border: none;
    outline: none;
    margin-left: 20px;
    padding: 7px 16px;
`

const ButtonPrev = styled.button`
    height: 22px;
    cursor: pointer;
`


export default function UploadHeader() {
    const navigation = useNavigate();

    const {searchKeyword, setSearchKeyword} = useContext(SearchContext)
    
    return (
        <SearchContext.Provider value={searchKeyword}>
            <HeaderContainer>
                <ButtonPrev onClick={() => navigation(-1)}>
                    <ImageLeftArrow src={LeftArrowImg} alt='뒤로가기' />
                </ButtonPrev>
                <h1 className='irOnly'>
                    검색 페이지
                </h1>
                <label htmlFor='searchInput' className='irOnly' >검색어 입력</label>
                <InputSearch
                    value={searchKeyword}
                    id='searchInput'
                    placeholder='검색'
                    onChange={(e) => setSearchKeyword(e.target.value)}/>
            </HeaderContainer>
        </SearchContext.Provider>
    )
}
