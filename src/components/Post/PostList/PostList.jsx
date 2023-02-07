import { React, useEffect, useState } from 'react';
import { getDefaultPost } from '../../../Upload/api';
import PostItem from '../PostItem/PostItem';


export default function PostList() {
    let [feedData, setFeedData] = useState([]);

    const getData = async () => {

        const response = await getDefaultPost()
        setFeedData(response.post)
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <>
            <ul>
                {
                    feedData.filter(item => item.content.startsWith('yourtrip_post_')).map(item => {

                        const contentData = JSON.parse(item.content.slice(14).replaceAll(/\(/g, '{').replaceAll(/\)/g, '}'))

                        return <PostItem key={contentData.text} content={contentData.text} writer={JSON.parse(contentData.user)} feedData={item} />
                    })
                }
            </ul>
        </>
    )
}
