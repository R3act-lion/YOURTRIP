import React from 'react'
import styled from 'styled-components'
import duksu from '../../../../assets/images/test_duksu.png'
import CheckImage from '../../../../assets/images/icon-check.svg'

const ListItemResult = styled.li`
    display: flex;
    align-items: center;

    & + li {
        margin-top: 15px;
    }
`

const ImageResult = styled.img`
    width: 77px;
    height: 77px;
    object-fit: cover;
    margin-right: 10px;
    border-radius: 5px;
`

const DivDesc = styled.div`
    
`

const ParagraphName = styled.p`
    font-weight: 500;
    font-size: 20px;
    line-height: 25px;
    margin-bottom: 8px;
`

const ParagraphDesc = styled.p`
    font-weight: 400;
    font-size: 14px;
    line-height: 14px;
    color: #676767;
`

const ButtonCheck = styled.button`
    width: 32px;
    margin-left: auto;
    margin-right: 11px;
`

const ImageCheck = styled.img`
    width: 100%;
`

export default function QurationListItem() {
    return (
        <ListItemResult>
            <ImageResult src={duksu} />
            <DivDesc>
                <ParagraphName>
                    덕수궁
                </ParagraphName>
                <ParagraphDesc>
                    서울 | 중구 ∙ 궁궐
                </ParagraphDesc>
            </DivDesc>
            <ButtonCheck>
                <ImageCheck src={CheckImage} alt='선택' />
            </ButtonCheck>
        </ListItemResult>
    )
}
