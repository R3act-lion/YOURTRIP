import React, { useRef, useState } from 'react'
import ProfileImage from '../../../assets/images/profile.svg'
import * as S from "../style"

const writeComment = async (posdId, comment, renderFunction) => {
    const uploadAccount = JSON.parse(localStorage.getItem('user'));
    const url = "https://mandarin.api.weniv.co.kr";

    try {
        const res = await fetch(url + "/post/" + posdId + '/comments', {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${uploadAccount.token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "comment": {
                    "content": comment
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

export default function WritePlaceComment({ postId, renderFunction }) {
    const [comment, setComment] = useState('');
    const commentContent = useRef();

    const onClickPost = (e) => {
        e.preventDefault();
        writeComment(postId, comment, renderFunction);
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