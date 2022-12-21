import styled from 'styled-components'
import Button from '../../modules/Button/Button'
import profile from "../../assets/daeun-icon/default-profile.svg"

const UserLi = styled.li`
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
`

const ProfileImg = styled.img`
  width: 50px;
  border-radius: ${props => props.theme.borderRadius.circle};
`

const UserDetailDesc = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex-grow: 1;
`
const UserName = styled.p`
  font-weight: 500;
  font-size: ${props => props.theme.fontSize.lv6};
  color:  ${props => props.theme.color.text.black};
`
const UserIntro = styled.p`
  font-weight: 400;
  font-size: ${props => props.theme.fontSize.lv7};
  color: ${props => props.theme.color.gray.g1};
`
  
const FollowBtn = styled(Button)`
  float: right;
`
// user의 img, name, id를 props로 전달받아서 출력
export default function UserDescFollowBtn({index, img, name, id, isFollow}) {
  return (
    <UserLi>
      <ProfileImg src={profile} alt="" />
      {/* data 받아오면 profile -> img로 변경 */}
      <UserDetailDesc>
        <UserName>{name}</UserName>
        <UserIntro>@ {id}</UserIntro>
      </UserDetailDesc>
      {isFollow ? 
          <FollowBtn
            text="팔로우"
            color="#fff"
            backgroundColor = "#3C70BC"
            width="56px"
            height="28px"
            fontSize="12px"
          />
          :
          <FollowBtn
            text="취소"
            color="#767676"
            backgroundColor = "#fff"
            width="56px"
            height="28px"
            fontSize="12px"
            className="btnChecked"
          />
        }
    </UserLi>
  )
}
