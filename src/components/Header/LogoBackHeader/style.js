import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 390px;
  height: 48px;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  border-bottom: 1px solid ${(props) => props.theme.color.gray.g2};
  background-color: white;
  position: fixed;
  z-index: 20;
`;

export const HeadingOneTitle = styled.h1`
  width: 96px;
  margin: 0 auto;
`;

export const ImageLogo = styled.img`
  width: 100%;
`;

export const LinkSearch = styled(Link)`
  width: 18px;
  position: absolute;
  margin-right: 16px;
`;

export const ImageSearch = styled.img`
  width: 100%;
`;

export const ButtonPrev = styled.button`
  height: 22px;
  position: absolute;
  left: 16px;
  cursor: pointer;
`;

export const ImageLeftArrow = styled.img`
  width: 22px;
`;
