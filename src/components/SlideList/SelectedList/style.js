import styled from "styled-components";

export const ListItemSelected = styled.li`
  flex-basis: 77px;
  flex-shrink: 0;
  border-radius: 5px;
  overflow: hidden;
`;

export const ImageSelected = styled.img`
  width: 100%;
  height: 77px;
  margin-bottom: 5px;
`;

export const ParagraphTitle = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
`;

export const ListSelected = styled.ul`
  width: 100%;
  overflow-x: scroll;
  padding: 0px 15px;
  display: flex;
  gap: 8px;
  -ms-overflow-style: none;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;
