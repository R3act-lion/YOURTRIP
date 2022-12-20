import React from 'react'
import { Outlet } from 'react-router-dom'
import SearchHeader from '../../Header/SearchHeader/SearchHeader'

export default function SearchHeaderLayout() {
    return (
        <> 
            <SearchHeader />
            <Outlet />
        </>
    )
}