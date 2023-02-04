import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import Cloud_Img from '../../assets/images/logo-bg.svg';
import BalloonImg from '../../assets/images/logo-fg.svg';
import YourTripImg from '../../assets/images/YourTrip.svg';
import * as S from "./style";

export default function Splash() {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate(`/home`) 
        },3000);
    }, []);
    

  return (
    <S.Container>
        <S.ImgContent>
        <S.LeftCloudImg src={Cloud_Img} alt="" />
        <S.BalloonCenterImg src={BalloonImg} alt="" />
        <S.RightCloudImg src={Cloud_Img} alt="" />
        </S.ImgContent>
        <S.LogoImg src={YourTripImg}/>
    </S.Container>
  )
}
