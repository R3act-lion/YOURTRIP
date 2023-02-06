import React from 'react';
import { useLocation } from 'react-router-dom';
import DetailPlaceList from '../../../components/SlideList/DetailPlaceList/DetailPlaceList';

export default function HomePlaceList() {
    const location = useLocation();
    const list = location.state.placelist
    const data = location.state.data
    window.scrollTo(0,0)

    return (
        <>
            <DetailPlaceList data={data} placeList={list} />
        </>
    )
}