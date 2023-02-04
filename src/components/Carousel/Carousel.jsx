import { React, useEffect, useState } from 'react';
import * as S from "./style";

export default function Carousel({ imageData }) {
    const [current, setCurrent] = useState(0);
    const [style, setStyle] = useState({
        marginLeft: `-${current}00%`
    });
    const imgSize = imageData.length;

    const moveSlide = (i) => {
        let nextIndex = current + i;
        if (nextIndex >= imgSize) {
            nextIndex = 0;
        }
        setCurrent(nextIndex);
    }

    useEffect(() => {
        setStyle({ marginLeft: `-${current}00%` });
        console.log(current);
    }, [current]);

    return (
        <S.ImageCont>
            <S.ImageList style={style}>
                {(imageData != '') &&
                    imageData.map((url) => {
                        return (
                            <>
                                <S.ImageContent src={url} alt='' onClick={() => { moveSlide(1) }} />
                                <S.ImageDiv>
                                    <S.DotIconList>
                                        {imageData.map((item, index) => {
                                            return (
                                                <>
                                                    {index === current ? <S.DotCurrentIcon key={item + index} /> : <S.DotIcon key={item + index} />}
                                                </>
                                            )
                                        })}

                                    </S.DotIconList>
                                </S.ImageDiv>
                            </>

                        )
                    }
                    )
                }
            </S.ImageList>
        </S.ImageCont>
    )
}