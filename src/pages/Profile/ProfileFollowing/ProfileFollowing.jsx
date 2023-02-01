import { React, useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import styled from 'styled-components';
import FollowingBtn from '../../../components/FollowingBtn/FollowingBtn';
import UserDesc from '../../../components/UserDesc/UserDesc';

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

export default function ProfileFollowing() {
    const url= "https://mandarin.api.weniv.co.kr";
    const token = localStorage.getItem('Access Token');
    const userId = localStorage.getItem('user ID')
    const [followingData, setFollowingData] = useState([]);
    const location = useLocation()
    const userinfo = location.state.userinfo
    const accountname = userinfo.accountname

    //팔로잉 리스트 확인 함수
    const followingList=async()=>{
        try{
            const res= await fetch(url+`/profile/${accountname}/following?limit=Number&skip=Number`,{
                method: "GET",
                headers:{
                    "Authorization" : `Bearer ${token}`,
                    "Content-type" : "application/json"
                    }
                }
            )
            const resJson= await res.json();
            setFollowingData([...resJson])    
        } catch(err) {
            console.error(err);
        }
    }

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
                            <UserDesc img={item.image} name={item.username} id={item.accountname} />
                            {
                                item.accountname === userId ? <></>    
                                :
                                <FollowingBtn userinfo={item} followState={item.isfollow} />
                            }
                        </ListItemFollowers>
                    )}
                )}
            </ul>
        </SectionFollowers>
    )
}
