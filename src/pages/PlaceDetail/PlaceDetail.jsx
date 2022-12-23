import React from 'react'
import styled from 'styled-components';
import { useLocation } from 'react-router-dom'
import IconMarker from '../../assets/images/icon-location-mini.svg'
import NormalPlaceList from '../../components/PlaceList/NormalPlaceList/NormalPlaceList';
import PlaceCommentList from '../../components/Comment/PlaceComment/PlaceCommentList';
import WriteComment from '../../components/Comment/WriteComment/WriteComment';

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
    /* display: none; */
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
    /* display: none; */

    & + section {
        margin-top: -30px;
    }
`

export default function PlaceDetail() {
    const location = useLocation();
    const place = location.state;

    const placelist = {
        list: [
            {
                title: '고양이1',
                firstimage: 'http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcS-OZTPpZNsnOchlOMmYsSeMprn5sYU4kdOZGPL0_ksM2nHGegFrzLhGlQMBF-amQqPRFs4DzbLrI_o5gA',
                firstimage2: 'https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/4arX/image/rZ1xSXKCJ4cd-IExOYahRWdrqoo.jpg',
                category: '나만 없어 고양이',
                desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptatibus ad molestiae sunt? Optio accusantium laudantium eum placeat rem, deserunt minima ab cum eaque, quod odit id voluptatum sequi molestias.'
            },
            {
                title: '고양이2',
                firstimage: 'https://cdn.popsci.co.kr/news/photo/202205/11966_7101_2744.jpg',
                firstimage2: 'https://cdn.imweb.me/upload/S201807025b39d1981b0b0/16b98d3e3d30e.jpg',
                category: '나만 없어 고양이',
                desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptatibus ad molestiae sunt? Optio accusantium laudantium eum placeat rem, deserunt minima ab cum eaque, quod odit id voluptatum sequi molestias.'
            },
            {
                title: '고양이3',
                firstimage: 'https://img.freepik.com/free-photo/adorable-kitty-looking-like-it-want-to-hunt_23-2149167099.jpg?w=2000',
                firstimage2: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Persian_Cat_%28kitten%29.jpg/1200px-Persian_Cat_%28kitten%29.jpg',
                category: '나만 없어 고양이',
                desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptatibus ad molestiae sunt? Optio accusantium laudantium eum placeat rem, deserunt minima ab cum eaque, quod odit id voluptatum sequi molestias.'
            },
            {
                title: '고양이4',
                firstimage: 'http://www.chemicalnews.co.kr/news/photo/202106/3636_10174_4958.jpg',
                firstimage2: 'https://www.sisain.co.kr/news/photo/202110/45791_82634_4851.jpg',
                category: '나만 없어 고양이',
                desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptatibus ad molestiae sunt? Optio accusantium laudantium eum placeat rem, deserunt minima ab cum eaque, quod odit id voluptatum sequi molestias.'
            }
        ]
    }

    setTimeout(() => {
        document.querySelector('h1').textContent = place.title
        window.scrollTo(0,0)
    }, 0);

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
                    <section>
                        <header>
                            <h2 className='irOnly'>
                                댓글
                            </h2>
                        </header>
                        <PlaceCommentList />
                        <WriteComment />
                    </section>
                </li>
            </ListSection>
        </SectionContainer>
    )
}
