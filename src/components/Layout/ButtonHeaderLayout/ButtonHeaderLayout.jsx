import React from 'react'
import { Outlet } from 'react-router-dom'
import ButtonHeader from '../../Header/ButtonHeader/ButtonHeader'
import MainContainer from '../../MainContainer/MainContainer'

export default function ButtonHeaderLayout() {
    return (
        <> 
            <ButtonHeader />
            <MainContainer>
                <Outlet />
            </MainContainer>
        </>
    )
}