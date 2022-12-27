import React from 'react'
import styled from 'styled-components'
import notfound from '../../assets/images/404Logo.svg'
import { Link, useNavigate } from 'react-router-dom'

const MainContainer = styled.main`
    min-height: calc(100vh);
`

const SectionNotFound = styled.section`
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
`

const ImageNotFound = styled.img`
    width: 256px;
`

const HeadingTwo = styled.h2`
    font-weight: 500;
    font-size: 14px;
    line-height: 14px;
    color: #767676;
`

const LinkBack = styled(Link)`
    display: inline-block;
    width: 120px;
    line-height: 44px;
    background-color: #3C70BC;
    border-radius: 44px;
    margin-top: 15px;
    font-weight: 500;
    font-size: 14px;
    color: white;
`


export default function NotFound() {
    const navigation = useNavigate();

    return (
        <>
            <header>
                <h1 className='irOnly'>404 Not Found</h1>
            </header>
            <MainContainer>
                <SectionNotFound>
                    <header>
                        <ImageNotFound src={notfound} alt='' />
                        <HeadingTwo>
                            페이지를 찾을 수 없습니다.
                        </HeadingTwo>
                    </header>
                    <LinkBack to={navigation(-1)}>
                        이전 페이지
                    </LinkBack>
                </SectionNotFound>
            </MainContainer>
        </>
    )
}