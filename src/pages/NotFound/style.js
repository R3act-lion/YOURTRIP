import { Link } from "react-router-dom";
import styled from "styled-components";

export const MainContainer = styled.main`
  min-height: calc(100vh);
`;

export const SectionNotFound = styled.section`
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
`;

export const ImageNotFound = styled.img`
  width: 256px;
`;

export const HeadingTwo = styled.h2`
  font-weight: 500;
  font-size: 14px;
  line-height: 14px;
  color: #767676;
`;

export const LinkBack = styled(Link)`
  display: inline-block;
  width: 120px;
  line-height: 44px;
  background-color: #3c70bc;
  border-radius: 44px;
  margin-top: 15px;
  font-weight: 500;
  font-size: 14px;
  color: white;
`;
