import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import LocationCategory from '../../LocationCategory/LocationCategory'

export default function CategoryNavigationLayout() {
    const [category, setCategory] = useState("place")

    const getCategory = (e) => {
        setCategory(e)
    }

    return (
        <> 
            {/* <CategoryNavigation /> */}
            <LocationCategory />
            <Outlet />
        </>
    )
}