import React, { useState } from 'react'
import CheckFillImage from '../../../../assets/images/icon-check-fill.svg'
import CheckImage from '../../../../assets/images/icon-check.svg'
import * as S from "../../style"

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
        <S.ListItemResult>
                <S.ImageResult src={place.firstimage} />
                <div>
                    <S.ParagraphName>
                        {place.title}
                    </S.ParagraphName>
                    <S.ParagraphDesc>
                        {place.addr1.split(" ")[0]} | {place.addr1.split(" ")[1]} ∙ {place.detail}
                    </S.ParagraphDesc>
                </div>
                <S.ButtonCheck>
                <S.ImageCheck src={isCheck ? CheckFillImage : CheckImage} onClick={handleClick} alt='선택' />
                </S.ButtonCheck>
            </S.ListItemResult>
    )
}
