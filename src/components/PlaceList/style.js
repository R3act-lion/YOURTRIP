import { Link } from "react-router-dom";
import styled from "styled-components";

export const ListItemPlace = styled.li`
  flex-basis: 162px;
  flex-shrink: 0;
  position: relative;
`;

export const ImagePlace = styled.img`
  width: 100%;
  height: 217px;
  object-fit: cover;
  margin-bottom: 10px;
  border-radius: 5px;
`;

export const HeadingThreeTitle = styled.h3`
  font-weight: 500;
  font-size: 18px;
  line-height: 23px;
  margin-bottom: 5px;
`;

export const ParagraphDescription = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
`;

export const ButtonHeart = styled.button`
  width: 30px;
  height: 30px;
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const ImageHeart = styled.img`
  width: 50%;
  height: 50%;
`;

export const ListNormalPlace = styled.ul`
  margin-top: 16px;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

export const Container = styled.ul`
  padding: 25px;
  background-color: white;
`;

export const PlaceContainer = styled.li`
  & + li {
    margin-top: 16px;
  }
`;

export const LinkLocation = styled(Link)`
  display: flex;
`;

export const PlaceImg = styled.img`
  flex-shrink: 0;
  width: 77px;
  height: 77px;
  border-radius: 10px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
`;

export const PlaceDescCont = styled.div`
  width: 100%;
  padding: 15px 0px 15px 10px;
`;

export const PlaceHeader = styled.p`
  margin: 0 11px 15px 0;
  font-size: 20px;
  display: inline-block;
  font-weight: 500;
`;

export const PlaceBtn = styled.img`
  width: 9px;
  height: 16px;
`;

export const PlaceCount = styled.p`
  margin: 0;
  color: #676767;
  font-size: 14px;
  font-weight: 400;
`;
