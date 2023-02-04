import { useEffect, useState } from "react";
import ProfileImage from '../../assets/images/profile.svg';
import * as S from "./style";

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
        // console.log(resJson);

        callBack(resJson.profile);
    } catch (err) {
        console.error(err);
    }
}

export default function UserDesc({ img, name, id, addr, detail, place }) {
    const [writer, setWriter] = useState({});

    // console.log(writer);
    
    useEffect(() => {
        if (!addr) {
            getProfile(id, setWriter);
        }
    }, [])

    // console.log(place);

    return (
        <>
            {
                writer
                    ? <S.DivUser to={addr ?
                        `/placedetail/${name}` : `/yourprofile/${id}`} state={addr ? { place } : false}>
                        <S.ProfileImg src={addr ? place.firstimage : writer.image} onError={(e) => e.target.src = ProfileImage} alt="프로필 이미지" />
                        <S.UserDetailDesc>
                            <S.UserName>{addr? place.title : writer.username}</S.UserName>
                            {
                                addr ?
                                    <S.UserIntro>
                                        {addr.split(" ")[0]} | {addr.split(" ")[1]} • {detail}
                                    </S.UserIntro>
                                    :
                                    <S.UserIntro>@ {writer.accountname}</S.UserIntro>
                            }
                        </S.UserDetailDesc>
                    </S.DivUser>
                    : <></>
            }
        </>
    )
}
