import { React, useEffect, useState } from 'react';
import PostItem from '../../../components/Post/PostItem/PostItem';
import { getPost } from '../../../Upload/api';

export default function MyPost() {
    let accountname= localStorage.getItem("user ID");
    let [myPostData, setMyPostData] =useState([]);
  
  const getMyPost = async () => {
    const response = await getPost(accountname);
    setMyPostData(response.post)
    }
  
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