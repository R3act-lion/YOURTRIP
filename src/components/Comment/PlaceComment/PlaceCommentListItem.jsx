import CommentItem from '../CommentItem/CommentItem';
import * as S from "./style";

export default function PlaceCommentListItem({ comment, isPost, postId, commentId }) {
    if (isPost) {

        return (
            <S.ListItemPostComment>
                <CommentItem user={comment.author} content={comment.content} postId={postId} commentId={commentId}/>
            </S.ListItemPostComment>
        )
    }
    else {
        const writerData = JSON.parse(comment.link.replaceAll(/\(/g, '{').replaceAll(/\)/g, '}'));

        return (
            <S.ListItemComment>
                <CommentItem user={writerData} content={comment.itemImage} postId={postId} commentId={commentId}/>
            </S.ListItemComment>
        )
    }

}