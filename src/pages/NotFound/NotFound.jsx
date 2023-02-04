import React from 'react';
import { useNavigate } from 'react-router-dom';
import notfound from '../../assets/images/404Logo.svg';
import * as S from "./style";

export default function NotFound() {
    const navigation = useNavigate();

    return (
        <>
            <header>
                <h1 className='irOnly'>404 Not Found</h1>
            </header>
            <S.MainContainer>
                <S.SectionNotFound>
                    <header>
                        <S.ImageNotFound src={notfound} alt='' />
                        <S.HeadingTwo>
                            페이지를 찾을 수 없습니다.
                        </S.HeadingTwo>
                    </header>
                    <S.LinkBack to={navigation(-1)}>
                        이전 페이지
                    </S.LinkBack>
                </S.SectionNotFound>
            </S.MainContainer>
        </>
    )
}