import React from 'react'
import { Outlet } from 'react-router-dom'
import Navigation from '../../Navigation/Navigation'

export default function Layout() {
    return (
        <> 
            <Outlet />
            <Navigation />
        </>
    )
}