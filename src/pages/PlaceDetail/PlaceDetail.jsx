import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import IconMarker from '../../assets/images/icon-location-mini.svg';
import PlaceCommentList from '../../components/Comment/PlaceComment/PlaceCommentList';
import WriteComment from '../../components/Comment/WriteComment/WriteComment';
import NormalPlaceList from '../../components/PlaceList/NormalPlaceList/NormalPlaceList';
import * as S from "./style";

const { kakao } = window;

const checkArea = (area) => {
    if (area.length === 2) {
        if (area === '제주') {
            area = '제주특별자치도';
        }
        else if (area === '서울') {
            area = '서울특별시';
        }
        else {
            area += '광역시';
        }
    }

    return area;
}

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
}

const modifyTitle = (title) => {
    document.querySelector('h1').textContent = title;
}

const tabOn = (element) => {
    element.style.borderBottom = '3px solid black';
    element.style.color = 'black';
}

const tabOff = (element) => {
    element.style.borderBottom = '0';
    element.style.color = '#858585';
}

const sectionOn = (element) => {
    element.style.display = 'block';
}

const sectionOff = (element) => {
    element.style.display = 'none';
}

const makeOverListener = (map, marker, infowindow) => {
    return function () {
        infowindow.open(map, marker);
    };
}

const makeOutListener = (infowindow) => {
    return function () {
        infowindow.close();
    };
}

const RenderMap = (place, navigation) => {
    const container = document.getElementById('map');

    // container.childNodes.length = 0

    const options = {
        center: new kakao.maps.LatLng(place.mapy, place.mapx),
        level: 3
    };

    const map = new kakao.maps.Map(container, options);
    const marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(place.mapy, place.mapx),
        title: place.title
    });

    var infowindow = new kakao.maps.InfoWindow({
        content: place.title
    });

    kakao.maps.event.addListener(marker, 'mouseover', makeOverListener(map, marker, infowindow));
    kakao.maps.event.addListener(marker, 'mouseout', makeOutListener(infowindow));
    kakao.maps.event.addListener(map, 'mousedrag', () => {

    })
}

const selectRandomPlace = (list) => {
    let placelist = []

    for (let index = 0; index < 4; index++) {
        placelist.push(list[Math.floor(Math.random() * list.length)]);
    }

    return placelist
}

const selectTab = (select) => {
    const btnList = document.querySelectorAll('li > button');

    btnList.forEach((button) => {
        if (button.id.slice(3) === select) {
            tabOn(button);
            sectionOn(document.querySelector('#section' + button.id.slice(3)))
        }
        else {
            tabOff(button);
            sectionOff(document.querySelector('#section' + button.id.slice(3)))
        }
    })
}

const getDetailData = async (contentid, contenttypeid, callBack) => {
    const response = await fetch('https://apis.data.go.kr/B551011/KorService/detailCommon?serviceKey=01NkDQGu2Msy2Z7EB05zhmnrUGWIIN%2FobAVqxaIGHlZjBF3WE6AvZWTH0dLvFmR%2BuPcaKEhB5yCl9sXteUddkQ%3D%3D&MobileOS=ETC&MobileApp=AppTest&_type=json&contentId=' + contentid + '&contentTypeId=' + contenttypeid + '&defaultYN=Y&firstImageYN=Y&areacodeYN=Y&catcodeYN=Y&addrinfoYN=Y&mapinfoYN=Y&overviewYN=Y');
    const result = await response.json();

    callBack(result.response.body.items.item[0]);
}

