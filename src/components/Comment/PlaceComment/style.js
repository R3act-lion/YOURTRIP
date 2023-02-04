import styled from "styled-components";

export const ListItemComment = styled.li`
  padding: 20px 10px;
  position: relative;

  & + li {
    border-top: 1px solid #dbdbdb;
  }
`;

export const ListItemPostComment = styled.li`
  padding: 20px 10px;
  position: relative;

  & + li {
    padding-top: -20px;
  }
`;

export const ListComment = styled.ul`
  padding: 5px 19px 65px;
`;
