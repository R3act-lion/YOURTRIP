import React from 'react'
import { useNavigate } from 'react-router-dom'
import LeftArrowImg from '../../../assets/images/icon-arrow-left.svg'
import * as S from "./style"

export default function ButtonHeader() {
    const navigation = useNavigate();

    return (
        <S.HeaderContainer>
            <S.ButtonPrev onClick={() => navigation(-1)}>
                <S.ImageLeftArrow src={LeftArrowImg} alt='뒤로가기' />
            </S.ButtonPrev>
            <h1 className='irOnly'>
                업로드 페이지
            </h1>
            {/* 저장 버튼 생성 후 연결 */}
            
        </S.HeaderContainer>
    )
}
