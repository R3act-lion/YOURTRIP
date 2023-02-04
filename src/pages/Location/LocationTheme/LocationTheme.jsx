import React from 'react'
import { useLocation } from 'react-router'
import RecommendList from '../../../components/SlideList/RecommendList/RecommendList'
import * as S from "../style"

export default function LocationTheme() {
    window.scrollTo(0, 0)
    const url = '/location/placelist'

    const location = useLocation();
    const placeList = location.state.placeList
    const area = location.state.area
    const placeData = placeList[area];

    return (
        <>
            <S.SectionRecommend>
                <header>
                    <h2 className='irOnly'>
                        지역별 테마
                    </h2>
                </header>
                <ul>
                    {
                        (() => {
                            const result = [];

                            for (const key in placeData) {
                                if (key !== 'count' && key !== 'image') {
                                    result.push(
                                        <RecommendList key={key} themeData={placeData[key]} theme={key} isLocation={true} url={url} />
                                    )
                                }
                            }

                            console.log();

                            return result;
                        })()
                    }
                </ul>
            </S.SectionRecommend>

        </>
    )

    // return (
    // <>
    //     {category === "place" ? 
    //         <>
    //             <SectionRecommend>
    //                 <HeadingTwoTitle>
    //                     오늘의 추천
    //                 </HeadingTwoTitle>
    //                 <RecommendList data={data} title={title} selectedItem={list} category={category} url={url} />
    //             </SectionRecommend>
    //             <SectionMost>
    //                 <HeadingTwoTitle>
    //                     많이 찾는 여행지
    //                 </HeadingTwoTitle>
    //                 <SimplePlaceList selectedItem={list} category={category} url={url}/>
    //             </SectionMost>
    //         </>
    //     :
    //         <RecommendPlaceList selectedItem={selectedItem} category={category} />
    //     }
    // </>
    // )
}
