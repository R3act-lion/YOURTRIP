import React from 'react'
import { Outlet } from 'react-router-dom'
import LocationCategory from '../../LocationCategory/LocationCategory'

export default function CategoryNavigationLayout() {
    return (
        <> 
            {/* <CategoryNavigation /> */}
            <LocationCategory />
            <Outlet />
        </>
    )
}