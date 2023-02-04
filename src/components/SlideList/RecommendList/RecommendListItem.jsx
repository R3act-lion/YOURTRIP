import React from 'react'
import { Link } from 'react-router-dom'
import IconArrowRight from '../../../assets/images/icon-arrow-right.svg'
import ImageSlide from '../../ImageSlide/ImageSlide'
import * as S from "./style"

export default function RecommendListItem({ data, title, subtilte, placelist, category, url }) {
    return (
        <S.ListItemRecommend>
            <section>
                <Link to={url || '/home/placelist'} state={{data, placelist}}>
                    <S.HeaderTheme>
                        <S.ImageListTitle>
                            {
                                !!title
                                ? title
                                : '오늘의 추천'
                            }
                        </S.ImageListTitle>
                        <S.ImageArrowRight src={IconArrowRight} alt="" />
                    </S.HeaderTheme>
                    </Link>
                    <ImageSlide placelist={placelist}/>
                    {/* <ListImage>
                        {
                            placelist.map((place, index) =>
                                <RecommendImage key={place.contentid} image={place.firstimage} alt={place.title} />)
                        }
                    </ListImage> */}
                
            </section>
        </S.ListItemRecommend>
    )
}