import React from 'react'
import styled from 'styled-components'
import icon_home from '../../../assets/images/nav-home.svg'
import icon_location from '../../../assets/images/nav-location.svg'
import icon_community from '../../../assets/images/nav-community.svg'
import icon_profile from '../../../assets/images/nav-profile.svg'
import { Link } from 'react-router-dom'

const HiddenHeader = styled.header`
    position: absolute;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    width: 1px;
    height: 1px;
    margin: -1px;
    overflow: hidden;
`

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
    return (
        <article>
            <HiddenHeader>
                <h2>네비게이션</h2>
            </HiddenHeader>
            <NavigationContainer>
                <NavigationList>
                    <NavigationListItem>
                        <Link to='/'>
                            <NavigationButtonImage src={icon_home} alt="홈" />
                        </Link>
                    </NavigationListItem>
                    <NavigationListItem>
                        <Link to='/'>
                            <NavigationButtonImage src={icon_location} alt="지역별" />
                        </Link>
                    </NavigationListItem>
                    <NavigationListItem>
                        <Link to='/'>
                            <NavigationButtonImage src={icon_community} alt="커뮤니티" />
                        </Link>
                    </NavigationListItem>
                    <NavigationListItem>
                        <Link to='/'>
                            <NavigationButtonImage src={icon_profile} alt="프로필" />
                        </Link>
                    </NavigationListItem>
                </NavigationList>
            </NavigationContainer>
        </article>
    )
}