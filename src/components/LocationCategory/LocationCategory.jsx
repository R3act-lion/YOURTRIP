import { React, useState } from 'react'
import { useNavigate } from 'react-router'
import category_cafe_fill from '../../assets/images/category-cafe-fill.svg'
import category_cafe from '../../assets/images/category-cafe.svg'
import category_location_fill from '../../assets/images/category-location-fill.svg'
import category_location from '../../assets/images/category-location.svg'
import category_place_fill from '../../assets/images/category-place-fill.svg'
import category_place from '../../assets/images/category-place.svg'
import category_restaurant_fill from '../../assets/images/category-restaurant-fill.svg'
import category_restaurant from '../../assets/images/category-restaurant.svg'
import * as S from "./style"

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
        <S.Container>
            <header>
                <h2 className='irOnly'>
                    카테고리
                </h2>
            </header>
            <S.CategoryList>
                <S.CategoryListItem>
                    <S.CategoryButtonImage
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
                    <S.CategoryName>Today</S.CategoryName>
                </S.CategoryListItem>
                <S.CategoryListItem>
                    <S.CategoryButtonImage
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
                    <S.CategoryName>Place</S.CategoryName>
                </S.CategoryListItem>
                <S.CategoryListItem>
                    <S.CategoryButtonImage
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
                    <S.CategoryName>Restaurant</S.CategoryName>
                </S.CategoryListItem>
                <S.CategoryListItem>
                    <S.CategoryButtonImage
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
                    <S.CategoryName>Cafe</S.CategoryName>
                </S.CategoryListItem>
            </S.CategoryList>
        </S.Container>
    )
}
