import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import AddImage from '../../../assets/images/icon-add.svg'
import SelectedList from '../../../components/SlideList/SelectedList/SelectedList'
import * as S from "../style"

export default function ProfileAddQuration() {
    const url= "https://mandarin.api.weniv.co.kr";
    let token = localStorage.getItem('Access Token');

    const location = useLocation();
    const checklist = location.state.checklist.current
    const id = location.state.id

    const [title, setTitle] = useState(() =>
        JSON.parse(window.localStorage.getItem("title")) || ''
    )
    const [subtitle, setSubtitle] = useState(() =>
        JSON.parse(window.localStorage.getItem("subtitle")) || ''
    )

    async function addCuration() {
        const userCurationlist = JSON.stringify(checklist).replaceAll(/{/g, '(').replaceAll(/}/g, ')');
        try {
            await fetch(url + '/product', {
                method: "POST",
                headers: {
                    "Authorization" : `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
                body : JSON.stringify({
                    "product":{
                        "itemName": 'yourtrip_quration_' + title,
                        "price": 1,
                        "link": subtitle,
                        "itemImage": userCurationlist
                    }
                })
            })
        } catch (e) {
            console.log(e);
        }
    }
    
    useEffect(() => {
        window.localStorage.setItem("title", JSON.stringify(title))
        window.localStorage.setItem("subtitle", JSON.stringify(subtitle))
    }, [title, subtitle])
    

    setTimeout(() => {
        document.querySelector('h1').textContent = '큐레이션 추가'
        window.scrollTo(0, 0)
    }, 0);

    function handleRemoveLocal() {
        window.localStorage.removeItem("title")
        window.localStorage.removeItem("subtitle")
    }

    return (
        <S.SectionModity>
            <header>
                <h2 className='irOnly'>큐레이션 추가</h2>
            </header>
            <S.FormPost>
                <S.LabelInput htmlFor='inputQuration' >큐레이션 제목</S.LabelInput>
                <S.InputUser value={title} required id='inputQuration' placeholder='큐레이션 이름을 적어주세요.' onChange={(e) => setTitle(e.target.value)}/>
                <S.LabelInput htmlFor='inputUserIntro' >소개</S.LabelInput>
                <S.InputUser value={subtitle} required id='inputUserIntro' placeholder='큐레이션에 대해 간단한 소개를 적어주세요.' onChange={(e) => setSubtitle(e.target.value)} />
                <S.LabelInput>선택한 여행지</S.LabelInput>
                <S.DivPlaceSelect>
                    {checklist ? <SelectedList checklist={checklist} /> : <></>}
                    <S.LinkAddPlace to='/profile/addquration/list' state={{id, checklist}}>
                        <S.ImageAdd src={AddImage} alt='추가' />
                    </S.LinkAddPlace>
                </S.DivPlaceSelect>
                <Link to={`/profile/${id}`}
                    state={{ title, subtitle, checklist }}
                >
                    {
                        checklist ? 
                            <S.ButtonSave className={title.length > 0 && subtitle.length > 0 ? "on" : false} onClick={() => {
                                handleRemoveLocal()
                                addCuration()
                            }}>저장</S.ButtonSave>
                    : <S.ButtonSave>저장</S.ButtonSave>
                }
                </Link>
                </S.FormPost>
        </S.SectionModity>
    )
}
