import { React, useState, useEffect } from 'react'
import styled from 'styled-components'
import PostItem from '../PostItem/PostItem'
import { Link } from 'react-router-dom'

const ListPost = styled.ul`
   
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
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-type": "application/json"
                }
            })
            const resJson = await res.json();
            setFeedData(resJson.post);

        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <>
            <ListPost>
                {
                    feedData.filter(item => item.content.startsWith('yourtrip_post_')).map(item => {
                        // console.log(item.content);

                        const contentData = JSON.parse(item.content.slice(14).replaceAll(/\(/g, '{').replaceAll(/\)/g, '}'))

                        // console.log(contentData);

                        return <PostItem key={contentData.text} content={contentData.text} writer={JSON.parse(contentData.user)} feedData={item} />
                    })
                }
            </ListPost>
        </>
    )
}
