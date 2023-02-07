import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import IconArrowRight from '../../../assets/images/icon-arrow-right.svg'
import { getDefaultPost } from '../../../Upload/api'
import PostListItem from './PostListItem'
import * as S from "./style"


export default function PostList() {
    let [feedData, setFeedData] = useState([]);

    const getData = async () => {
        const response = await getDefaultPost()
        setFeedData(response.post);
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <S.SectionPost>
            <Link to='/community'>
                <S.HeaderCommunity>
                    <S.HeadingTwoTitle>우리의 이야기</S.HeadingTwoTitle>
                    <S.ImageTitle src={IconArrowRight} alt='' />
                </S.HeaderCommunity>
            </Link>
            <S.ListPost>
                {/* <PostListItem content={content} />
                <PostListItem content={content} />
                <PostListItem content={content} /> */}
                {
                    feedData.filter(item => item.content.startsWith('yourtrip_post_')).map(item => {
                        const contentData = JSON.parse(item.content.slice(14).replaceAll(/\(/g, '{').replaceAll(/\)/g, '}'))

                        return <PostListItem key={item.id} content={contentData.text} writer={JSON.parse(contentData.user)} feedData={item} />
                    })
                }
            </S.ListPost>
        </S.SectionPost>
    )
}
