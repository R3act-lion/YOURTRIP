import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import IconArrowRight from '../../../assets/images/icon-arrow-right.svg'
import PostListItem from './PostListItem'
import * as S from "./style"

const getToken = () => {
    let token = JSON.parse(localStorage.getItem('defaultAccount')).token;
    return token;
}

export default function PostList() {
    const url = "https://mandarin.api.weniv.co.kr";
    let token = getToken();
    let [feedData, setFeedData] = useState([]);

    const getData = async () => {
        try {
            const res = await fetch(url + "/post/yourtrip_official/userpost", {
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-type": "application/json"
                }
            })
            const resJson = await res.json();
            setFeedData(resJson.post);

        } catch (err) {
            console.err(err);
        }
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
