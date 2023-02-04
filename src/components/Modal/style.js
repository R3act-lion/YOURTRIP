import styled from "styled-components";

export const ModalDiv = styled.section`
  position: fixed;
  width: 390px;
  margin: 0 auto;
  z-index: 30;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
`;

export const ModalContainer = styled.section`
  width: 390px;
  padding: 36px 0 10px;
  border-radius: 10px 10px 0 0;
  position: fixed;
  bottom: 0px;
  background-color: #fff;
`;

export const ModalListItem = styled.div`
  width: 290px;
  height: 46px;
  padding: 14px 26px;
  cursor: pointer;
`;

export const ModalBarImg = styled.img`
  display: block;
  margin: 0 auto;
  position: relative;
  bottom: 18px;
`;

export const ModalSection = styled.section`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 50%;
  width: 252px;
  margin: 0 auto;
  text-align: center;
  z-index: 50;
  background-color: #fff;
  border-radius: 10px;
`;

export const ModalHeader = styled.h1`
  padding: 22px;
  font-size: 16px;
  font-weight: 600;
`;

export const ModalSelectCont = styled.ul`
  display: flex;
  border-top: 0.5px solid #dbdbdb;
`;

export const ModalSelectItem = styled.li`
  flex-grow: 1;
  width: 50%;
  padding: 14px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
`;
