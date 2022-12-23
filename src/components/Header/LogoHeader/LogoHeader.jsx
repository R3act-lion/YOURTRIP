import React from 'react'
import styled from 'styled-components'
import YourtripImg from '../../../assets/images/sub-logo.svg'
import SearchImg from '../../../assets/images/icon-search.svg'
import { Link } from 'react-router-dom'

// ${(props) => props.theme.bgColor}

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

export default function LogoHeader() {
    return (
        <HeaderContainer>
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
