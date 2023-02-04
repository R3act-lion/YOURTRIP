import { Link } from "react-router-dom";
import styled from "styled-components";

export const SectionUserInfo = styled.section`
  padding: 30px 0;
  border-bottom: 5px solid #efefef;
  position: relative;
  text-align: center;
`;

export const ImageProfile = styled.img`
  width: 110px;
  height: 110px;
  vertical-align: top;
  margin-bottom: 16px;
  border-radius: ${(props) => props.theme.borderRadius.circle};
`;

export const ParagraphUserName = styled.p`
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  margin-bottom: 6px;
`;

export const ParagraphEmail = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  margin-bottom: 16px;
  color: #767676;
`;

export const ParagraphIntroduce = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #767676;
  margin-bottom: 24px;
`;

export const LinkModify = styled(Link)`
  display: inline-block;
  padding: 8px 26px;
  border: 1px solid #dbdbdb;
  border-radius: 30px;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: #767676;
  cursor: pointer;
`;

export const LinkFollowers = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 3px;
  position: absolute;
  top: 65px;
  left: 55px;
`;

export const LinkFollowing = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 3px;
  position: absolute;
  top: 65px;
  right: 55px;
`;

export const ParagraphCount = styled.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 23px;
`;

export const PragraphDesc = styled.p`
  font-weight: 400;
  font-size: 10px;
  line-height: 13px;
  color: #767676;
`;

export const LinkLogin = styled(Link)`
  background: #3c70bc;
  border-radius: 30px;
  border: none;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: white;
  padding: 8px 40px;
`;
