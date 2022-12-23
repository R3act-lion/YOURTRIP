import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import icon_arrow_right from '../../../assets/images/icon-arrow-right.svg'

let locationArr = ['서울', '경기도', '강원도', '제주도', '충청남도', '충청북도', '전라남도', '전라북도'];

const Container = styled.ul`
    padding: 25px;
    background-color: white;
`

const PlaceContainer = styled.li`
    & + li {
        margin-top: 16px;
    }
`

const LinkLocation = styled(Link)`
    display: flex;
`

const PlaceImg = styled.img`
    flex-shrink: 0;
    width: 77px;
    height: 77px;
    border-radius: 10px;
    border-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
`

const PlaceDescCont = styled.div`
    width: 100%;
    padding: 15px 0px 15px 10px;
`

const PlaceHeader = styled.p`
    margin: 0 11px 15px 0;
    font-size: 20px;
    display: inline-block;
    font-weight: 500;
`

const PlaceBtn = styled.img`
    width: 9px;
    height: 16px;
`

const PlaceCount = styled.p`
    margin: 0;
    color: #676767;
    font-size: 14px;
    font-weight: 400;
`

export default function LocationList() {
    return (
        <Container>
            {
                locationArr.map((a) => {
                    return (
                        <PlaceContainer key={a}>
                            <LinkLocation to='/location/theme' >
                                <PlaceImg src={'https://cdn.pixabay.com/photo/2022/12/10/11/05/snow-7646952_1280.jpg'} />
                                <PlaceDescCont>
                                    <PlaceHeader>{a}</PlaceHeader>
                                    <PlaceBtn src={icon_arrow_right} />
                                    <PlaceCount>200개의 여행지</PlaceCount>
                                </PlaceDescCont>
                            </LinkLocation>
                        </PlaceContainer>
                    )
                })
            }
        </Container>
    )
}