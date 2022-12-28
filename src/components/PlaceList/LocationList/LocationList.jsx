import React from 'react'
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

export default function LocationList(props) {
    const { category, data} = props
    let categoryList = [];

    return (
        <Container>
            {data.map((item) => {
            let selectedItem= [];
                for (let key in item[1]) {
                    if(!categoryList.includes(key)) categoryList.push(key)
                }
                if (category === "place") {
                    categoryList = categoryList.filter(i => i !== "count" && i !== "image" && i !== "전체_식당" && i !== "전체_여행지")
                    categoryList.map(i => {
                        selectedItem.push({...[i, item[1][i].list]})
                    })
                } else if (category === "location") {
                    categoryList = categoryList.filter(i => i === "전체_여행지")
                    selectedItem = item[1][categoryList].list
                } else if (category === "restaurant") {
                    categoryList = categoryList.filter(i => i === "전체_식당")
                    selectedItem = item[1][categoryList].list.filter(i => i.detail !== "바/까페")
                    
                } else if (category === "cafe") {
                    categoryList = categoryList.filter(i => i === "전체_식당")
                    selectedItem = item[1][categoryList].list.filter(i => i.detail === "바/까페")
                }

                return (
                    <PlaceContainer key={item[0]}>
                        <LinkLocation to='/location/theme' state={{data, selectedItem, category}}>
                            <PlaceImg src={item[1].image} />
                            <PlaceDescCont>
                                <PlaceHeader>{item[0]}</PlaceHeader>
                                <PlaceBtn src={icon_arrow_right}/>
                                <PlaceCount>{item[1].count}개의 여행지</PlaceCount>
                            </PlaceDescCont>
                        </LinkLocation>
                    </PlaceContainer>  
                )
            })}
        </Container>
    )
}