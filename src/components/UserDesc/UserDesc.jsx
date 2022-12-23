import styled from "styled-components"
import profile from '../../assets/images/profile.svg'

const DivUser = styled.div`
    list-style: none;
    display: flex;
    align-items: center;
    gap: 12px;
`

const ProfileImg = styled.img`
    width: 42px;
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

// user의 img, name, id를 props로 전달받아서 출력
export default function UserDesc({ img, name, id }) {
    return (
        <DivUser>
            <ProfileImg src={profile} alt="" />
            <UserDetailDesc>
                <UserName>{name}</UserName>
                <UserIntro>{'@' + id}</UserIntro>
            </UserDetailDesc>
        </DivUser>
    )
}
