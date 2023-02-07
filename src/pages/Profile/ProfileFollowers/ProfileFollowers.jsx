import { React, useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import FollowingBtn from '../../../components/FollowingBtn/FollowingBtn';
import UserDesc from '../../../components/UserDesc/UserDesc';
import { getFollowerList } from '../../../Upload/api';
import * as S from "../style";

export default function ProfileFollowers() {
    let userId = localStorage.getItem('user ID')
    const location = useLocation()
    const userinfo = location.state.userinfo
    const accountname = userinfo.accountname
    let [followerData, setFollowerData] = useState([]);

    //팔로워 리스트 확인 함수
    const followerList = async () => {
        const response = await getFollowerList(accountname)
        setFollowerData([...response])
    }

    setTimeout(() => {
        document.querySelector('h1').textContent = 'Follower'
        window.scrollTo(0,0);
    }, 0);

    useEffect(()=>{
        followerList();
    },[]);

    return (
        <S.SectionFollowers>
            <header>
                <h2 className='irOnly'>
                    팔로잉 목록
                </h2>
            </header>
            <ul>
                {(followerData.length > 0) &&
                    followerData.map((item) => {
                        return(
                        <S.ListItemFollowers key={item._id}>
                            <UserDesc img={item.image} name={item.username} id={item.accountname} />
                            {
                                item.accountname === userId ?
                                <></>    
                                :
                                <FollowingBtn userinfo={item} followState={ item.isfollow} />
                            }
                        </S.ListItemFollowers>
                    )}
                )}
            </ul>
        </S.SectionFollowers>
    )
}