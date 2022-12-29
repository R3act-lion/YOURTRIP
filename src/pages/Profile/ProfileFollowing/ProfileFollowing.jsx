import { React,useEffect, useState } from 'react'
import styled from 'styled-components';
import UserDesc from '../../../components/UserDesc/UserDesc';
import FollowingBtn from '../../../components/FollowingBtn/FollowingBtn'

const SectionFollowers = styled.section`
    padding: 24px 16px;
`

const ListItemFollowers = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;

    &  + li {
        margin-top: 16px;
    }
`

export default function ProfileFollowing() {
    const url= "https://mandarin.api.weniv.co.kr";
    let token= localStorage.getItem('Access Token');
    let accountname= localStorage.getItem('user ID');
    let [followingData, setFollowingData]= useState([]);

    //팔로잉 리스트 확인 함수
    const followingList=async()=>{
        try{
        const res= await fetch(url+`/profile/${accountname}/following`,{
            method: "GET",
            headers:{
                "Authorization" : `Bearer ${token}`,
                "Content-type" : "application/json"
                }
            }
        )
        const resJson= await res.json();
        console.log(resJson)
        setFollowingData([...resJson])    
        } catch(err) {
            console.error(err);
        }
    }
    console.log(followingData)

    setTimeout(() => {
        document.querySelector('h1').textContent = 'Following'
        window.scrollTo(0,0);
    }, 0);

    useEffect(()=>{
        followingList();
    },[]);

    return (
        <SectionFollowers>
            <header>
                <h2 className='irOnly'>
                    팔로잉 목록
                </h2>
            </header>
            <ul>
                {(followingData.length > 0) &&
                    followingData.map((item)=>{
                        return(
                        <ListItemFollowers key={item._id}>
                            <UserDesc img={item.image} name={item.username} id={item._id}/>
                            <FollowingBtn item={item}/>
                        </ListItemFollowers>
                    )}
                )}
            </ul>
        </SectionFollowers>
    )
}
