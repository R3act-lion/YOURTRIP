import { React, useEffect, useState } from 'react';
import PostItem from '../../../components/Post/PostItem/PostItem';

const getToken=()=>{
  const token = JSON.parse(localStorage.getItem('defaultAccount')).token;
  return token;
}

export default function MyPost() {
    const url = "https://mandarin.api.weniv.co.kr";
    let token = getToken();
    let accountname= localStorage.getItem("user ID");
    let [myPostData, setMyPostData] =useState([]);
  
    const getMyPost = async () => {
      try {
        const res = await fetch(url+`/post/${accountname}/userpost`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-type": "application/json"
            }
        })
        const resJson = await res.json();
        setMyPostData(resJson.post);
        console.log()

    } catch (err) {
        console.err(err);
    }
    }
  

  console.log(myPostData)

  
  useEffect(()=>{
    getMyPost();
  },[])

  return (
      <ul>
          {myPostData.map((item)=>{
            return(
              <PostItem key={item._id} content={item.content} writer={item.author} feedData={item} />
                  )
                })}
      </ul>
  )

  }