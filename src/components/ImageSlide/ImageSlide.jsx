import styled from "styled-components";
import Image from "../../modules/Image/Image";

const PlaceDetailCont = styled.section`
    width: 100%;
    display: flex;
    padding: 2px 22px;
    overflow-x: scroll;
    gap: 13px;
    // 스크롤 숨기기
    -ms-overflow-style: none; 
    scrollbar-width: none; 
    ::-webkit-scrollbar{
      display: none;
    }
`

export default function ImageSlide({ placelist }) {
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
        <PlaceDetailCont
            onMouseLeave={handleMouseLeave} onMouseUp={handleMouseUp} onMouseDown={handleMouseDown} onMouseMove={handleMouseMove}>
            {placelist.map((item, index) =>
                <Image key={item.contentid + index}
                    src={item.firstimage}
                    width="212px"
                    height="280px"
                    borderRadius="5px" />
            )}
            {/* 후에 데이터에서 순회하는 걸로 변경 */}

        </PlaceDetailCont>
    )
};
