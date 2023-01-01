import { React, useState } from 'react'
import { Outlet } from 'react-router-dom'
import LogoMoreHeader from '../../Header/LogoMoreHeader/LogoMoreHeader'
import MainContainer from '../../MainContainer/MainContainer'
import MyPostModal from '../../Modal/MyPostModal'

export default function LogoMoreHeaderLayout() {
    let [myPostModal, setMyPostModal]= useState(false);

    return (
        <>
            <LogoMoreHeader setMyPostModal={setMyPostModal}/>
            <MainContainer>
                <Outlet/>
            </MainContainer>
            {myPostModal === true ? <MyPostModal setMyPostModal={setMyPostModal}/> : null}
        </>
    )
}