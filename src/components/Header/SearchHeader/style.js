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

export const InputSearch = styled.input`
  width: 316px;
  height: 32px;
  background: #f2f2f2;
  border-radius: 32px;
  border: none;
  outline: none;
  margin-left: 20px;
  padding: 7px 16px;
`;

export const ButtonPrev = styled.button`
  height: 22px;
  cursor: pointer;
`;
