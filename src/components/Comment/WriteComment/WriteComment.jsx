import React, { useRef, useState } from 'react';
import ProfileImage from '../../../assets/images/profile.svg';
import * as S from "../style";

const writeComment = async (placeid, comment, renderFunction) => {
    const uploadAccount = JSON.parse(localStorage.getItem('defaultAccount'));
    const userAccount = localStorage.getItem('user').replaceAll(/{/g, '(').replaceAll(/}/g, ')');
    const url = "https://mandarin.api.weniv.co.kr";
    const placeId = 'yourtrip_placeComment_' + placeid;

    try {
        const res = await fetch(url + "/product", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${uploadAccount.token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "product": {
                    "itemName": placeId,
                    "price": 1,
                    "link": userAccount,
                    "itemImage": comment
                }
            })
        });
        const resJson = await res.json();
        console.log(resJson);
        renderFunction(() => {
            console.log('render');
            return {}
        });

    } catch (err) {
        console.error(err);
    }
}

export default function WriteComment({ placeid, renderFunction }) {
    const [comment, setComment] = useState('');
    const commentContent = useRef();

    const onClickPost = (e) => {
        e.preventDefault();
        writeComment(placeid, comment, renderFunction);
        setComment('');
    }

    return (
        <>
            {
                !!localStorage.user
                    ? <S.FormComment>
                        <S.ImageProfile src={ProfileImage} alt='' />
                        <label htmlFor="inputComment" className='irOnly'>댓글 내용 입력</label>
                        <S.InputComment ref={commentContent} value={comment} onChange={(e) => setComment(e.target.value)} placeholder='댓글 입력하기...' />
                        <button onClick={onClickPost}>
                            게시
                        </button>
                    </S.FormComment>
                    : <></>
            }
        </>

    )
}