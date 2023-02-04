import React, { useEffect, useState } from 'react'
import icon_community from '../../assets/images/nav-community.svg'
import icon_home from '../../assets/images/nav-home.svg'
import icon_location from '../../assets/images/nav-location.svg'
import icon_profile from '../../assets/images/nav-profile.svg'

import { Link, useLocation } from 'react-router-dom'
import icon_community_fill from '../../assets/images/nav-community-fill.svg'
import icon_home_fill from '../../assets/images/nav-home-fill.svg'
import icon_location_fill from '../../assets/images/nav-location-fill.svg'
import icon_profile_fill from '../../assets/images/nav-profile-fill.svg'
import * as S from "./style"

export default function Navigation() {
    const url = "https://mandarin.api.weniv.co.kr";
    const token = localStorage.getItem('Access Token')
    const [userName, setUserName] = useState(null)
    const path = useLocation().pathname

    const [home, setHome] = useState(true)
    const [location, setLocation] = useState(false)
    const [community, setCommunity] = useState(false)
    const [profile, setProfile] = useState(false)

    useEffect(() => {
        if (path.includes('home') ) {
            setHome(true)
            setLocation(false)
            setCommunity(false)
            setProfile(false)
        } else if (path.includes('location')) {
            setHome(false)
            setLocation(true)
            setCommunity(false)
            setProfile(false)
        } else if (path.includes('community') || path.includes('post')) {
            setHome(false)
            setLocation(false)
            setCommunity(true)
            setProfile(false)
        } else if (path.includes('profile')) {
            setHome(false)
            setLocation(false)
            setCommunity(false)
            setProfile(true)
        }
    },[path])

    useEffect(() => {
        const setData = async (token) => {
            try {
                const res = await fetch(url + `/user/myinfo`, {
                    headers : {
                        "Authorization" : `Bearer ${token}`,
                    }
                })
                const resJson = await res.json()
                setUserName(resJson.user.accountname);
            } catch (e) {
                console.log(e);
            }
        }
        setData(token);
    }, []);

    return (
        <article>
            <header>
                <h2 className='irOnly'>네비게이션</h2>
            </header>
            <S.NavigationContainer>
                <S.NavigationList>
                    <S.NavigationListItem>
                        <Link to='/home'>
                            <S.NavigationButtonImage
                                src={home ? icon_home_fill : icon_home}
                                onClick={() => {
                                    setHome(true)
                                    setLocation(false)
                                    setCommunity(false)
                                    setProfile(false)
                                }}
                                alt="홈" />
                        </Link>
                    </S.NavigationListItem>
                    <S.NavigationListItem>
                        <Link to='/location'>
                            <S.NavigationButtonImage
                                src={location ? icon_location_fill : icon_location}
                                onClick={() => {
                                    setHome(false)
                                    setLocation(true)
                                    setCommunity(false)
                                    setProfile(false)
                                }}
                                alt="지역별" />
                        </Link>
                    </S.NavigationListItem>
                    <S.NavigationListItem>
                        <Link to='/community'>
                            <S.NavigationButtonImage
                                src={community ? icon_community_fill : icon_community}
                                onClick={() => {
                                    setHome(false)
                                    setLocation(false)
                                    setCommunity(true)
                                    setProfile(false)
                                }}
                                alt="커뮤니티" />
                        </Link>
                    </S.NavigationListItem>
                    <S.NavigationListItem>
                        {
                            userName ? 
                                <Link to={`/profile/${userName}`} >
                                    <S.NavigationButtonImage
                                        src=
                                        {profile ? icon_profile_fill : icon_profile}
                                        onClick={() => {
                                            setHome(false)
                                            setLocation(false)
                                            setCommunity(false)
                                            setProfile(true)
                                        }}
                                        alt="프로필" />
                                </Link>
                            :
                                <Link to={`/login`} >
                                <S.NavigationButtonImage src={icon_profile} alt="프로필" />
                                </Link>
                        }
                    </S.NavigationListItem>
                </S.NavigationList>
            </S.NavigationContainer>
        </article>
    )
}