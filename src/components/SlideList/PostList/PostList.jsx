import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import IconArrowRight from '../../../assets/images/icon-arrow-right.svg'
import PostListItem from './PostListItem'

const SectionPost = styled.section`
    padding: 28px 0;
`

const HeaderCommunity = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 28px 15px 16px;
`

const HeadingTwoTitle = styled.h2`
    font-weight: 700;
    font-size: 22px;
    line-height: 28px;
`

const ImageTitle = styled.img`
    width: 10px;
    height: 18px;
`

const ListPost = styled.ul`
    width: 100%;
    overflow-x: scroll;
    padding: 2px 22px;
    display: flex;
    justify-content: space-between;
    gap: 8px;
    touch-action: pan-x;

    &::-webkit-scrollbar {
        display: none;
    }
`

const getToken = () => {
    let token = JSON.parse(localStorage.getItem('defaultAccount')).token;
    return token;
}

export default function PostList() {
    const url = "https://mandarin.api.weniv.co.kr";
    let token = getToken();
    let [feedData, setFeedData] = useState([]);

    console.log(feedData);

    const getData = async () => {
        try {
            const res = await fetch(url + "/post/yourtrip_official/userpost", {
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-type": "application/json"
                }
            })
            const resJson = await res.json();
            // console.log(resJson);
            setFeedData(resJson.post);

        } catch (err) {
            console.err(err);
        }
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <SectionPost>
            <Link to='/community'>
                <HeaderCommunity>
                    <HeadingTwoTitle>우리의 이야기</HeadingTwoTitle>
                    <ImageTitle src={IconArrowRight} alt='' />
                </HeaderCommunity>
            </Link>
            <ListPost>
                {/* <PostListItem content={content} />
                <PostListItem content={content} />
                <PostListItem content={content} /> */}
                {
                    feedData.filter(item => item.content.startsWith('yourtrip_post_')).map(item => {
                        // console.log(item);

                        const contentData = JSON.parse(item.content.slice(14).replaceAll(/\(/g, '{').replaceAll(/\)/g, '}'))

                        // console.log(contentData);

                        return <PostListItem key={item.id} content={contentData.text} writer={JSON.parse(contentData.user)} feedData={item} />
                    })
                }
            </ListPost>
        </SectionPost>
    )
}
