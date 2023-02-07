import { useState } from "react";
import ProfileImage from '../../assets/images/profile.svg';
import { getProfile } from "../../Upload/api";
import * as S from "./style";

const getUserProfile = async (id, callBack) => {
    const response = await getProfile(id)
    callBack(response)
}

export default function UserDesc({ img, name, id, addr, detail, place }) {
    const [writer, setWriter] = useState({});

    const handleSend = () => {
        getUserProfile(id, setWriter);
    }

    return (
        <>
            {
                writer
                    ? <S.DivUser onClick={handleSend} to={addr ?
                        `/placedetail/${name}` : `/yourprofile/${id}`} state={addr ? { place } : false}>
                        <S.ProfileImg src={addr ? place.firstimage : img} onError={(e) => e.target.src = ProfileImage} alt="프로필 이미지" />
                        <S.UserDetailDesc>
                            <S.UserName>{addr? place.title : name}</S.UserName>
                            {
                                addr ?
                                    <S.UserIntro>
                                        {addr.split(" ")[0]} | {addr.split(" ")[1]} • {detail}
                                    </S.UserIntro>
                                    :
                                    <S.UserIntro>@ {id}</S.UserIntro>
                            }
                        </S.UserDetailDesc>
                    </S.DivUser>
                    : <></>
            }
        </>
    )
}
