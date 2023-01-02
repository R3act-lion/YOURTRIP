import {React, useState, useEffect} from 'react'
import styled from 'styled-components';
import UserDesc from '../../../components/UserDesc/UserDesc';
import FollowingBtn from '../../../components/FollowingBtn/FollowingBtn';
import { useLocation } from 'react-router';

const SectionFollowers = styled.section`
    padding: 24px 16px;
`

const ListItemFollowers = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;

    &  + li {
        margin-top: 20px;
    }
`

export default function ProfileFollowers() {
    const url= "https://mandarin.api.weniv.co.kr";
    let token = localStorage.getItem('Access Token');
    const location = useLocation()
    const userinfo = location.state.userinfo
    const accountname = userinfo.accountname
    let [followerData, setFollowerData]= useState([]);

    //팔로워 리스트 확인 함수
    const followerList=async()=>{
        try{
        const res= await fetch(url+`/profile/${accountname}/follower?limit=Number&skip=Number`,{
            method: "GET",
            headers:{
                "Authorization" : `Bearer ${token}`,
                "Content-type" : "application/json"
                }
            }
        )
        const resJson= await res.json();
        setFollowerData([...resJson])    
        } catch(err) {
            console.error(err);
        }
    }

    setTimeout(() => {
        document.querySelector('h1').textContent = 'Follower'
        window.scrollTo(0,0);
    }, 0);

    useEffect(()=>{
        followerList();
    },[]);

    return (
        <SectionFollowers>
            <header>
                <h2 className='irOnly'>
                    팔로잉 목록
                </h2>
            </header>
            <ul>
                {(followerData.length > 0) &&
                    followerData.map((item) => {
                        return(
                        <ListItemFollowers key={item._id}>
                            <UserDesc img={item.image} name={item.username} id={item.accountname}/>
                            <FollowingBtn item={item}/>
                        </ListItemFollowers>
                    )}
                )}
            </ul>
        </SectionFollowers>
    )
}