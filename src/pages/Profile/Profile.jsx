import React from 'react'
import UserInfo from '../../components/Profile/UserInfo/UserInfo'
import UserPlace from '../../components/Profile/UserPlace/UserPlace'

export default function Profile() {
    setTimeout(() => {
        document.querySelector('h1').textContent = '프로필'
        window.scrollTo(0,0)
    }, 0);

    let userData = '';

    if (!!localStorage.user) {
        userData = JSON.parse(localStorage.user);
    }

    console.log(userData);

    return (
        <>
            <UserInfo />
            <UserPlace />
        </>
    )
}
