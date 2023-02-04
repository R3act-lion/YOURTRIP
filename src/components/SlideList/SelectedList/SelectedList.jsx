import React from 'react';
import SelectedListItem from './SelectedListItem';
import * as S from "./style";

export default function SelectedList({ checklist }) {
    let startX, scrollLeft
    let isDown = false;

    function handleMouseDown(e) {
        isDown = true;
        startX = e.pageX - e.target.parentElement.offsetLeft;
        scrollLeft = e.target.parentElement.scrollLeft;
    }

    function handleMouseLeave(e) {
        isDown = false;
    }

    function handleMouseUp(e) {
        isDown = false;
    }

    function handleMouseMove(e) {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - e.target.parentElement.offsetLeft;
        e.target.parentElement.scrollLeft = scrollLeft - (x - startX);
    }
    
    return (
        <S.ListSelected
              onMouseLeave={handleMouseLeave} onMouseUp={handleMouseUp} onMouseDown={handleMouseDown} onMouseMove={handleMouseMove}
        >
            {checklist.map(item => {
                return (
                    <SelectedListItem key={item.contentid} place={item} />
                )
            })}
        </S.ListSelected>
    )
}