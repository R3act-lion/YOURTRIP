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
    const place = location.state.place;
    const data = location.state.data;

    const detaildata = data.filter(i => i[0] === place.addr1.split(" ")[0]).flat()

    function randomplace(selectedItem) {
        let randomIndexArray = []
        let placelist = []
        while (randomIndexArray.length < 4){
            let randomNum = Math.floor(Math.random() * selectedItem.length)
            if (randomIndexArray.indexOf(randomNum) === -1) {
            randomIndexArray.push(randomNum)
            }
        }
        randomIndexArray.map(i => placelist.push(selectedItem[i]))
        return placelist
    }

    const placelist = randomplace(detaildata[1].전체_여행지.list)
    const restaurantlist = randomplace(detaildata[1].전체_식당.list.filter(i => i.detail !== "바/까페"))
    const cafelist = randomplace(detaildata[1].전체_식당.list.filter(i => i.detail === "바/까페"))

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
                                {place.addr1.split(" ")[1]} | {place.detail}
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
