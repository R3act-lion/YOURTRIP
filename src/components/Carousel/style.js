import styled from "styled-components";
import dotCurrent from "../../assets/images/icon-dot-current.svg";
import dot from "../../assets/images/icon-dot.svg";

export const ImageContent = styled.img`
  width: 290px;
  height: 228px;
  vertical-align: top;
  margin-bottom: 15px;
  border-radius: 10px;
  flex-shrink: 0;
`;

export const ImageCont = styled.section`
  width: 290px;
  overflow-x: hidden;
`;

export const ImageList = styled.ul`
  width: 100%;
  display: flex;
`;

export const ImageDiv = styled.div`
  position: relative;
`;

export const DotIconList = styled.ul`
  display: flex;
  gap: 6px;
  position: absolute;
  top: 208px;
  right: 134px;
  z-index: 10;
`;

export const DotIcon = styled.li`
  width: 6px;
  height: 6px;
  background-image: url(${dot});
`;

export const DotCurrentIcon = styled.li`
  width: 6px;
  height: 6px;
  background-image: url(${dotCurrent});
`;
