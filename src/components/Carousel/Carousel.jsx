import { React, useEffect, useState } from 'react';
import styled from 'styled-components';
import dotCurrent from '../../assets/images/icon-dot-current.svg';
import dot from '../../assets/images/icon-dot.svg';
import { ImageContent } from '../Post/PostItem/PostItem';

const ImageCont = styled.section`
    width: 290px;
    overflow-x : hidden;
`

const ImageList = styled.ul`
    width: 100%;
    display: flex;
`

const ImageDiv = styled.div`
    position: relative;
`

const DotIconList = styled.ul`
    display: flex;
    gap: 6px;
    position: absolute;
    top: 208px;
    right: 134px;
    z-index: 10;
`

const DotIcon = styled.li`
    width: 6px;
    height: 6px;
    background-image: url(${dot});
`

const DotCurrentIcon = styled.li`
    width: 6px;
    height: 6px;
    background-image: url(${dotCurrent});
`

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
        <ImageCont>
            <ImageList style={style}>
                {(imageData != '') &&
                    imageData.map((url) => {
                        return (
                            <>
                                <ImageContent src={url} alt='' onClick={() => { moveSlide(1) }} />
                                <ImageDiv>
                                    <DotIconList>
                                        {imageData.map((item, index) => {
                                            return (
                                                <>
                                                    {index === current ? <DotCurrentIcon key={item + index} /> : <DotIcon key={item + index} />}
                                                </>
                                            )
                                        })}

                                    </DotIconList>
                                </ImageDiv>
                            </>

                        )
                    }
                    )
                }
            </ImageList>
        </ImageCont>
    )
}