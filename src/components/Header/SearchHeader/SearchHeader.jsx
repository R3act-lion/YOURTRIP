import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import LeftArrowImg from '../../../assets/images/icon-arrow-left.svg'
import { SearchContext } from "../../../context/Context"
import * as S from "./style"

export default function UploadHeader() {
    const navigation = useNavigate();

    const {searchKeyword, setSearchKeyword} = useContext(SearchContext)
    
    return (
        <SearchContext.Provider value={searchKeyword}>
            <S.HeaderContainer>
                <S.ButtonPrev onClick={() => navigation(-1)}>
                    <S.ImageLeftArrow src={LeftArrowImg} alt='뒤로가기' />
                </S.ButtonPrev>
                <h1 className='irOnly'>
                    검색 페이지
                </h1>
                <label htmlFor='searchInput' className='irOnly' >검색어 입력</label>
                <S.InputSearch
                    value={searchKeyword}
                    id='searchInput'
                    placeholder='검색'
                    onChange={(e) => setSearchKeyword(e.target.value)}/>
            </S.HeaderContainer>
        </SearchContext.Provider>
    )
}
