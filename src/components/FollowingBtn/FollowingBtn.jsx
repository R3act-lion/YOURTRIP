import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import Button from '../../modules/Button/Button';

export default function FollowingBtn({ followState, followerCount, followingCount, userinfo }) {
    const url= "https://mandarin.api.weniv.co.kr";
    const token = localStorage.getItem('Access Token');
    const path = useLocation().pathname;
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
                    color="#767676"
                    backgroundColor="#FFF"
                    width={path.includes('yourprofile') ? "120px" : "60px"}
                    height={path.includes('yourprofile') ? "34px" : "28px"}
                    fontSize={path.includes('yourprofile') ? "14px" : "12px"}
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
                    width={path.includes('yourprofile') ? "120px" : "60px"}
                    height={path.includes('yourprofile') ? "34px" : "28px"}
                    fontSize={path.includes('yourprofile') ? "14px" : "12px"}
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
