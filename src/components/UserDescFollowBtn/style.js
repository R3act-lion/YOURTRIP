import styled from "styled-components";
import Button from "../../modules/Button/Button";

export const UserLi = styled.li`
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
`;

export const ProfileImg = styled.img`
  width: 50px;
  border-radius: ${(props) => props.theme.borderRadius.circle};
`;

export const UserDetailDesc = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex-grow: 1;
`;

export const UserName = styled.p`
  font-weight: 500;
  font-size: ${(props) => props.theme.fontSize.lv6};
  color: ${(props) => props.theme.color.text.black};
`;

export const UserIntro = styled.p`
  font-weight: 400;
  font-size: ${(props) => props.theme.fontSize.lv7};
  color: ${(props) => props.theme.color.gray.g1};
`;

export const FollowBtn = styled(Button)`
  float: right;
`;
