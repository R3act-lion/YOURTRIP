import React from 'react';
import { useSelector } from 'react-redux';
import icon_arrow_right from '../../../assets/images/icon-arrow-right.svg';
import * as S from "../style";

export default function LocationList({ category }) {
    let categoryList = [];
    const { placeData } = useSelector(state => state.placeData);
    let newData = JSON.parse(JSON.stringify(placeData.area));
    let url = '';

    if (category === 'place') {
        url = '/location/theme';

        for (const areaKey in newData) {
            const areaData = newData[areaKey];

            newData[areaKey].count -= newData[areaKey]['전체식당'].count;

            for (const themeKey in areaData) {
                if (themeKey === '전체식당') {
                    delete areaData[themeKey]
                }
            }
        }
    }
    else if (category === 'location') {
        url = '/location/placelist';

        for (const areaKey in newData) {
            const areaData = newData[areaKey];

            newData[areaKey].count = newData[areaKey]['전체여행지'].count;

            for (const themeKey in areaData) {
                if (themeKey !== '전체여행지' && themeKey !== 'image' &&  themeKey !== 'count') {
                    delete areaData[themeKey]
                }
            }
        }
    }
    else {
        url = '/location/placelist';

        for (const areaKey in newData) {
            const areaData = newData[areaKey];

            newData[areaKey].count -= newData[areaKey]['전체여행지'].count;

            for (const themeKey in areaData) {
                if (themeKey !== '전체식당' && themeKey !== 'image' &&  themeKey !== 'count') {
                    delete areaData[themeKey]
                }
            }
        }
    }

    return (
        <S.Container>
            {
                (() => {
                    const result = [];

                    for (const key in newData) {
                        result.push(
                            <S.PlaceContainer key={key}>
                                <S.LinkLocation to={url} state={{ placeList: newData, category, area: key }}>
                                    <S.PlaceImg src={newData[key].image} />
                                    <S.PlaceDescCont>
                                        <S.PlaceHeader>{key}</S.PlaceHeader>
                                        <S.PlaceBtn src={icon_arrow_right} />
                                        <S.PlaceCount>{newData[key].count}개의 여행지</S.PlaceCount>
                                    </S.PlaceDescCont>
                                </S.LinkLocation>
                            </S.PlaceContainer>
                        )
                    }

                    return result;
                })()
            }
        </S.Container>
    )
}