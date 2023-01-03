import { useEffect, useState } from "react"
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

const getProfile = async (id, callBack) => {
    const uploadAccount = JSON.parse(localStorage.getItem('defaultAccount'));
    const url = "https://mandarin.api.weniv.co.kr";

    try {
        const res = await fetch(url + "/profile/" + id, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${uploadAccount.token}`,
                "Content-Type": "application/json",
            }
        });
        const resJson = await res.json();
        console.log('click');

        callBack(resJson.profile);
    } catch (err) {
        console.error(err);
    }
}

export default function UserDesc({ img, name, id, addr, detail, place }) {
    const [writer, setWriter] = useState({});

    useEffect(() => {
        getProfile(id, setWriter);
    }, [])

    console.log(place);

    return (
        <>
            {
                writer
                    ? <DivUser to={addr ?
                        `/placedetail/${name}` : `/yourprofile/${id}`} state={addr ? { place } : false}>
                        <ProfileImg src={addr ? place.firstimage : writer.image} onError={(e) => e.target.src = ProfileImage} alt="프로필 이미지" />
                        <UserDetailDesc>
                            <UserName>{addr? place.title : writer.username}</UserName>
                            {
                                addr ?
                                    <UserIntro>
                                        {addr.split(" ")[0]} | {addr.split(" ")[1]} • {detail}
                                    </UserIntro>
                                    :
                                    <UserIntro>@ {writer.accountname}</UserIntro>
                            }
                        </UserDetailDesc>
                    </DivUser>
                    : <></>
            }
        </>
    )
}
