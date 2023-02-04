import styled from "styled-components";

export const ListItemRecommend = styled.li`
  & + li {
    margin-top: 32px;
  }
`;

export const HeaderTheme = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 22px 16px 22px;
`;

export const ImageListTitle = styled.h3`
  display: inline-block;
  font-weight: 700;
  font-size: 18px;
  line-height: 23px;
`;

export const ImageArrowRight = styled.img`
  width: 10px;
  height: 18px;
`;

export const ListItemImage = styled.li`
  flex-basis: 212px;
  flex-shrink: 0;
  height: 280px;
`;

export const ImageItem = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
`;
