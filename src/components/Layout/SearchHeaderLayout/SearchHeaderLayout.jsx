import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { SearchContext } from '../../../context/Context'
import SearchHeader from '../../Header/SearchHeader/SearchHeader'
import MainContainer from '../../MainContainer/MainContainer'

export default function SearchHeaderLayout() {
    const [searchKeyword, setSearchKeyword] = useState('')
    return (
        <> 
            <SearchContext.Provider value={{searchKeyword, setSearchKeyword}}>
                <SearchHeader />
                <MainContainer>
                    <Outlet />
            </MainContainer>
            </SearchContext.Provider>
        </>
    )
}