import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import IconMarker from '../../assets/images/icon-location-mini.svg'
import NormalPlaceList from '../../components/PlaceList/NormalPlaceList/NormalPlaceList';
import PlaceCommentList from '../../components/Comment/PlaceComment/PlaceCommentList';
import WriteComment from '../../components/Comment/WriteComment/WriteComment';

const { kakao } = window;

const SectionContainer = styled.section`
    min-height: calc(100vh - 108px);
    z-index: -1;
`

const ImageBackground = styled.img`
    width: 100%;
    height: 300px;
    object-fit: cover;
    vertical-align: top;
    /* position: -webkit-sticky;
    position: sticky;
    top: 0; */
`

const ListBUtton = styled.ul`
    display: flex;
    position: sticky;
    top: 48px;
    box-shadow: 0px 1px 1px #DBDBDB;
    z-index: 20;
`

const ListItemBUtton = styled.li`
    flex-grow: 1;
`

const ButtonTab = styled.button`
    width: 100%;
    height: 44px;
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;
    color: #858585;
    cursor: pointer;
`

const ListSection = styled.ul`
    z-index: 10;
`

const SectionHome = styled.section`
    padding: 30px 22px;
`

const HeadingTwoTitle = styled.h2`
    font-weight: 500;
    font-size: 24px;
    line-height: 30px;
`

const ImageMarker = styled.img`
    width: 10px;
    height: 14px;
    margin-right: 4px;
    vertical-align: top;
    margin-top: 5px;
`

const ParagraphCategory = styled.p`
    display: inline-block;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    vertical-align: top;
    margin-bottom: 20px;
    margin-top: 5px;
`

const ParagraphDescription = styled.p`
    font-weight: 400;
    font-size: 16px;
    line-height: 160%;
`

const SectionNear = styled.section`
    padding: 30px 22px;

    & + section {
        margin-top: -30px;
    }
`

const SectionComment = styled.section`
    
`

const SectionMap = styled.section`
    padding: 25px 22px;
`

const DivMap = styled.div`
    width: 346px;
    height: 277px;
    margin-bottom: 15px;
    border-radius: 5px;
    z-index: 10;
`

const ParagraphAddrTItle = styled.p`
    font-weight: 400;
    font-size: 14px;
    line-height: 14px;
    color: #5A5A5A;
    margin-bottom: 8px;
`

const ParagraphAddress = styled.p`
    font-weight: 500;
    font-size: 14px;
    line-height: 14px;
`

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
        <SectionContainer>
            <header>
                <h2 className='irOnly'>
                    목적지 상세 페이지
                </h2>
            </header>
            <ImageBackground src={place.firstimage} alt={place.title} />
            <ListBUtton>
                <ListItemBUtton>
                    <ButtonTab id='btnHome' onClick={() => setSelect('Home')}>홈</ButtonTab>
                </ListItemBUtton>
                <ListItemBUtton>
                    <ButtonTab id='btnNear' onClick={() => setSelect('Near')}>주변</ButtonTab>
                </ListItemBUtton>
                <ListItemBUtton>
                    <ButtonTab id='btnComment' onClick={() => setSelect('Comment')}>댓글</ButtonTab>
                </ListItemBUtton>
                <ListItemBUtton>
                    <ButtonTab id='btnMap' onClick={() => setSelect('Map')}>지도</ButtonTab>
                </ListItemBUtton>
            </ListBUtton>
            <ListSection>
                <li id='sectionHome'>
                    <SectionHome>
                        <header>
                            <HeadingTwoTitle>
                                {place.title}
                            </HeadingTwoTitle>
                            <ImageMarker src={IconMarker} alt='' />
                            <ParagraphCategory>
                                {place.addr1.split(" ")[1]} | {place.detail}
                            </ParagraphCategory>
                        </header>
                        <ParagraphDescription>
                            {
                                !!detailData
                                ? detailData.overview
                                : place.desc
                            }
                        </ParagraphDescription>
                    </SectionHome>
                </li>
                <li id='sectionNear'>
                    <SectionNear>
                        <header>
                            <HeadingTwoTitle>
                                볼거리
                            </HeadingTwoTitle>
                        </header>
                        <NormalPlaceList data={data} placelist={placelist} />
                    </SectionNear>
                    <SectionNear>
                        <header>
                            <HeadingTwoTitle>
                                식당
                            </HeadingTwoTitle>
                        </header>
                        <NormalPlaceList data={data} placelist={restaurantlist} />
                    </SectionNear>
                    <SectionNear>
                        <header>
                            <HeadingTwoTitle>
                                카페
                            </HeadingTwoTitle>
                        </header>
                        <NormalPlaceList data={data} placelist={cafelist} />
                    </SectionNear>
                </li>
                <li id='sectionComment'>
                    <SectionComment>
                        <header>
                            <h2 className='irOnly'>
                                댓글
                            </h2>
                        </header>
                        <PlaceCommentList placeid={place.contentid} setRenderFunction={setRenderFunction} />
                        <WriteComment placeid={place.contentid} renderFunction={renderFunction} />
                    </SectionComment>
                </li>
                <li id='sectionMap'>
                    <SectionMap>
                        <header>
                            <h2 className='irOnly'>
                                여행지 지도
                            </h2>
                        </header>
                        <DivMap id='map'></DivMap>
                        <ParagraphAddrTItle>
                            도로명 주소
                        </ParagraphAddrTItle>
                        <ParagraphAddress>
                            {
                                place.addr1
                            }
                        </ParagraphAddress>
                    </SectionMap>
                </li>
            </ListSection>
        </SectionContainer>
    )
}