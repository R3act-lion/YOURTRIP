import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import duksu from '../../../../assets/images/test_duksu.png'
import CheckImage from '../../../../assets/images/icon-check.svg'
import CheckFillImage from '../../../../assets/images/icon-check-fill.svg'


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
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
`

const ParagraphDesc = styled.p`
    font-weight: 400;
    font-size: 14px;
    line-height: 14px;
    color: #676767;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
`

const ButtonCheck = styled.button`
    width: 32px;
    margin-left: auto;
    margin-right: 11px;
`

const ImageCheck = styled.img`
    flex-grow: 1;
`

export default function QurationListItem({ checklist, getChecklist, deleteChecklist, place }) {
    const [isCheck, setIsCheck] = useState(false)

    const setChecklistValue = (e) => {
        getChecklist(e)
    }
    
    function handleClick() {
        setIsCheck(!isCheck)
        if (!isCheck) setChecklistValue(place)
        if(checklist.length > 0 && isCheck) {
            deleteChecklist(place)
        }     
    }

    return (
        <ListItemResult>
                <ImageResult src={place.firstimage} />
                <DivDesc>
                    <ParagraphName>
                        {place.title}
                    </ParagraphName>
                    <ParagraphDesc>
                        {place.addr1.split(" ")[0]} | {place.addr1.split(" ")[1]} ∙ {place.detail}
                    </ParagraphDesc>
                </DivDesc>
                <ButtonCheck>
                <ImageCheck src={isCheck ? CheckFillImage : CheckImage} onClick={handleClick} alt='선택' />
                </ButtonCheck>
            </ListItemResult>
    )
}
