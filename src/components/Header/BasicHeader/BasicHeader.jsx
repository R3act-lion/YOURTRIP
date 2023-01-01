import React from 'react'
import styled from 'styled-components'
import LeftArrowImg from '../../../assets/images/icon-arrow-left.svg'
import MoreImg from '../../../assets/images/icon-more.svg'
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

const ButtonMore = styled.button`
    width: 24px;
    height: 24px;
    margin-left: auto;
    cursor: pointer;
`

const ImageMore = styled.img`
    width: 100%;
`

const HeadingOneTitle = styled.h1`
    font-weight: 500;
    font-size: ${(props) => props.theme.fontSize.lv4};
    line-height: 23px;
    margin-left: 10px;
`

const ButtonPrev = styled.button`
    height: 22px;
    cursor: pointer;
`

export default function BasicHeader({modal, setModal}) {
    const navigation = useNavigate();

    return (
        <HeaderContainer>
            <ButtonPrev onClick={() => navigation(-1)}>
                <ImageLeftArrow src={LeftArrowImg} alt='뒤로가기' />
            </ButtonPrev>
            <HeadingOneTitle>
                
            </HeadingOneTitle>
            <ButtonMore>
                <ImageMore src={MoreImg} alt='더보기' />
            </ButtonMore>
        </HeaderContainer>
    )
}