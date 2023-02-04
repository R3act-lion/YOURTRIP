import styled, { keyframes } from "styled-components";

export const Animation1 = keyframes`
0% { transform: translate(-50%, 0); }
50% { transform: translate(0, 0); }
100% { transform: translate(-50%, 0); }
`;

export const Animation2 = keyframes`
  0% { transform: translate(50%, 0); }
  50% { transform: translate(0, 0); }
  100% { transform: translate(50%, 0); }
`;

export const Container = styled.div`
  width: 390px;
  height: 100vh;
  background-color: #ffffff;
  box-sizing: border-box;
`;

export const ImgContent = styled.div`
  padding-top: 400px;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LeftCloudImg = styled.img`
  width: 120px;
  position: absolute;
  top: 320px;
  left: 100px;
  animation: ${Animation1} 5s infinite;
`;

export const RightCloudImg = styled.img`
  width: 120px;
  position: absolute;
  right: 100px;
  top: 350px;
  animation: ${Animation2} 5s infinite;
`;

export const BalloonCenterImg = styled.img`
  width: 200px;
  position: absolute;
`;

export const LogoImg = styled.img`
  width: 250px;
  margin: 150px auto;
  text-align: center;
  display: block;
`;