export default function PlaceDetail() {
    const [select, setSelect] = useState('Home');
    const [renderFunction, setRenderFunction] = useState();
    const [detailData, setDetailData] = useState();
    const navigation = useNavigate();
    const location = useLocation();

    const place = location.state.place;
    const data = location.state.data;
    const { placeData } = useSelector(state => state.placeData);

    let area = place.addr1.split(' ')[0]
    area = checkArea(area);

    // console.log(place);
    // console.log(detailData);
    // console.log(!!detailData);

    useEffect(() => {
        scrollToTop();
        getDetailData(place.contentid, place.contenttypeid, setDetailData);
        modifyTitle(place.title);
        RenderMap(place, navigation);
    }, [place])

    useEffect(() => {
        selectTab(select);
    }, [select])

    const placelist = selectRandomPlace(placeData['area'][area].전체여행지.list)
    const restaurantlist = selectRandomPlace(placeData['area'][area].전체식당.list.filter(i => i.detail !== "바/까페"))
    const cafelist = selectRandomPlace(placeData['area'][area].전체식당.list.filter(i => i.detail === "바/까페"))

    return (
        <S.SectionContainer>
            <header>
                <h2 className='irOnly'>
                    목적지 상세 페이지
                </h2>
            </header>
            <S.ImageBackground src={place.firstimage} alt={place.title} />
            <S.ListBUtton>
                <S.ListItemBUtton>
                    <S.ButtonTab id='btnHome' onClick={() => setSelect('Home')}>홈</S.ButtonTab>
                </S.ListItemBUtton>
                <S.ListItemBUtton>
                    <S.ButtonTab id='btnNear' onClick={() => setSelect('Near')}>주변</S.ButtonTab>
                </S.ListItemBUtton>
                <S.ListItemBUtton>
                    <S.ButtonTab id='btnComment' onClick={() => setSelect('Comment')}>댓글</S.ButtonTab>
                </S.ListItemBUtton>
                <S.ListItemBUtton>
                    <S.ButtonTab id='btnMap' onClick={() => setSelect('Map')}>지도</S.ButtonTab>
                </S.ListItemBUtton>
            </S.ListBUtton>
            <S.ListSection>
                <li id='sectionHome'>
                    <S.SectionHome>
                        <header>
                            <S.HeadingTwoTitle>
                                {place.title}
                            </S.HeadingTwoTitle>
                            <S.ImageMarker src={IconMarker} alt='' />
                            <S.ParagraphCategory>
                                {place.addr1.split(" ")[1]} | {place.detail}
                            </S.ParagraphCategory>
                        </header>
                        <S.ParagraphDescription>
                            {
                                !!detailData
                                ? detailData.overview
                                : place.desc
                            }
                        </S.ParagraphDescription>
                    </S.SectionHome>
                </li>
                <li id='sectionNear'>
                    <S.SectionNear>
                        <header>
                            <S.HeadingTwoTitle>
                                볼거리
                            </S.HeadingTwoTitle>
                        </header>
                        <NormalPlaceList data={data} placelist={placelist} />
                    </S.SectionNear>
                    <S.SectionNear>
                        <header>
                            <S.HeadingTwoTitle>
                                식당
                            </S.HeadingTwoTitle>
                        </header>
                        <NormalPlaceList data={data} placelist={restaurantlist} />
                    </S.SectionNear>
                    <S.SectionNear>
                        <header>
                            <S.HeadingTwoTitle>
                                카페
                            </S.HeadingTwoTitle>
                        </header>
                        <NormalPlaceList data={data} placelist={cafelist} />
                    </S.SectionNear>
                </li>
                <li id='sectionComment'>
                    <section>
                        <header>
                            <h2 className='irOnly'>
                                댓글
                            </h2>
                        </header>
                        <PlaceCommentList placeid={place.contentid} setRenderFunction={setRenderFunction} />
                        <WriteComment placeid={place.contentid} renderFunction={renderFunction} />
                    </section>
                </li>
                <li id='sectionMap'>
                    <S.SectionMap>
                        <header>
                            <h2 className='irOnly'>
                                여행지 지도
                            </h2>
                        </header>
                        <S.DivMap id='map'></S.DivMap>
                        <S.ParagraphAddrTItle>
                            도로명 주소
                        </S.ParagraphAddrTItle>
                        <S.ParagraphAddress>
                            {
                                place.addr1
                            }
                        </S.ParagraphAddress>
                    </S.SectionMap>
                </li>
            </S.ListSection>
        </S.SectionContainer>
    )
}