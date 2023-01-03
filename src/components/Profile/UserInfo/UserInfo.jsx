import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import ProfileImage from '../../../assets/images/profile.svg'
import { Link, useLocation, useParams } from 'react-router-dom'
import Button from '../../../modules/Button/Button'
import FollowingBtn from '../../FollowingBtn/FollowingBtn'

const SectionUserInfo = styled.section`
    padding: 30px 0;
    border-bottom: 5px solid #EFEFEF;
    position: relative;
    text-align: center;
`

const ImageProfile = styled.img`
    width: 110px;
    height: 110px;
    vertical-align: top;
    margin-bottom: 16px;
    border-radius: ${props => props.theme.borderRadius.circle};
`

const ParagraphUserName = styled.p`
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    margin-bottom: 6px;
`

const ParagraphEmail = styled.p`
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    margin-bottom: 16px;
    color: #767676;
`

const ParagraphIntroduce = styled.p`
    font-weight: 400;   
    font-size: 14px;
    line-height: 18px;
    color: #767676;
    margin-bottom: 24px;
`

const LinkModify = styled(Link)`
    display: inline-block;
    padding: 8px 26px;
    border: 1px solid #DBDBDB;
    border-radius: 30px;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    color: #767676;
    cursor: pointer;
`

const LinkFollowers = styled(Link)`
    display: flex;
    flex-direction: column;
    gap: 3px;
    position: absolute;
    top: 65px;
    left: 55px;
`
const LinkFollowing = styled(Link)`
    display: flex;
    flex-direction: column;
    gap: 3px;
    position: absolute;
    top: 65px;
    right: 55px;
`

const ParagraphCount = styled.p`
    font-weight: 700;
    font-size: 18px;
    line-height: 23px;
`

const PragraphDesc = styled.p`
    font-weight: 400;
    font-size: 10px;
    line-height: 13px;
    color: #767676;
`

const LinkLogin = styled(Link)`
    background: #3C70BC;
    border-radius: 30px;    
    border: none;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    color: white;
    padding: 8px 40px;
`

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
        <SectionUserInfo>
            <header>
                <h2 className='irOnly'>
                    유저 정보
                </h2>
            </header>
            <ImageProfile src={userinfo.image} onError={(e) => e.target.src = ProfileImage} alt='프로필 이미지' />
            <ParagraphUserName>
                {userinfo.username}
            </ParagraphUserName>
            <ParagraphEmail>
                @ {userinfo.accountname}
            </ParagraphEmail>
            <ParagraphIntroduce>
                {userinfo.intro}
            </ParagraphIntroduce>
            {
                path.includes("yourprofile") ?
                    !localStorage.getItem('user')
                        ? <LinkLogin to='/login'>
                            팔로우
                        </LinkLogin>
                        : <FollowingBtn
                            followState={isFollow}
                            followerCount={setFollowerCount}
                            followingCount={setFollowingCount}
                            userinfo={userinfo} />

                    :
                    <LinkModify to='/profile/modify'>
                        프로필 수정
                    </LinkModify>
            }
            <LinkFollowers to='/profile/followers' state={{ userinfo }}>
                <ParagraphCount>
                    {followerCount}
                </ParagraphCount>
                <PragraphDesc>
                    followers
                </PragraphDesc>
            </LinkFollowers>
            <LinkFollowing to='/profile/following' state={{ userinfo }}>
                <ParagraphCount>
                    {followingCount}
                </ParagraphCount>
                <PragraphDesc>
                    following
                </PragraphDesc>
            </LinkFollowing>
        </SectionUserInfo>
    )
}
