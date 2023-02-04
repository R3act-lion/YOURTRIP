import styled from "styled-components";

export const ListItemCommunity = styled.li`
  flex-basis: 166px;
  flex-shrink: 0;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
`;

export const DivCommunity = styled.div`
  height: 147px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ParagraphContent = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 160%;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
`;

export const ImageCommunity = styled.img`
  width: 16px;
`;

export const SectionPost = styled.section`
  padding: 28px 0;
`;

export const HeaderCommunity = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 28px 15px 16px;
`;

export const HeadingTwoTitle = styled.h2`
  font-weight: 700;
  font-size: 22px;
  line-height: 28px;
`;

export const ImageTitle = styled.img`
  width: 10px;
  height: 18px;
`;

export const ListPost = styled.ul`
  width: 100%;
  overflow-x: scroll;
  padding: 2px 22px;
  display: flex;
  justify-content: space-between;
  gap: 8px;
  touch-action: pan-x;

  &::-webkit-scrollbar {
    display: none;
  }
`;
