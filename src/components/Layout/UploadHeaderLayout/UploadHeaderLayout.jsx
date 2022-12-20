import React from 'react'
import { Outlet } from 'react-router-dom'
import UploadHeader from '../../Header/UploadHeader/UploadHeader'

export default function UploadHeaderLayout() {
    return (
        <> 
            <UploadHeader />
            <Outlet />
        </>
    )
}