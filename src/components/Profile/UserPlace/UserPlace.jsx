import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import RecommendList from '../../SlideList/RecommendList/RecommendList'
import DetailPlaceList from '../../SlideList/DetailPlaceList/DetailPlaceList'
import { Link, useParams } from 'react-router-dom'
import Button from '../../../modules/Button/Button'
import AddImage from '../../../assets/images/icon-add.svg'

const SectionPlace = styled.div`

`

const GuidePost = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 135px;
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

const CurationList = styled.li`
    margin-top: 30px;
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

const GuideDesc = styled.p`
  font-weight: 500;
  font-size: 16px;
  color: #858585;
`

const AddBtn = styled.img`
    width: 50px;
    position: fixed;
    bottom: 70px;
    right: 15px;
    `


export default function UserPlace() {
    const url= "https://mandarin.api.weniv.co.kr";
    let token = localStorage.getItem('Access Token');
    const { id } = useParams();
    const [curationData, setCurationData] = useState([])
    
    const [isCategory, setIsCategory] = useState([
        { value: "큐레이션", selected: true },
        { value: "즐겨찾기", selected: false }
    ]);
    
    let checklist;
    
    useEffect(() => {
        const getData = async (id, token) => {
            try {
                const res = await fetch(url + `/product/${id}`, {
                    headers : {
                        "Authorization" : `Bearer ${token}`,
                        "Content-type" : "application/json"
                    }
                })
                const resJson = await res.json()
                setCurationData(resJson)
            } catch (e) {
                console.log(e);
            }
        }
        getData(id, token);
    }, [])

    const itemClick = (value) => {
        const newState = isCategory.map((list) => {
            return {
                ...list,
                selected: value === list.value
            };
        });
        setIsCategory(newState);
    };

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
                        {
                            curationData.data ? 
                                curationData.product.map((item, index) => {
                                    return (
                                        <CurationList key={index}>
                                            <RecommendList title={item.itemName} subtitle={item.link} placelist={JSON.parse(item.itemImage.replaceAll(/\(/g, '{').replaceAll(/\)/g, '}'))} />
                                            <Link to="/profile/addquration" state={{checklist, id}}>
                                                <AddBtn src={AddImage} alt="" />
                                            </Link>
                                        </CurationList>
                                    )
                                })
                                :
                                <GuidePost>
                                <GuideDesc>당신만의 큐레이션을 만들어보세요.</GuideDesc>
                                <Link to="/profile/addquration" state={{checklist, id}}>
                                    <Button
                                        text="만들기"
                                        margin="15px 0"
                                        color = "#FFF" 
                                        backgroundColor = "#3C70BC"
                                        width="124px"
                                        height="44px"
                                        fontSize="16px"
                                    />
                                </Link>
                            </GuidePost>
                        }
                    </ListTheme>
                    :
                    <ListPlace>
                        <li>
                            <section>
                                <GuidePost>
                                    <GuideDesc>
                                        아직 즐겨찾기한 장소가 없습니다.
                                    </GuideDesc>
                                </GuidePost>
                                {/* <DetailPlaceList list={placelist.list} /> */}
                            </section>
                        </li>
                    </ListPlace>
            }
        </SectionPlace>
    )

}

