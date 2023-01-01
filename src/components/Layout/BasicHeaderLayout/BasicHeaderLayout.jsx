import { React, useState } from 'react'
import { Outlet } from 'react-router-dom'
import BasicHeader from '../../Header/BasicHeader/BasicHeader'
import MainContainer from '../../MainContainer/MainContainer'

export default function BasicHeaderLayout() {

    return (
        <> 
            <BasicHeader />
            <MainContainer>
                <Outlet />
            </MainContainer>
        </>
    )
}