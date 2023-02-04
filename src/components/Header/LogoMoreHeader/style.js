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
  right: 40px;
`;

export const ImageSearch = styled.img`
  width: 100%;
`;

export const ButtonMore = styled.button`
  width: 24px;
  height: 24px;
  position: absolute;
  right: 12px;
  cursor: pointer;
`;

export const ImageMore = styled.img`
  width: 100%;
`;

export const Modal = styled.section`
  border-radius: 10px;
  height: 110px;
`;
