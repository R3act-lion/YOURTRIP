import { React, useState } from 'react'
import { Outlet } from 'react-router-dom'
import BasicHeader from '../../Header/BasicHeader/BasicHeader'
import MainContainer from '../../MainContainer/MainContainer'
import LogoutModal from '../../Modal/LogoutModal'
import ProfileModal from '../../Modal/ProfileModal'

export default function BasicHeaderLayout() {
    let [profileModal, setProfileModal]= useState(false);
    let [logoutModal, setLogoutModal]= useState(false);

    return (
        <> 
            <BasicHeader setProfileModal={setProfileModal}/>
            <MainContainer>
                <Outlet />
            </MainContainer>
            {logoutModal === true ? <LogoutModal setLogoutModal={setLogoutModal}/> : null}
            {profileModal === true ? <ProfileModal setProfileModal={setProfileModal} setLogoutModal={setLogoutModal}/> : null}
        </>
    )
}