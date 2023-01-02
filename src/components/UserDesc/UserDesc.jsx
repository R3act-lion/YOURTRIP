import { Link } from "react-router-dom"
import styled from "styled-components"
import ProfileImage from '../../assets/images/profile.svg'

const DivUser = styled(Link)`
    list-style: none;
    display: flex;
    align-items: center;
    gap: 12px;
`

const ProfileImg = styled.img`
    width: 42px;
    height: 42px;
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

export default function UserDesc({ img, name, id, addr, detail, place }) {
    return (
        <DivUser to={addr ? `/placedetail/${name}` : `/yourprofile/${id}`} state={addr ? {place} : false}>
            <ProfileImg src={img} onError={(e) => e.target.src = ProfileImage} alt="프로필 이미지" />
            <UserDetailDesc>
                <UserName>{name}</UserName>
                {
                    addr ?
                    <UserIntro>
                            {addr.split(" ")[0]} | {addr.split(" ")[1]} • {detail}    
                    </UserIntro>    
                    :
                    <UserIntro>@ {id}</UserIntro>
                }
                </UserDetailDesc>
        </DivUser>
    )
}
