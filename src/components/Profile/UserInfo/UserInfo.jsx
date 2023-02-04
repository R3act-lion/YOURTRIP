import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import ProfileImage from '../../../assets/images/profile.svg'
import FollowingBtn from '../../FollowingBtn/FollowingBtn'
import * as S from "./style"

export default function UserInfo() {
    const url = "https://mandarin.api.weniv.co.kr";
    const token = localStorage.getItem('Access Token');
    const path = useLocation().pathname
    const { id } = useParams()

    const [userinfo, setUserinfo] = useState({});
    const [followerCount, setFollowerCount] = useState();
    const [followingCount, setFollowingCount] = useState();
    const [isFollow, setIsFollow] = useState()

    useEffect(() => {
        const setData = async (token) => {
            try {
                if (path.includes("yourprofile")) {
                    const newToken = JSON.parse(localStorage.getItem('defaultAccount')).token;

                    const res = await fetch(url + `/profile/${id}`, {
                        headers: {
                            "Authorization": `Bearer ${newToken}`,
                        }
                    })
                    const resJson = await res.json()
                    setUserinfo(resJson.profile);
                    setFollowerCount(resJson.profile.followerCount)
                    setFollowingCount(resJson.profile.followingCount)
                    setIsFollow(resJson.profile.isfollow)
                } else {
                    const res = await fetch(url + `/user/myinfo`, {
                        headers: {
                            "Authorization": `Bearer ${token}`,
                        }
                    })
                    const resJson = await res.json()
                    setUserinfo(resJson.user);
                    setFollowerCount(resJson.user.followerCount)
                    setFollowingCount(resJson.user.followingCount)
                }
            } catch (e) {
                console.log(e);
            }
        }
        setData(token);
    }, [id]);

    if (!userinfo) {
        return
    }

    return (
        <S.SectionUserInfo>
            <header>
                <h2 className='irOnly'>
                    유저 정보
                </h2>
            </header>
            <S.ImageProfile src={userinfo.image} onError={(e) => e.target.src = ProfileImage} alt='프로필 이미지' />
            <S.ParagraphUserName>
                {userinfo.username}
            </S.ParagraphUserName>
            <S.ParagraphEmail>
                @ {userinfo.accountname}
            </S.ParagraphEmail>
            <S.ParagraphIntroduce>
                {userinfo.intro}
            </S.ParagraphIntroduce>
            {
                path.includes("yourprofile") ?
                    !localStorage.getItem('user')
                        ? <S.LinkLogin to='/login'>
                            팔로우
                        </S.LinkLogin>
                        : <FollowingBtn
                            followState={isFollow}
                            followerCount={setFollowerCount}
                            followingCount={setFollowingCount}
                            userinfo={userinfo} />

                    :
                    <S.LinkModify to='/profile/modify'>
                        프로필 수정
                    </S.LinkModify>
            }
            <S.LinkFollowers to='/profile/followers' state={{ userinfo }}>
                <S.ParagraphCount>
                    {followerCount}
                </S.ParagraphCount>
                <S.PragraphDesc>
                    followers
                </S.PragraphDesc>
            </S.LinkFollowers>
            <S.LinkFollowing to='/profile/following' state={{ userinfo }}>
                <S.ParagraphCount>
                    {followingCount}
                </S.ParagraphCount>
                <S.PragraphDesc>
                    following
                </S.PragraphDesc>
            </S.LinkFollowing>
        </S.SectionUserInfo>
    )
}
