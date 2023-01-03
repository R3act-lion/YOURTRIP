import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import icon_arrow_right from '../../../assets/images/icon-arrow-right.svg'

const Container = styled.ul`
    padding: 25px;
    background-color: white;
`

const PlaceContainer = styled.li`
    & + li {
        margin-top: 16px;
    }
`

const LinkLocation = styled(Link)`
    display: flex;
`

const PlaceImg = styled.img`
    flex-shrink: 0;
    width: 77px;
    height: 77px;
    border-radius: 10px;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
`

const PlaceDescCont = styled.div`
    width: 100%;
    padding: 15px 0px 15px 10px;
`

const PlaceHeader = styled.p`
    margin: 0 11px 15px 0;
    font-size: 20px;
    display: inline-block;
    font-weight: 500;
`

const PlaceBtn = styled.img`
    width: 9px;
    height: 16px;
`

const PlaceCount = styled.p`
    margin: 0;
    color: #676767;
    font-size: 14px;
    font-weight: 400;
`

export default function LocationList({ category }) {
    let categoryList = [];
    const { placeData } = useSelector(state => state.placeData);
    let newData = JSON.parse(JSON.stringify(placeData.area));
    let url = '';

    console.log(category);

    if (category === 'place' ) {
        url = '/location/theme';

        for (const areaKey in newData) {
            const areaData = newData[areaKey];

            newData[areaKey].count -= newData[areaKey]['전체식당'].count;

            for (const themeKey in areaData) {
                console.log(themeKey);
                if (themeKey === '전체식당') {
                    delete areaData[themeKey]
                }
            }
        }
    }
    else {
        url = '/location/placelist';

        
        for (const areaKey in newData) {
            const areaData = newData[areaKey];
            // console.log(areaData);
            
            if (category === 'location') {
                newData[areaKey].count = newData[areaKey]['전체여행지'].count;
                console.log(newData[areaKey].count);
    
                for (const themeKey in areaData) {
                    if (themeKey !== '전체식당' && themeKey !== 'image' &&  themeKey !== 'count') {
                        delete areaData[themeKey]
                    }
                }
            } else if (category === 'restaurant') {
                newData[areaKey].count -= newData[areaKey]['전체여행지'].count;
    
                for (const themeKey in areaData) {
                    if (themeKey !== '전체식당' && themeKey !== 'image' &&  themeKey !== 'count') {
                        delete areaData[themeKey]
                    }
                }
            } else if (category === 'cafe') {
                newData[areaKey].count -= newData[areaKey]['전체여행지'].count;
    
                for (const themeKey in areaData) {
                    if (themeKey !== '전체식당' && themeKey !== 'image' &&  themeKey !== 'count') {
                        delete areaData[themeKey]
                    }
                }
            }

        }
    }

    return (
        <Container>
            {
                (() => {
                    const result = [];

                    for (const key in newData) {
                        result.push(
                            <PlaceContainer key={key}>
                                <LinkLocation to={url} state={{ placeList: newData, category, area: key }}>
                                    <PlaceImg src={newData[key].image} />
                                    <PlaceDescCont>
                                        <PlaceHeader>{key}</PlaceHeader>
                                        <PlaceBtn src={icon_arrow_right} />
                                        <PlaceCount>{newData[key].count}개의 여행지</PlaceCount>
                                    </PlaceDescCont>
                                </LinkLocation>
                            </PlaceContainer>
                        )
                    }

                    return result;
                })()
            }
        </Container>
    )
}