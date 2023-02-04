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

export const ImageLeftArrow = styled.img`
  width: 22px;
`;

export const ButtonMore = styled.button`
  width: 24px;
  height: 24px;
  margin-left: auto;
  cursor: pointer;
`;

export const ImageMore = styled.img`
  width: 100%;
`;

export const HeadingOneTitle = styled.h1`
  font-weight: 500;
  font-size: ${(props) => props.theme.fontSize.lv4};
  line-height: 23px;
  margin-left: 10px;
`;

export const ButtonPrev = styled.button`
  height: 22px;
  cursor: pointer;
`;
