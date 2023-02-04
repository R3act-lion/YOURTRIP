import PostCommentListItem from './PostCommentListItem'
import * as S from "./style"

export default function PostCommentList() {
    return (
        <S.ListComment>
            <PostCommentListItem />
            <PostCommentListItem />
            <PostCommentListItem />
        </S.ListComment>
    )
}