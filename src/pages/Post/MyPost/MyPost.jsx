import { React, useState, useEffect } from 'react'
import PostItem from '../../../components/Post/PostItem/PostItem';
import DetailMyPostModal from '../../../components/Modal/DetailMyPostModal';

const getToken=()=>{
  let token= localStorage.getItem("Access Token");
  return token;
}

export default function MyPost() {
    const url = "https://mandarin.api.weniv.co.kr";
    let token = getToken();
    let accountname= localStorage.getItem("user ID");
    let [myPostData, setMyPostData] =useState([]);
    let [detailMyPostModal, setDetailMyPostModal]= useState(false);
  
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
    <section>
      <ul>
        <PostItem feedData={myPostData}/>
      </ul>
    </section>
  )

  }