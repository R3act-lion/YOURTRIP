import styled from "styled-components";

export const ImgSlide = styled.div`
  display: ${(props) => (props.image === "null" ? "none" : "block")};
  width: 100%;
  overflow-x: scroll;
  display: flex;
  gap: 8px;
  touch-action: pan-x;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ContactImg = styled.img`
  width: 121px;
  height: 126px;
  margin-top: 10px;
  border: 0.5px solid #dbdbdb;
  border-radius: 10px;
`;

export const Container = styled.div`
  padding-top: 25px;
  width: 390px;
  text-align: center;
  background-color: #ffffff;
`;

export const ComContact = styled.div`
  margin-left: 30px;
  margin-right: 30px;
  padding-top: 50px;
  text-align: left;
`;

export const SearchTitle = styled.h1`
  display: inline;
  font-size: 16px;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #3c70bc;
`;

export const ContactText = styled.p`
  margin-left: 3px;
  display: inline;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
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
  margin-top: 14px;
  text-align: left;
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;
  color: #767676;
`;
