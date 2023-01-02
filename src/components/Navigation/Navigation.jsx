import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import icon_home from '../../assets/images/nav-home.svg'
import icon_location from '../../assets/images/nav-location.svg'
import icon_community from '../../assets/images/nav-community.svg'
import icon_profile from '../../assets/images/nav-profile.svg'
import { Link } from 'react-router-dom'

const NavigationContainer = styled.nav`
    width: 390px;
    height: 60px;
    position: fixed;
    bottom: 0;
    border-top: 1px solid #DBDBDB;
    background-color: white;
    padding: 0 6px;
`

const NavigationList = styled.ul`
    display: flex;
    justify-content: space-between;
`

const NavigationListItem = styled.li`
    width: 84px;
`

const NavigationButtonImage = styled.img`
    width: 100%;
`

export default function Navigation() {
    const url = "https://mandarin.api.weniv.co.kr";
    const token = localStorage.getItem('Access Token')
    const [userName, setUserName] = useState(null)

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
            <NavigationContainer>
                <NavigationList>
                    <NavigationListItem>
                        <Link to='/'>
                            <NavigationButtonImage src={icon_home} alt="홈" />
                        </Link>
                    </NavigationListItem>
                    <NavigationListItem>
                        <Link to='/location'>
                            <NavigationButtonImage src={icon_location} alt="지역별" />
                        </Link>
                    </NavigationListItem>
                    <NavigationListItem>
                        <Link to='/community'>
                            <NavigationButtonImage src={icon_community} alt="커뮤니티" />
                        </Link>
                    </NavigationListItem>
                    <NavigationListItem>
                        <Link to={`/profile/${userName}`} >
                            <NavigationButtonImage src={icon_profile} alt="프로필" />
                        </Link>
                    </NavigationListItem>
                </NavigationList>
            </NavigationContainer>
        </article>
    )
}