import { React, useState, useEffect } from 'react'
import styled from 'styled-components'
import PostItem from '../PostItem/PostItem'
import { Link } from 'react-router-dom'

const ListPost = styled.ul`
   
`

const getToken = () => {
    let token = JSON.parse(localStorage.getItem("defaultAccount")).token;

    // if (!!!token) {
    //     token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYWVmYjQ3YjJjYjIwNTY2MzgwZDU5OCIsImV4cCI6MTY3NzU5NTk5OSwiaWF0IjoxNjcyNDExOTk5fQ.de_cnB9iqQOvea2ToGiFqP4gtXH64nY0f5lUZgTVev0'
    // }

    return token;
}

export default function PostList() {
    const url = "https://mandarin.api.weniv.co.kr";
    let token = getToken();
    let [feedData, setFeedData] = useState([]);

    // console.log(feedData);

    const getData = async () => {
        try {
            const res = await fetch(url + "/post/feed", {
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-type": "application/json"
                }
            })
            const resJson = await res.json();
            setFeedData(resJson.posts);

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
                <PostItem feedData={[...feedData]} />
            </ListPost>
        </>
    )
}
