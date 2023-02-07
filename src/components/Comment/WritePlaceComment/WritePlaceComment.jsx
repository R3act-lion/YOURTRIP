import React, { useRef, useState } from 'react';
import ProfileImage from '../../../assets/images/profile.svg';
import { writeComments } from '../../../Upload/api';
import * as S from "../style";

const writeComment = async (postId, comment, renderFunction) => {
    const data = {
        "comment": {
            "content": comment
        }
    }

    const response = await writeComments(postId, data)
    console.log(response);
    renderFunction(() => {
            return {}
        });
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