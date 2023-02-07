import { React, useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import FollowingBtn from '../../../components/FollowingBtn/FollowingBtn';
import UserDesc from '../../../components/UserDesc/UserDesc';
import { getFollowingList } from '../../../Upload/api';
import * as S from "../style";

export default function ProfileFollowing() {
    const userId = localStorage.getItem('user ID')
    const [followingData, setFollowingData] = useState([]);
    const location = useLocation()
    const userinfo = location.state.userinfo
    const accountname = userinfo.accountname

    const followingList = async () => {
        const response = await getFollowingList(accountname)
        setFollowingData([...response])    
    }

    setTimeout(() => {
        document.querySelector('h1').textContent = 'Following'
        window.scrollTo(0,0);
    }, 0);

    useEffect(()=>{
        followingList();
    },[]);

    return (
        <S.SectionFollowers>
            <header>
                <h2 className='irOnly'>
                    팔로잉 목록
                </h2>
            </header>
            <ul>
                {(followingData.length > 0) &&
                    followingData.map((item)=>{
                        return(
                        <S.ListItemFollowers key={item._id}>
                            <UserDesc img={item.image} name={item.username} id={item.accountname} />
                            {
                                item.accountname === userId ? <></>    
                                :
                                <FollowingBtn userinfo={item} followState={item.isfollow} />
                            }
                        </S.ListItemFollowers>
                    )}
                )}
            </ul>
        </S.SectionFollowers>
    )
}
