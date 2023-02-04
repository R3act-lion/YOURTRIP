import styled from "styled-components";

export const SectionContainer = styled.section`
  min-height: calc(100vh - 108px);
  z-index: -1;
`;

export const ImageBackground = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  vertical-align: top;
  /* position: -webkit-sticky;
    position: sticky;
    top: 0; */
`;

export const ListBUtton = styled.ul`
  display: flex;
  position: sticky;
  top: 48px;
  box-shadow: 0px 1px 1px #dbdbdb;
  z-index: 20;
`;

export const ListItemBUtton = styled.li`
  flex-grow: 1;
`;

export const ButtonTab = styled.button`
  width: 100%;
  height: 44px;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  color: #858585;
  cursor: pointer;
`;

export const ListSection = styled.ul`
  z-index: 10;
`;

export const SectionHome = styled.section`
  padding: 30px 22px;
`;

export const HeadingTwoTitle = styled.h2`
  font-weight: 500;
  font-size: 24px;
  line-height: 30px;
`;

export const ImageMarker = styled.img`
  width: 10px;
  height: 14px;
  margin-right: 4px;
  vertical-align: top;
  margin-top: 5px;
`;

export const ParagraphCategory = styled.p`
  display: inline-block;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  vertical-align: top;
  margin-bottom: 20px;
  margin-top: 5px;
`;

export const ParagraphDescription = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
`;

export const SectionNear = styled.section`
  padding: 30px 22px;

  & + section {
    margin-top: -30px;
  }
`;

export const SectionMap = styled.section`
  padding: 25px 22px;
`;

export const DivMap = styled.div`
  width: 346px;
  height: 277px;
  margin-bottom: 15px;
  border-radius: 5px;
  z-index: 10;
`;

export const ParagraphAddrTItle = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;
  color: #5a5a5a;
  margin-bottom: 8px;
`;

export const ParagraphAddress = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 14px;
`;
