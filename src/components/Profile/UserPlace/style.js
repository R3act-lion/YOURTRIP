import styled from "styled-components";

export const GuidePost = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 135px;
`;

export const ListButton = styled.ul`
  display: flex;
  position: sticky;
  top: 48px;
  box-shadow: 0px 1px 1px #dbdbdb;
  z-index: 20;
`;

export const ListItemButton = styled.li`
  flex-grow: 1;
`;

export const CurationList = styled.div`
  margin-top: 30px;
`;

export const ButtonTab = styled.button`
  width: 100%;
  height: 44px;
  font-weight: 500;
  font-size: 14px;
  vertical-align: top;
  color: #858585;
  cursor: pointer;
  &.on {
    font-weight: 700;
    color: ${(props) => props.theme.color.text.black};
    border-bottom: 2px solid black;
  }
`;

export const ListTheme = styled.ul`
  margin: 30px 0;
`;

export const ListPlace = styled.ul`
  margin: 30px 0;
`;

export const GuideDesc = styled.p`
  font-weight: 500;
  font-size: 16px;
  color: #858585;
`;

export const AddBtn = styled.img`
  width: 50px;
  position: fixed;
  bottom: 70px;
  right: calc(50vw - 180px);
`;
