import { useState } from 'react';
import styled from 'styled-components';
import followBtn from '../../assets/images/btn-follow.svg'
import unfollowBtn from '../../assets/images/btn-unfollow.svg';

const ButtonFollow = styled.button`
    width: 56px;
    height: 28px;
    background-image: url(${followBtn})
`

const ButtonCancel = styled.button`
    width: 56px;
    height: 28px;
    background-image: url(${unfollowBtn})  
`

export default function FollowingBtn({item}){
    const url= "https://mandarin.api.weniv.co.kr";
    let token= localStorage.getItem('Access Token');
    console.log(token,"토큰입니다")
    let [isFollow , setIsFollow]= useState(item.isfollow);

    //팔로우 함수
    const follow = async()=>{
        try{
        const res= await fetch(url+`/profile/${item.accountname}/follow`,{
            method: "POST",
            headers: {
                    "Authorization" : `Bearer ${token}`,
                    "Content-type" : "application/json"
                }
        }) 
        const resJson= await res.json();
        console.log(resJson);
        } catch(err) {
            console.error(err);
        }
    }
    
    //언팔로우 함수
    const unfollow = async()=>{
        try{
            const res= await fetch(url+`/profile/${item.accountname}/unfollow`,{
                method: "DELETE",
                headers: {
                        "Authorization" : `Bearer ${token}`,
                        "Content-type" : "application/json"
                    }
            }) 
            const resJson= await res.json();
            console.log(resJson);
        } catch(err) {
            console.error(err);
        }
    }

    return(
        <>
        {isFollow === true 
            ? <ButtonCancel onClick={(e)=>{
                setIsFollow(false);
                unfollow();                                   
            }} /> 
            : <ButtonFollow onClick={(e)=>{
                setIsFollow(true);
                follow();                                   
            }}/>}
        </>
    )
}
