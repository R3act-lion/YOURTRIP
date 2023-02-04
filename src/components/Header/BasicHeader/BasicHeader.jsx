import React from 'react'
import { useNavigate } from 'react-router-dom'
import LeftArrowImg from '../../../assets/images/icon-arrow-left.svg'
import MoreImg from '../../../assets/images/icon-more.svg'
import * as S from "./style"


export default function BasicHeader({setProfileModal}) {
    const navigation = useNavigate();

    return (
        <S.HeaderContainer>
            <S.ButtonPrev onClick={() => navigation(-1)}>
                <S.ImageLeftArrow src={LeftArrowImg} alt='뒤로가기' />
            </S.ButtonPrev>
            <S.HeadingOneTitle>
                
            </S.HeadingOneTitle>
            <S.ButtonMore>
                <S.ImageMore src={MoreImg} alt='더보기' onClick={()=>{setProfileModal(true)}}/>
            </S.ButtonMore>
        </S.HeaderContainer>
    )
}