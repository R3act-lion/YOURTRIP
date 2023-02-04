import React from 'react'
import LeftArrowImg from '../../../assets/images/icon-arrow-left.svg'
import * as S from "./style"

export default function UploadHeader() {
    return (
        <S.HeaderContainer>
            <S.LinkPrev to='/'>
                <S.LeftArrowImage src={LeftArrowImg} alt='뒤로가기' />
            </S.LinkPrev>
            <S.BasicTitle>
                업로드 페이지
            </S.BasicTitle>
            {/* 저장 버튼 생성 후 연결 */}
        </S.HeaderContainer>
    )
}
