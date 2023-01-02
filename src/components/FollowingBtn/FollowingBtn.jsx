import { useEffect, useState } from 'react';
import Button from '../../modules/Button/Button';

export default function FollowingBtn({ followState, followerCount, followingCount, userinfo }) {
    const url= "https://mandarin.api.weniv.co.kr";
    const token = localStorage.getItem('Access Token');
    const [isFollow, setIsFollow] = useState(followState);

    useEffect(() => {
    	setIsFollow(followState);
    }, [followState]);

    //팔로우 함수
    const follow = async () => {
        try{
        const res= await fetch(url+`/profile/${userinfo.accountname}/follow`,{
            method: "POST",
            headers: {
                    "Authorization" : `Bearer ${token}`,
                    "Content-type" : "application/json"
                }
        }) 
        const resJson = await res.json();
        followerCount(resJson.profile.followerCount)
        followingCount(resJson.profile.followingCount)
            
        } catch(err) {
            console.error(err);
        }
    }
    
    //언팔로우 함수
    const unfollow = async () => {
        try{
            const res= await fetch(url+`/profile/${userinfo.accountname}/unfollow`,{
                method: "DELETE",
                headers: {
                        "Authorization" : `Bearer ${token}`,
                        "Content-type" : "application/json"
                    }
            }) 
            const resJson= await res.json();
            followerCount(resJson.profile.followerCount)
            followingCount(resJson.profile.followingCount)
        } catch(err) {
            console.error(err);
        }
    }

    return(
        <>
            {isFollow ?
                <Button
                    text="언팔로우"
                    color="#767676;"
                    backgroundColor="#FFF"
                    width="120px"
                    height="34px"
                    fontSize="14px"
                    fontWeight="500"
                    className="btnChecked"
                    onClick={() => {
                        setIsFollow(false);
                        unfollow();
                    }}
                />
                :
                <Button
                    text="팔로우"
                    color="#FFF"
                    backgroundColor="#3C70BC"
                    width="120px"
                    height="34px"
                    fontSize="14px"
                    fontWeight="500"
                    onClick={() => {
                        setIsFollow(true);
                        follow();
                    }}
                />
            }
        </>
    )
}
