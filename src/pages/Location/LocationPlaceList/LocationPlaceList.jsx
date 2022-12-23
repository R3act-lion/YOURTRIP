import React from 'react'
import { useLocation } from 'react-router-dom'
import DetailPlaceList from '../../../components/SlideList/DetailPlaceList/DetailPlaceList';

export default function LocationPlaceList() {
    const location = useLocation();
    window.scrollTo(0,0)

    return (
        <>
            <DetailPlaceList list={location.state.list} />
        </>
    )
}