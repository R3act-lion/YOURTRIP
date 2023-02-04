import styled from "styled-components";

export const ListItemPlace = styled.li`
  flex-basis: 190px;
  flex-shrink: 0;
  position: relative;
`;

export const ImagePlace = styled.img`
  width: 100%;
  height: 255px;
  object-fit: cover;
  margin-bottom: 10px;
  border-radius: 5px;
`;

export const HeadingThreeTitle = styled.h3`
  font-weight: 700;
  font-size: 20px;
  line-height: 25px;
  margin-bottom: 5px;
`;

export const ParagraphDescription = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
`;

export const ButtonHeart = styled.button`
  width: 36px;
  height: 36px;
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

export const ListPlace = styled.ul`
  width: 100%;
  overflow-x: scroll;
  padding: 2px 22px;
  display: flex;
  justify-content: space-between;
  gap: 25px;
  touch-action: pan-x;

  &::-webkit-scrollbar {
    display: none;
  }
`;
