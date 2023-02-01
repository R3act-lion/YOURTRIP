import React, { useContext, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { SearchContext } from "../../context/Context"
import UserDesc from '../UserDesc/UserDesc'

const SectionResult = styled.section`
    padding: 20px;
`

const HeadingTwoResult = styled.h2`
    font-weight: 700;
    font-size: 18px;
    line-height: 14px;
    margin-top: 10px;
`

const ListResult = styled.ul`
    margin: 20px 0 40px;

    & > li + li {
        margin-top: 30px;
    }
`

export default function SearchResult() {
    const { searchKeyword } = useContext(SearchContext)
    const [userSearchList, setUserSearchList] = useState([])
    const { placeData } = useSelector(state => state.placeData);

    // place search
    const data = Object.entries(placeData.area);
    let placelist = []
    data.map(i => placelist.push(i[1].전체여행지.list.concat(i[1].전체식당.list)))
    placelist = placelist.flat();

    let searchlist = []
    if (searchKeyword.length > 0) {
        placelist.forEach(place => {
            if (place.title.indexOf(searchKeyword) === -1) {
                return
            }
            searchlist.push(place)
        })
    }

    // user search
    const url = "https://mandarin.api.weniv.co.kr";
    let token = JSON.parse(localStorage.getItem('defaultAccount')).token;

    useEffect(() => {
        if (searchKeyword.length !== 0) {
            const getData = async (token) => {
                try {
                    const res = await fetch(url + `/user/searchuser/?keyword=${searchKeyword}`, {
                        headers: {
                            "Authorization": `Bearer ${token}`,
                            "Content-type": "application/json"
                        }
                    })
                    const resJson = await res.json()
                    // console.log(resJson);
                    if (searchKeyword.length > 0) {
                        setUserSearchList(resJson)

                    }
                } catch (e) {
                    console.log(e);
                }
            }
            getData(token);
        }
        else {
            setUserSearchList([]);
        }

    }, [searchKeyword])


    return (
        <SectionResult>
            <header>
                <HeadingTwoResult>
                    장소
                </HeadingTwoResult>
            </header>
            <ListResult>
                {
                    searchlist.map(item => {
                        return (
                            <li key={item.contentid}>
                                {
                                    console.log('hi')
                                }
                                <UserDesc img={item.firstimage} name={item.title} addr={item.addr1} detail={item.detail} place={item} />
                            </li>
                        )
                    })
                }
            </ListResult>
            <header>
                <HeadingTwoResult>
                    유저
                </HeadingTwoResult>
            </header>
            <ListResult>
                {
                    userSearchList.map(item => {
                        return (
                            <li key={item.accountname}>
                                <UserDesc img={item.image} name={item.username} id={item.accountname} />
                            </li>
                        )
                    })
                }
            </ListResult>
        </SectionResult>
    )
}