import React from 'react'
import { useLocation } from 'react-router-dom'
import DetailPlaceList from '../../../components/SlideList/DetailPlaceList/DetailPlaceList';

export default function LocationPlaceList() {
    window.scrollTo(0, 0)
    const location = useLocation();
    const placelist = location.state.placelist;
    const data = location.state.data;
    const category = location.state.category;
    const area = location.state.area;

    return (
        <>
            {
                category === 'restaurant' || category === 'cafe'
                ? <DetailPlaceList placeList={location.state.placeList[area]['전체식당']['list']} data={data} />
                : <DetailPlaceList placeList={placelist} data={data} />
            }
        </>
    )
}