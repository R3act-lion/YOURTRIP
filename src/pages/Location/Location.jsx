import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useOutletContext } from 'react-router';
import LocationList from '../../components/PlaceList/LocationList/LocationList'

export default function Location() {
    window.scrollTo(0, 0)

    const [category, setCategory] = useOutletContext();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
        setLoading(true);
        try {
            const res = await axios.get(
            "https://sdh20282.github.io/YOURTRIP_data/data.json",
            )
            setData(Object.entries(res.data.area))
        } catch (e) {
            console.log(e);
        }
        setLoading(false)
        }
        fetchData();
    }, []);

    if (loading) {
        console.log("대기 중")
    }
    if (!data) {
        console.log("응답 값이 설정되지 않았습니다.");
        return null;
    }

    return (
        <>
            <LocationList data={data} category={category}/>
        </>
    )
}
