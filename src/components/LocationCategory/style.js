import styled from "styled-components";

export const Container = styled.article`
  background-color: #f5f5f5;
  padding: 15px;
  position: sticky;
  top: 48px;
`;

export const CategoryList = styled.ul`
  display: flex;
  justify-content: space-between;
`;

export const CategoryListItem = styled.li`
  list-style: none;
  width: 69px;
`;

export const CategoryButtonImage = styled.img`
  width: 100%;
`;

export const CategoryName = styled.span`
  margin-top: 6px;
  display: block;
  font-size: 12px;
  text-align: center;
`;
