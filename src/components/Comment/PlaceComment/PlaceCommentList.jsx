import React, { useEffect, useState } from 'react';
import { getDefaultProduct } from '../../../Upload/api';
import PlaceCommentListItem from './PlaceCommentListItem';
import * as S from "./style";


const getComments = async (callBack) => {
    const reseponse = await getDefaultProduct()
    callBack(reseponse.product)
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

    return (
        <S.ListComment>
            {
                comments.filter((comment) => comment.itemName === 'yourtrip_placeComment_' + placeid).map((comment) => {
                    return <PlaceCommentListItem key={comment.id} comment={comment} />
                })
            }
        </S.ListComment>
    )
}
