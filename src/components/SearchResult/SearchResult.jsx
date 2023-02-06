import React, { useContext, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { SearchContext } from "../../context/Context"
import useDebounce from '../../Hook/useDebounce'
import { searchUser } from '../../Upload/api'
import UserDesc from '../UserDesc/UserDesc'
import * as S from "./style"

export default function SearchResult() {
    const { searchKeyword } = useContext(SearchContext)
    const [userSearchList, setUserSearchList] = useState([])
    const { placeData } = useSelector(state => state.placeData);
    const debounceValue = useDebounce({ value: searchKeyword, delay: 500 })
    

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
    const getData = async (value) => {
        const response = await searchUser(value)
        setUserSearchList(response)
    }

    useEffect(() => {
        if (debounceValue.length !== 0) {
            getData(debounceValue)
        } else {
            setUserSearchList([]);
        }
    }, [debounceValue])


    return (
        <S.SectionResult>
                <S.HeadingTwoResult>
                    장소
                </S.HeadingTwoResult>
            <S.ListResult>
                {
                    searchlist.map(item => {
                        return (
                            <li key={item.contentid}>
                                <UserDesc img={item.firstimage} name={item.title} addr={item.addr1} detail={item.detail} place={item} />
                            </li>
                        )
                    })
                }
            </S.ListResult>
                <S.HeadingTwoResult>
                    유저
                </S.HeadingTwoResult>
            <S.ListResult>
                {
                    userSearchList.map(item => {
                        return (
                            <li key={item.accountname}>
                                <UserDesc img={item.image} name={item.username} id={item.accountname} />
                            </li>
                        )
                    })
                }
            </S.ListResult>
        </S.SectionResult>
    )
}