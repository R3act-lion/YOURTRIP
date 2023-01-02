import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import ProfileImage from '../../../assets/images/profile.svg'

const FormComment = styled.form`
    padding: 12px 16px;
    width: 390px;
    display: flex;
    position: fixed;
    bottom: 60px;
    background-color: white;
`

const ImageProfile = styled.img`
    width: 36px;
    height: 36px;
    vertical-align: top;
    margin-right: 16px;
`

const InputComment = styled.input`
    border: 0;
    outline: 0;
    flex-grow: 1;
`

const ButtonPost = styled.button`

`

const writeComment = async (placeid, comment, renderFunction) => {
    const uploadAccount = JSON.parse(localStorage.getItem('defaultAccount'));
    const userAccount = localStorage.getItem('user').replaceAll(/{/g, '(').replaceAll(/}/g, ')');
    const url = "https://mandarin.api.weniv.co.kr";
    const placeId = 'yourtrip_' + placeid;

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

        setTimeout(() => {
            renderFunction(() => {
                console.log('render');
                return {}
            });
        }, 0);
        
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
                    ? <FormComment>
                        <ImageProfile src={ProfileImage} alt='' />
                        <label htmlFor="inputComment" className='irOnly'>댓글 내용 입력</label>
                        <InputComment ref={commentContent} value={comment} onChange={(e) => setComment(e.target.value)} placeholder='댓글 입력하기...' />
                        <ButtonPost onClick={onClickPost}>
                            게시
                        </ButtonPost>
                    </FormComment>
                    : <></>
            }
        </>

    )
}