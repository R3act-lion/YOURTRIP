import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router';
import styled, { keyframes } from 'styled-components';
import Cloud_Img from '../../assets/images/logo-bg.svg'
import BalloonImg from '../../assets/images/logo-fg.svg'
import YourTripImg from '../../assets/images/YourTrip.svg'

const Animation1 = keyframes`
0% { transform: translate(-50%, 0); }
50% { transform: translate(0, 0); }
100% { transform: translate(-50%, 0); }
`;


const Animation2 = keyframes`

0% { transform: translate(50%, 0); }
50% { transform: translate(0, 0); }
100% { transform: translate(50%, 0); }
`;

const Container = styled.div`
    width: 390px;
    height: 100vh;
    background-color: #FFFFFF;
    box-sizing: border-box;
`

const ImgContent = styled.div`
    padding-top: 400px;
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const LeftCloudImg = styled.img`
    width: 120px;
    position: absolute;
    top: 320px;
    left: 100px;
    animation: ${Animation1} 5s infinite;
`

const RightCloudImg = styled.img`
    width: 120px;
    position: absolute;
    right: 100px;
    top:350px;
    animation: ${Animation2} 5s infinite;
`

const BalloonCenterImg = styled.img`
    width: 200px;
    position: absolute;
`

const LogoImg = styled.img`
width: 250px;
margin: 150px auto;
text-align: center;
display: block;
`


export default function Splash() {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate(`/home`) 
        },3000);
    }, []);
    

  return (
    <Container>
        <ImgContent>
        <LeftCloudImg src={Cloud_Img} alt="" />
        <BalloonCenterImg src={BalloonImg} alt="" />
        <RightCloudImg src={Cloud_Img} alt="" />
        </ImgContent>
        <LogoImg src={YourTripImg}/>
    </Container>
  )
}
