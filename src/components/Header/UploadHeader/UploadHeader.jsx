import React from 'react'
import styled from 'styled-components'
import LeftArrowImg from '../../../assets/images/icon-arrow-left.svg'
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

const BasicTitle = styled.h1`
    position: absolute;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    width: 1px;
    height: 1px;
    margin: -1px;
    overflow: hidden;
`

export default function UploadHeader() {
    return (
        <HeaderContainer>
            <Link to='/'>
                <LeftArrowImage src={LeftArrowImg} alt='뒤로가기' />
            </Link>
            <BasicTitle>
                업로드 페이지
            </BasicTitle>
            {/* 저장 버튼 생성 후 연결 */}
        </HeaderContainer>
    )
}
