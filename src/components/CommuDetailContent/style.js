import styled from "styled-components";

export const Container = styled.div`
  padding-top: 50px;
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  overflow: hidden;
  z-index: 10;
`;

export const HeaderTitle = styled.h1`
  margin-bottom: 2px;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
`;

export const ComContact = styled.section`
  margin-top: 25px;
  display: flex;
  flex-direction: column;
`;

export const HeaderId = styled.h1`
  margin-top: 2px;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #767676;
`;

export const ContactText = styled.p`
  width: 304px;
  margin-top: 16px;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
`;

export const ContactEtc = styled.div`
  display: flex;
  align-items: center;
  margin-top: 16px;
`;

export const AddText = styled.p`
  margin-left: 6px;
  margin-right: 16px;
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;
  color: #767676;
`;

export const DateText = styled.p`
  margin-top: 20px;
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;
  color: #767676;
  margin-bottom: 0;
`;

export const ContactImgItem = styled.li`
  list-style: none;
  margin-top: 16px;
  margin-bottom: 15px;
  width: 304px;
  height: 228px;
  border-radius: 10px;
`;

export const ItemImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
`;
