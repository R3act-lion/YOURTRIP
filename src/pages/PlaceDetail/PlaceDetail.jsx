import React, { useEffect } from 'react'
import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom'
import IconMarker from '../../assets/images/icon-location-mini.svg'
import NormalPlaceList from '../../components/PlaceList/NormalPlaceList/NormalPlaceList';
import PlaceCommentList from '../../components/Comment/PlaceComment/PlaceCommentList';
import WriteComment from '../../components/Comment/WriteComment/WriteComment';

const { kakao } = window;

const SectionContainer = styled.section`
    min-height: calc(100vh - 108px);
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
    display: none;
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
    display: none;

    & + section {
        margin-top: -30px;
    }
`

const SectionComment = styled.section`
    display: none;
`

const SectionMap = styled.section`
    padding: 25px 22px;
`

const DivMap = styled.div`
    width: 346px;
    height: 277px;
    margin-bottom: 15px;
    border-radius: 5px;
    background-color: aqua;
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

const RenderMap = (placelist, navigation) => {
    const container = document.getElementById('map');
    const options = {
        center: new kakao.maps.LatLng(37.5172, 127.0473),
        level: 7
    };

    const map = new kakao.maps.Map(container, options);

    for (const place of placelist) {
        const url = '/placedetail/' + place.title
        const marker = new kakao.maps.Marker({
            map: map,
            position: new kakao.maps.LatLng(place.mapy, place.mapx),
            title: place.title
            // image : markerImage // 마커 이미지 
        });

        var infowindow = new kakao.maps.InfoWindow({
            content: place.title
        });

        kakao.maps.event.addListener(marker, 'mouseover', makeOverListener(map, marker, infowindow));
        kakao.maps.event.addListener(marker, 'mouseout', makeOutListener(infowindow));
        kakao.maps.event.addListener(marker, 'click', () => navigation(url, { state: { ...place } }))
    }
}

export default function PlaceDetail() {
    const navigation = useNavigate();
    const location = useLocation();
    const place = location.state;

    const placelist = {
        list: [
            {
                title: '고양이1',
                firstimage: 'http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcS-OZTPpZNsnOchlOMmYsSeMprn5sYU4kdOZGPL0_ksM2nHGegFrzLhGlQMBF-amQqPRFs4DzbLrI_o5gA',
                firstimage2: 'https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/4arX/image/rZ1xSXKCJ4cd-IExOYahRWdrqoo.jpg',
                category: '나만 없어 고양이',
                mapx: "127.0044124790",
                mapy: "37.5885854822",
                desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptatibus ad molestiae sunt? Optio accusantium laudantium eum placeat rem, deserunt minima ab cum eaque, quod odit id voluptatum sequi molestias.'
            },
            {
                title: '고양이2',
                firstimage: 'https://cdn.popsci.co.kr/news/photo/202205/11966_7101_2744.jpg',
                firstimage2: 'https://cdn.imweb.me/upload/S201807025b39d1981b0b0/16b98d3e3d30e.jpg',
                category: '나만 없어 고양이',
                mapx: "127.0644843057",
                mapy: "37.5075570864",
                desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptatibus ad molestiae sunt? Optio accusantium laudantium eum placeat rem, deserunt minima ab cum eaque, quod odit id voluptatum sequi molestias.'
            },
            {
                title: '고양이3',
                firstimage: 'https://img.freepik.com/free-photo/adorable-kitty-looking-like-it-want-to-hunt_23-2149167099.jpg?w=2000',
                firstimage2: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Persian_Cat_%28kitten%29.jpg/1200px-Persian_Cat_%28kitten%29.jpg',
                category: '나만 없어 고양이',
                mapx: "127.0583626060",
                mapy: "37.5087707246",
                desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptatibus ad molestiae sunt? Optio accusantium laudantium eum placeat rem, deserunt minima ab cum eaque, quod odit id voluptatum sequi molestias.'
            },
            {
                title: '고양이4',
                firstimage: 'http://www.chemicalnews.co.kr/news/photo/202106/3636_10174_4958.jpg',
                firstimage2: 'https://www.sisain.co.kr/news/photo/202110/45791_82634_4851.jpg',
                category: '나만 없어 고양이',
                mapx: "127.0386083095",
                mapy: "37.5277931604",
                desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptatibus ad molestiae sunt? Optio accusantium laudantium eum placeat rem, deserunt minima ab cum eaque, quod odit id voluptatum sequi molestias.'
            }
        ]
    }

    useEffect(() => {
        console.log('move');
        document.querySelector('h1').textContent = place.title;
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
        RenderMap(placelist.list, navigation);
    }, [place, placelist])

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
                    <ButtonTab>홈</ButtonTab>
                </ListItemBUtton>
                <ListItemBUtton>
                    <ButtonTab>주변</ButtonTab>
                </ListItemBUtton>
                <ListItemBUtton>
                    <ButtonTab>댓글</ButtonTab>
                </ListItemBUtton>
                <ListItemBUtton>
                    <ButtonTab>지도</ButtonTab>
                </ListItemBUtton>
            </ListBUtton>
            <ListSection>
                <li>
                    <SectionHome>
                        <header>
                            <HeadingTwoTitle>
                                {place.title}
                            </HeadingTwoTitle>
                            <ImageMarker src={IconMarker} alt='' />
                            <ParagraphCategory>
                                {place.category}
                            </ParagraphCategory>
                        </header>
                        <ParagraphDescription>
                            {place.desc}
                        </ParagraphDescription>
                    </SectionHome>
                </li>
                <li>
                    <SectionNear>
                        <header>
                            <HeadingTwoTitle>
                                볼거리
                            </HeadingTwoTitle>
                        </header>
                        <NormalPlaceList placelist={placelist.list} />
                    </SectionNear>
                    <SectionNear>
                        <header>
                            <HeadingTwoTitle>
                                식당
                            </HeadingTwoTitle>
                        </header>
                        <NormalPlaceList placelist={placelist.list} />
                    </SectionNear>
                    <SectionNear>
                        <header>
                            <HeadingTwoTitle>
                                카페
                            </HeadingTwoTitle>
                        </header>
                        <NormalPlaceList placelist={placelist.list} />
                    </SectionNear>
                </li>
                <li>
                    <SectionComment>
                        <header>
                            <h2 className='irOnly'>
                                댓글
                            </h2>
                        </header>
                        <PlaceCommentList />
                        <WriteComment />
                    </SectionComment>
                </li>
                <li>
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
                            Lorem ipsum dolor sit amet consectetur
                        </ParagraphAddress>
                    </SectionMap>
                </li>
            </ListSection>
        </SectionContainer>
    )
}
