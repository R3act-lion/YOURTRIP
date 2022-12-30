import { React, useState} from 'react'
import styled from 'styled-components'
import YourtripImg from '../../../assets/images/sub-logo.svg'
import SearchImg from '../../../assets/images/icon-search.svg'
import MoreImg from '../../../assets/images/icon-more.svg'
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
    right: 40px;
`

const ImageSearch = styled.img`
    width: 100%;
`

const ButtonMore = styled.button`
    width: 24px;
    height: 24px;
    position: absolute;
    right: 12px;
    cursor: pointer;
`

const ImageMore = styled.img`
    width: 100%;
`
const Modal= styled.section`
    border-radius: 10px;
    height: 110px;
`
export default function LogoMoreHeader({ modal, setModal }) {

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
            
            <ButtonMore id='btnMore' onClick={modal === true ? setModal(false) : setModal(true)}>
                <ImageMore src={MoreImg} alt='더보기' />
            </ButtonMore>
        </HeaderContainer>
    )
}
