import profile from "../../assets/daeun-icon/default-profile.svg"
import * as S from "./style"

// user의 img, name, id를 props로 전달받아서 출력
export default function UserDescFollowBtn({index, img, name, id, isFollow}) {
  return (
    <S.UserLi>
      <S.ProfileImg src={profile} alt="" />
      {/* data 받아오면 profile -> img로 변경 */}
      <S.UserDetailDesc>
        <S.UserName>{name}</S.UserName>
        <S.UserIntro>@ {id}</S.UserIntro>
      </S.UserDetailDesc>
      {isFollow ? 
          <S.FollowBtn
            text="팔로우"
            color="#fff"
            backgroundColor = "#3C70BC"
            width="56px"
            height="28px"
            fontSize="12px"
          />
          :
          <S.FollowBtn
            text="취소"
            color="#767676"
            backgroundColor = "#fff"
            width="56px"
            height="28px"
            fontSize="12px"
            className="btnChecked"
          />
        }
    </S.UserLi>
  )
}
