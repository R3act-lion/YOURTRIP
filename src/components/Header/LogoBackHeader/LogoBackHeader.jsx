import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import LeftArrowImg from '../../../assets/images/icon-arrow-left.svg'
import SearchImg from '../../../assets/images/icon-search.svg'
import YourtripImg from '../../../assets/images/sub-logo.svg'
import * as S from "./style"

export default function LogoBackHeader() {
    const navigation = useNavigate();

    return (
        <S.HeaderContainer>
            <S.ButtonPrev onClick={() => navigation(-1)}>
                <S.ImageLeftArrow src={LeftArrowImg} alt='뒤로가기' />
            </S.ButtonPrev>
            <S.HeadingOneTitle>
                <Link to='/'>
                    <S.ImageLogo src={YourtripImg} alt='YOURTRIP' />
                </Link>
            </S.HeadingOneTitle>
            <S.LinkSearch to='/search'>
                <S.ImageSearch src={SearchImg} alt='검색' />
            </S.LinkSearch>
        </S.HeaderContainer>
    )
}
