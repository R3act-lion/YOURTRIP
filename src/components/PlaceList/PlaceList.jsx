import React from 'react'
import styled from 'styled-components'
import icon_arrow_right from '../../assets/images/icon-arrow-right.svg'

let locationArr= ['서울', '경기도', '강원도', '제주도', '충청남도', '충청북도', '전라남도', '전라북도'];

const Container= styled.div`
    padding: 26px 0px 21px 25px;
    background-color: #F5F5F5;
`

const PlaceContainer = styled.section`
    display: flex;
    margin-bottom: 16px;
`

const PlaceImg = styled.img`
    flex-shrink: 0;
    width: 77px;
    height: 77px;
    border-radius: 10px;
    border-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
`

const PlaceDescCont = styled.section`
    width: 100%;
    padding: 15px 0px 15px 10px;
`

const PlaceHeader = styled.h2`
    margin: 0 11px 8px 0;
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

export default function PlaceCont() {
  return (
    <Container>
        {locationArr.map((a)=>{
        return(
            
            <PlaceContainer>
                <PlaceImg src={'https://cdn.pixabay.com/photo/2022/12/10/11/05/snow-7646952_1280.jpg'}/>
                <PlaceDescCont>
                    <PlaceHeader>{a}</PlaceHeader>
                    <PlaceBtn src={icon_arrow_right}/>
                    <PlaceCount>200개의 여행지</PlaceCount>
                </PlaceDescCont>
            </PlaceContainer>       
        )
    })}
    </Container>
  )}