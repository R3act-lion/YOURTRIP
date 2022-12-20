import React from 'react'
import styled from 'styled-components'
import LeftArrowImg from '../../../assets/images/icon-arrow-left.svg'
import MoreImg from '../../../assets/images/icon-more.svg'
import { Link } from 'react-router-dom'

const HeaderContainer = styled.header`
    width: 390px;
    height: 48px;
    display: flex;
    align-items: center;
    padding: 12px;
    border-bottom: 1px solid ${(props) => props.theme.color.gray.g2};
    background-color: white;
    position: fixed;
`

const LeftArrowImage = styled.img`
    width: 22px;
`

const MoreButton = styled.button`
    width: 24px;
    height: 24px;
    margin-left: auto;
    cursor: pointer;
`

const MoreImage = styled.img`
    width: 100%;
`

const BasicTitle = styled.h1`
    font-weight: 500;
    font-size: ${(props) => props.theme.fontSize.lv4};
    line-height: 23px;
    margin-left: 5px;
`

export default function BasicHeader() {
    return (
        <HeaderContainer>
            <Link to='/'>
                <LeftArrowImage src={LeftArrowImg} alt='뒤로가기' />
            </Link>
            <BasicTitle>
                테스트
            </BasicTitle>
            <MoreButton>
                <MoreImage src={MoreImg} alt='더보기' />
            </MoreButton>
        </HeaderContainer>
    )
}
