import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import SearchIcon from '../../../../assets/images/icon-search.svg';
import * as S from "../../style";
import QurationListItem from './QurationListItem';

export default function QurationPlaceList() {
    const { placeData } = useSelector(state => state.placeData);
    const [input, setInput] = useState('')
    const [checklist, setChecklist] = useState('');
    const data = Object.entries(placeData.area);
    const location = useLocation();
    const id = location.state.id
    const list = location.state.checklist

    const getChecklist = (e) => {
        let newArr = [...checklist, e]
        setChecklist(newArr)
    }

    const deleteChecklist = (e) => {
        let newArr = checklist.filter(i => i !== e)
        setChecklist(newArr)
    }

    const handleInput = (e) => {
        setInput(e.target.value)
    }

    setTimeout(() => {
        document.querySelector('h1').textContent = ''
        window.scrollTo(0, 0)
    }, 0);

    let placelist = []
    data.map(i => placelist.push(i[1].전체여행지.list.concat(i[1].전체식당.list)))
    placelist = placelist.flat();

    let searchlist = []
    placelist.forEach(place => {
        if (place.title.indexOf(input) === -1) {
            return
        }
        searchlist.push(place)
    })

    return (
        <S.SectionList>
            <header>
                <S.HeadingTwoTitle>
                    추가할 여행지를 선택하세요.
                </S.HeadingTwoTitle>
            </header>
            <S.FormSearch action=''>
                <label htmlFor="inputSearch" className='irOnly'>여행지 검색</label>
                <S.InputSearch id='inputSearch' onChange={handleInput} placeholder='검색' />
                <S.ButtonSearch>
                    <S.ImageSearch src={SearchIcon} alt='검색' />
                </S.ButtonSearch>
            </S.FormSearch>
            {
                input.length ?
                    <>
                        <S.ListResult>
                            {
                                searchlist.map(item => {
                                    return (
                                        <QurationListItem checklist={checklist} getChecklist={getChecklist} key={item.contentid} deleteChecklist={deleteChecklist} place={item} />    
                                    )
                                })
                            }
                        </S.ListResult>
                    </> 
                    :
                    <>
                        <S.ParagraphResult>
                            현재 선택한 공간
                        </S.ParagraphResult>
                        <S.ListResult>
                            { list ?
                                list.map(item => {
                                return (
                                    <QurationListItem checklist={checklist} getChecklist={getChecklist} key={item.contentid} deleteChecklist={deleteChecklist} place={item} />
                                    )
                                })
                                : <></>
                            }
                        </S.ListResult>
                    </>
            }
            <Link to='/profile/addquration' state={{ checklist, id}} >
                <S.ButtonSave className={checklist.length > 0 ? "on" : false}>저장</S.ButtonSave>
            </Link>
        </S.SectionList>
    )
}
