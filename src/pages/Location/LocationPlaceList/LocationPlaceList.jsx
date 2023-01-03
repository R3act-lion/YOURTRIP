import React from 'react'
import { useLocation } from 'react-router-dom'
import DetailPlaceList from '../../../components/SlideList/DetailPlaceList/DetailPlaceList';

export default function LocationPlaceList() {
    window.scrollTo(0, 0)
    const location = useLocation();
    const placelist = location.state.placeList;
    const data = location.state.data;
    const category = location.state.category;
    const area = location.state.area;

    let cafelist, restaurantlist;

    if( category === 'restaurant' || category === 'cafe' ){
        cafelist = placelist[area]['전체식당']['list'].filter(i => i.detail === '바/까페')
        restaurantlist = placelist[area]['전체식당']['list'].filter(i => i.detail !== '바/까페')
    }

    return (
        <>
            {
                category === 'restaurant' || category === 'cafe'
                    ?
                        category === 'restaurant' ?
                        <DetailPlaceList placeList={restaurantlist} data={data} />
                        :
                        <DetailPlaceList placeList={cafelist} data={data} />
                    :
                    <DetailPlaceList placeList={placelist[area]['전체여행지']['list']} data={data} />
            }
        </>
    )
}