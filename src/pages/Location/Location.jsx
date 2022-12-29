import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useOutletContext } from 'react-router';
import LocationList from '../../components/PlaceList/LocationList/LocationList'

export default function Location() {
    window.scrollTo(0, 0)

    const [category] = useOutletContext();

    return (
        <>
            <section>
                <header>
                    <h2 className='irOnly'>
                        지역 리스트
                    </h2>
                </header>
                <LocationList category={category} />
            </section>
        </>
    )
}
