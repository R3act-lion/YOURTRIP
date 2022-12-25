import React, { useState } from 'react'
import styled from 'styled-components'
import RecommendList from '../../SlideList/RecommendList/RecommendList'
import DetailPlaceList from '../../SlideList/DetailPlaceList/DetailPlaceList'

const SectionPlace = styled.section`
    
`

const ListButton = styled.ul`
    display: flex;
    position: sticky;
    top: 48px;
    box-shadow: 0px 1px 1px #DBDBDB;
    z-index: 20;
`

const ListItemButton = styled.li`
    flex-grow: 1;
`

const ButtonTab = styled.button`
    width: 100%;
    height: 44px;
    font-weight: 500;
    font-size: 14px;
    vertical-align: top;
    color: #858585;
    cursor: pointer;
    &.on{
        font-weight: 700;
        color: ${props => props.theme.color.text.black};
        border-bottom: 2px solid black;
    }
`

const ListTheme = styled.ul`
    margin: 30px 0;
`

const ListPlace = styled.ul`
    margin: 30px 0;
`

const HeadingThreeTitle = styled.h3`
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    margin-bottom: 15px;
    padding-left: 20px;
`

export default function UserPlace() {
    // 스테이트 생성 및 기본값 지정
    const [isCategory, setIsCategory] = useState([
        { value: "큐레이션", selected: true },
        { value: "즐겨찾기", selected: false }
    ]);

    const itemClick = (value) => {
        const newState = isCategory.map((list) => {
            return {
                ...list,
                selected: value === list.value
            };
        });
        setIsCategory(newState);
    };

    const placelist = {
        list: [
            {
                title: '고양이1',
                firstimage: 'http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcS-OZTPpZNsnOchlOMmYsSeMprn5sYU4kdOZGPL0_ksM2nHGegFrzLhGlQMBF-amQqPRFs4DzbLrI_o5gA',
                firstimage2: 'https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/4arX/image/rZ1xSXKCJ4cd-IExOYahRWdrqoo.jpg',
                category: '나만 없어 고양이'
            },
            {
                title: '고양이2',
                firstimage: 'https://cdn.popsci.co.kr/news/photo/202205/11966_7101_2744.jpg',
                firstimage2: 'https://cdn.imweb.me/upload/S201807025b39d1981b0b0/16b98d3e3d30e.jpg',
                category: '나만 없어 고양이'
            },
            {
                title: '고양이3',
                firstimage: 'https://img.freepik.com/free-photo/adorable-kitty-looking-like-it-want-to-hunt_23-2149167099.jpg?w=2000',
                firstimage2: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Persian_Cat_%28kitten%29.jpg/1200px-Persian_Cat_%28kitten%29.jpg',
                category: '나만 없어 고양이'
            }
        ]
    }

    return (
        <SectionPlace>
            <header>
                <h2 className='irOnly'>
                    사용자의 여행지
                </h2>
            </header>
            <ListButton>
                {isCategory.map((list) => {
                    return (
                        <ListItemButton key={list.value}>
                            <ButtonTab className={list.selected ? "on" : false}
                                onClick={() => itemClick(list.value)}>
                                {list.value}
                            </ButtonTab>
                        </ListItemButton>
                    )
                })}
            </ListButton>
            {
                isCategory[0].selected ?
                    <ListTheme>
                        <li>
                            <RecommendList />
                        </li>
                    </ListTheme>
                    :
                    <ListPlace>
                        <li>
                            <section>
                                <header>
                                    <HeadingThreeTitle>
                                        고양이
                                    </HeadingThreeTitle>
                                </header>
                                <DetailPlaceList list={placelist.list} />
                            </section>
                        </li>
                    </ListPlace>
            }
        </SectionPlace>
    )
}