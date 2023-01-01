import { React } from 'react'
import { Outlet } from 'react-router-dom'
import LogoHeader from '../../Header/LogoHeader/LogoHeader'
import MainContainer from '../../MainContainer/MainContainer'

export default function LogoHeaderLayout() {
    return (
        <>
            <LogoHeader />
            <MainContainer>
                <Outlet />
            </MainContainer>
            
        </>
    )
}