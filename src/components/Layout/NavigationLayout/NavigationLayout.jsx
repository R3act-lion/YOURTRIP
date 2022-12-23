import React from 'react'
import { Outlet } from 'react-router-dom'
import Navigation from '../../Navigation/Navigation'

export default function NavigationLayout() {
    return (
        <> 
            <Outlet />
            <Navigation />
        </>
    )
}