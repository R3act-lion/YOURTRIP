import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 390px;
  height: 48px;
  display: flex;
  align-items: center;
  padding: 12px;
  border-bottom: 1px solid ${(props) => props.theme.color.gray.g2};
  background-color: white;
  position: fixed;
  z-index: 20;
`;

export const LeftArrowImage = styled.img`
  width: 22px;
`;

export const BasicTitle = styled.h1`
  position: absolute;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
`;

export const LinkPrev = styled(Link)`
  cursor: pointer;
`;
