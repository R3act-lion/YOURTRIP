import { React, useState } from 'react'
import { Outlet } from 'react-router-dom'
import LogoMoreHeader from '../../Header/LogoMoreHeader/LogoMoreHeader'
import MainContainer from '../../MainContainer/MainContainer'

export default function LogoMoreHeaderLayout() {
    let [modal, setModal]=useState(false);
    return (
        <>
            <LogoMoreHeader modal={modal} setModal={setModal}/>
            <MainContainer>
                <Outlet modal={modal} setModal={setModal}/>
            </MainContainer>
        </>
    )
}