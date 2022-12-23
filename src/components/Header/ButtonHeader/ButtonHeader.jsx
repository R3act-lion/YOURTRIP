import React from 'react'
import styled from 'styled-components'
import LeftArrowImg from '../../../assets/images/icon-arrow-left.svg'
import { useNavigate } from 'react-router-dom'

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

const ButtonPrev = styled.button`
    height: 22px;
`


export default function ButtonHeader() {
    const navigation = useNavigate();

    return (
        <HeaderContainer>
            <ButtonPrev onClick={() => navigation(-1)}>
                <ImageLeftArrow src={LeftArrowImg} alt='뒤로가기' />
            </ButtonPrev>
            <h1 className='irOnly'>
                업로드 페이지
            </h1>
            {/* 저장 버튼 생성 후 연결 */}
            
        </HeaderContainer>
    )
}
