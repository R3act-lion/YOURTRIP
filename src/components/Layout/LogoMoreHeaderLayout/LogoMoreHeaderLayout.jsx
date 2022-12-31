import { React } from 'react'
import { Outlet } from 'react-router-dom'
import LogoMoreHeader from '../../Header/LogoMoreHeader/LogoMoreHeader'
import MainContainer from '../../MainContainer/MainContainer'

export default function LogoMoreHeaderLayout() {
    return (
        <>
            <LogoMoreHeader/>
            <MainContainer>
                <Outlet/>
            </MainContainer>
        </>
    )
}