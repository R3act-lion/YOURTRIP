import React, { useEffect, useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import AddImage from '../../../assets/images/icon-add.svg'
import Button from '../../../modules/Button/Button'
import RecommendList from '../../SlideList/RecommendList/RecommendList'
import * as S from "./style"

export default function UserPlace() {
    const url= "https://mandarin.api.weniv.co.kr";
    let token = localStorage.getItem('Access Token');
    const path = useLocation().pathname
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
        <div>
            <header>
                <h2 className='irOnly'>
                    사용자의 여행지
                </h2>
            </header>
            <S.ListButton>
                {isCategory.map((list) => {
                    return (
                        <S.ListItemButton key={list.value}>
                            <S.ButtonTab className={list.selected ? "on" : false}
                                onClick={() => itemClick(list.value)}>
                                {list.value}
                            </S.ButtonTab>
                        </S.ListItemButton>
                    )
                })}
            </S.ListButton>
            {
                isCategory[0].selected ?
                    <S.ListTheme>
                        {
                            curationData.data ? 
                                curationData.product.filter((item) => item.itemName.startsWith('yourtrip_quration_')).map((item, index) => {
                                    return (
                                        <S.CurationList key={index}>
                                            <RecommendList title={item.itemName.slice(18)} subtitle={item.link} placelist={JSON.parse(item.itemImage.replaceAll(/\(/g, '{').replaceAll(/\)/g, '}'))} />
                                            {
                                                path.includes('yourprofile') ?
                                                    <></>
                                                    :
                                                    <Link to="/profile/addquration" state={{checklist, id}}>
                                                        <S.AddBtn src={AddImage} alt="" />
                                                    </Link>
                                            }
                                        </S.CurationList>
                                    )
                                })
                                :
                                path.includes("yourprofile") ?
                                <S.GuidePost>
                                        <S.GuideDesc>아직 큐레이션이 없습니다.</S.GuideDesc>
                                </S.GuidePost>     
                                :    
                                <S.GuidePost>
                                <S.GuideDesc>당신만의 큐레이션을 만들어보세요.</S.GuideDesc>
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
                            </S.GuidePost>
                        }
                    </S.ListTheme>
                    :
                    <S.ListPlace>
                        <li>
                            <section>
                                <S.GuidePost>
                                    <S.GuideDesc>
                                        아직 즐겨찾기한 장소가 없습니다.
                                    </S.GuideDesc>
                                </S.GuidePost>
                                {/* <DetailPlaceList list={placelist.list} /> */}
                            </section>
                        </li>
                    </S.ListPlace>
            }
        </div>
    )

}

