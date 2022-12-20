import React from 'react'
import { Outlet } from 'react-router-dom'
import LogoHeader from '../../Header/LogoHeader/LogoHeader'

export default function LogoHeaderLayout() {
    return (
        <> 
            <LogoHeader />
            <Outlet />
        </>
    )
}