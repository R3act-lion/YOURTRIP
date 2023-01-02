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
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-type": "application/json"
                }
            })
            const resJson = await res.json();
            console.log(resJson);
            setFeedData(resJson.post);

        } catch (err) {
            console.err(err);
        }
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <>
            <ListPost>
                {/* <PostItem feedData={[...feedData]} /> */}
            </ListPost>
        </>
    )
}
