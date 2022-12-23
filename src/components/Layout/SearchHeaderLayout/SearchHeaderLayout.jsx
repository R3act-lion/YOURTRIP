import React from 'react'
import { Outlet } from 'react-router-dom'
import SearchHeader from '../../Header/SearchHeader/SearchHeader'
import MainContainer from '../../MainContainer/MainContainer'

export default function SearchHeaderLayout() {
    return (
        <> 
            <SearchHeader />
            <MainContainer>
                <Outlet />
            </MainContainer>
        </>
    )
}