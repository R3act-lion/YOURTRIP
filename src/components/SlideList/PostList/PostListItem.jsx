import React from 'react';
import { useNavigate } from 'react-router-dom';
import IconCOmmunity from '../../../assets/images/icon-community-mini.svg';
import * as S from "./style";

export default function PostListItem({ content, writer, feedData }) {
    const navigate = useNavigate();

    return (
        <S.ListItemCommunity onClick={() => { navigate(`/post/${feedData.id}`, { state: { postDetail: feedData, writer: writer, content: content } }) }}>
            <S.DivCommunity>
                <S.ParagraphContent>
                    {content}
                </S.ParagraphContent>
                <S.ImageCommunity src={IconCOmmunity} alt='' />
            </S.DivCommunity>
        </S.ListItemCommunity>
    )
}