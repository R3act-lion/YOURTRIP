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

const LogoTitle = styled.h1`
    width: 96px;
    margin: 0 auto;
`

const LogoImage = styled.img`
    width: 100%;
`

const SearchLink = styled(Link)`
    width: 18px;
    position: absolute;
    margin-right: 16px;
`

const SearchImage = styled.img`
    width: 100%;
`

export default function LogoHeader() {
    return (
        <HeaderContainer>
            <LogoTitle>
                <Link to='/'>
                    <LogoImage src={YourtripImg} alt='YOURTRIP' />
                </Link>
            </LogoTitle>
            <SearchLink to='/'>
                <SearchImage src={SearchImg} alt='검색' />
            </SearchLink>
        </HeaderContainer>
    )
}
