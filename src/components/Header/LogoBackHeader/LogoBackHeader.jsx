import React from 'react'
import styled from 'styled-components'
import YourtripImg from '../../../assets/images/sub-logo.svg'
import SearchImg from '../../../assets/images/icon-search.svg'
import LeftArrowImg from '../../../assets/images/icon-arrow-left.svg'
import { Link, useNavigate } from 'react-router-dom'

const HeaderContainer = styled.header`
    width: 390px;
    height: 48px;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    border-bottom: 1px solid ${(props) => props.theme.color.gray.g2};
    background-color: white;
    position: fixed;
    z-index: 20;
`

const HeadingOneTitle = styled.h1`
    width: 96px;
    margin: 0 auto;
`

const ImageLogo = styled.img`
    width: 100%;
`

const LinkSearch = styled(Link)`
    width: 18px;
    position: absolute;
    margin-right: 16px;
`

const ImageSearch = styled.img`
    width: 100%;
`

const ButtonPrev = styled.button`
    height: 22px;
    position: absolute;
    left: 16px;
`

const ImageLeftArrow = styled.img`
    width: 22px;
`

export default function LogoBackHeader() {
    const navigation = useNavigate();

    return (
        <HeaderContainer>
            <ButtonPrev onClick={() => navigation(-1)}>
                <ImageLeftArrow src={LeftArrowImg} alt='뒤로가기' />
            </ButtonPrev>
            <HeadingOneTitle>
                <Link to='/'>
                    <ImageLogo src={YourtripImg} alt='YOURTRIP' />
                </Link>
            </HeadingOneTitle>
            <LinkSearch to='/search'>
                <ImageSearch src={SearchImg} alt='검색' />
            </LinkSearch>
        </HeaderContainer>
    )
}
