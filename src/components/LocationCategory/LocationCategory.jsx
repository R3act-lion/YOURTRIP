import { React, useState } from 'react'
import styled from 'styled-components'
import category_place from '../../assets/images/category-place.svg'
import category_location from '../../assets/images/category-location.svg'
import category_restaurant from '../../assets/images/category-restaurant.svg'
import category_cafe from '../../assets/images/category-cafe.svg'
import category_place_fill from '../../assets/images/category-place-fill.svg'
import category_location_fill from '../../assets/images/category-location-fill.svg'
import category_restaurant_fill from '../../assets/images/category-restaurant-fill.svg'
import category_cafe_fill from '../../assets/images/category-cafe-fill.svg'
import { useNavigate } from 'react-router'

const Container = styled.article`
    background-color: #f5f5f5;
    padding: 15px;
    position: sticky;
    top: 48px;
`

const CategoryList = styled.ul`
    display: flex;
    justify-content: space-between;
`

const CategoryListItem = styled.li`
    list-style: none;
    width: 69px;
`

const CategoryButtonImage = styled.img`
    width: 100%;
`

const CategoryName = styled.span`
    margin-top: 6px;
    display: block;
    font-size: 12px;
    text-align : center;
`

export default function LocationCategory(props) {
    let [placeIcon, setPlaceIcon] = useState(true);
    let [locationIcon, setLocationIcon] = useState(false);
    let [restaurantIcon, setRestaurantIcon] = useState(false);
    let [cafeIcon, setCafeIcon] = useState(false);
    const navigation = useNavigate();

    const setCategoryValue = (e) => {
        props.getCategory(e)
    }

    return (
        <Container>
            <header>
                <h2 className='irOnly'>
                    카테고리
                </h2>
            </header>
            <CategoryList>
                <CategoryListItem>
                    <CategoryButtonImage
                        src={placeIcon === true
                            ? category_place_fill
                            : category_place}
                        onClick={() => {
                            setPlaceIcon(true);
                            setLocationIcon(false);
                            setRestaurantIcon(false);
                            setCafeIcon(false);
                            setCategoryValue("place");
                            navigation('/location');
                        }} />
                    <CategoryName>Today</CategoryName>
                </CategoryListItem>
                <CategoryListItem>
                    <CategoryButtonImage
                        src={locationIcon === true
                            ? category_location_fill
                            : category_location}
                        onClick={() => {
                            setPlaceIcon(false);
                            setLocationIcon(true);
                            setRestaurantIcon(false);
                            setCafeIcon(false);
                            setCategoryValue("location");
                            navigation('/location');
                        }} />
                    <CategoryName>Place</CategoryName>
                </CategoryListItem>
                <CategoryListItem>
                    <CategoryButtonImage
                        src={restaurantIcon === true
                            ? category_restaurant_fill
                            : category_restaurant}
                        onClick={() => {
                            setPlaceIcon(false);
                            setLocationIcon(false);
                            setRestaurantIcon(true);
                            setCafeIcon(false);
                            setCategoryValue("restaurant");
                            navigation('/location');
                        }} />
                    <CategoryName>Restaurant</CategoryName>
                </CategoryListItem>
                <CategoryListItem>
                    <CategoryButtonImage
                        src={cafeIcon === true
                            ? category_cafe_fill
                            : category_cafe}
                        onClick={() => {
                            setPlaceIcon(false);
                            setLocationIcon(false);
                            setRestaurantIcon(false);
                            setCafeIcon(true);
                            setCategoryValue("cafe");
                            navigation('/location');
                        }} />
                    <CategoryName>Cafe</CategoryName>
                </CategoryListItem>
            </CategoryList>
        </Container>
    )
}
