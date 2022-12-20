import React from 'react'
import { Outlet } from 'react-router-dom'
import BasicHeader from '../../Header/BasicHeader/BasicHeader'

export default function BasicHeaderLayout() {
    return (
        <> 
            <BasicHeader />
            <Outlet />
        </>
    )
}