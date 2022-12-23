import React from 'react'
import { Outlet } from 'react-router-dom'
import LogoBackHeader from '../../Header/LogoBackHeader/LogoBackHeader'
import MainContainer from '../../MainContainer/MainContainer'

export default function LogoBackHeaderLayout() {
    return (
        <>
            <LogoBackHeader />
            <MainContainer>
                <Outlet />
            </MainContainer>
        </>
    )
}