import React from 'react'
import styled from 'styled-components';
import UserDesc from '../../../components/UserDesc/UserDesc';

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

const ButtonFollow = styled.button`
    width: 56px;
    height: 28px;
    background-color: #3C70BC;
    border-radius: 26px;
    font-weight: 400;
    font-size: 12px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
`

const ButtonCancel = styled.button`
    width: 56px;
    height: 28px;
    border: 1px solid #DBDBDB;
    border-radius: 26px;
    font-weight: 400;
    font-size: 12px;
    color: #767676;
    display: flex;
    align-items: center;
    justify-content: center;
`

export default function ProfileFollowing() {
    setTimeout(() => {
        document.querySelector('h1').textContent = 'Following'
        window.scrollTo(0,0)
    }, 0);

    return (
        <SectionFollowers>
            <header>
                <h2 className='irOnly'>
                    팔로워 목록
                </h2>
            </header>
            <ul>
                <ListItemFollowers>
                    <UserDesc />
                    <ButtonFollow>
                        팔로우
                    </ButtonFollow>
                </ListItemFollowers>
                <ListItemFollowers>
                    <UserDesc />
                    <ButtonFollow>
                        팔로우
                    </ButtonFollow>
                </ListItemFollowers>
                <ListItemFollowers>
                    <UserDesc />
                    <ButtonCancel>
                        취소
                    </ButtonCancel>
                </ListItemFollowers>
            </ul>
        </SectionFollowers>
    )
}
