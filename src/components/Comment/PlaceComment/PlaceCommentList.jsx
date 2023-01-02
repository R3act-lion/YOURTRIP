import React, { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'
import PlaceCommentListItem from './PlaceCommentListItem'

const ListComment = styled.ul`
    padding: 5px 19px 65px;
`

const getComments = async (callBack) => {
    const uploadAccount = JSON.parse(localStorage.getItem('defaultAccount'));
    const url = "https://mandarin.api.weniv.co.kr";

    try {
        const res = await fetch(url + "/product/" + uploadAccount.accountname + '/?limit=10000&skip=0', {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${uploadAccount.token}`,
                "Content-Type": "application/json",
            }
        });
        const resJson = await res.json();
        // console.log(resJson);
        callBack(resJson.product)
    } catch (err) {
        console.error(err);
    }
}

export default function PlaceCommentList({ placeid, setRenderFunction }) {
    const [comments, setComments] = useState([]);
    const [updateTarget, updateState] = useState();

    useEffect(() => {
        getComments(setComments)
        setRenderFunction(() => {
            return updateState;
        })
    }, [updateTarget])

    console.log(comments);

    return (
        <ListComment>
            {
                comments.filter((comment) => comment.itemName === 'yourtrip_placeComment_' + placeid).map((comment) => {
                    return <PlaceCommentListItem key={comment.id} comment={comment} />
                })
            }
        </ListComment>
    )
}
