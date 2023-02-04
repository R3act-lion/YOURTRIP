import styled from "styled-components";

export const ListItemDetail = styled.li`
  & + li {
    margin-top: 20px;
  }
`;

export const HeaderDetail = styled.header`
  margin-left: 22px;
`;

export const HeadingTwoTitle = styled.h2`
  font-weight: 700;
  font-size: 20px;
  line-height: 25px;
  margin-bottom: 7px;
`;

export const HeadingThreeTitle = styled.h3`
  font-weight: 700;
  font-size: 20px;
  line-height: 25px;
  margin-bottom: 7px;
`;

export const ImageMarker = styled.img`
  width: 10px;
  height: 14px;
  margin-right: 4px;
  vertical-align: top;
`;

export const ParagraphCategory = styled.p`
  display: inline-block;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  vertical-align: top;
`;

export const ListImage = styled.ul`
  width: 100%;
  overflow-x: scroll;
  display: flex;
  gap: 8px;
  padding: 2px 22px;
  touch-action: pan-x;
  margin: 7px 0;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ListDetailPlace = styled.ul`
  margin: 20px 0;
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
