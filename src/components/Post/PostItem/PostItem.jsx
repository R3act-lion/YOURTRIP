import { React,useState } from 'react'
import styled from 'styled-components'
import UserDesc from '../../UserDesc/UserDesc'
import MoreImg from '../../../assets/images/icon-more.svg'
import HeartImg from '../../../assets/images/icon-heart.svg'
import CommentImg from '../../../assets/images/icon-comment.svg'

const DivPost = styled.div`
    position: relative;
    padding: 20px;
`

const ImageMore = styled.img`
    position: absolute;
    top: 30px;
    right: 20px;
`

const DivContent = styled.div`
    padding-left: 54px;
    margin-top: 16px;
`

const ParagraphContent = styled.p`
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    margin-bottom: 15px;
`

const ImageContent = styled.img`
    width: 290px;
    height: 228px;
    vertical-align: top;
    margin-bottom: 15px;
`

const ImageAdditional = styled.img`
    width: 15px;
    height: 15px;
    vertical-align: middle;
    margin-right: 8px;
`

const ParagraphAdditional = styled.p`
    display: inline-block;
    font-weight: 400;
    font-size: 12px;
    line-height: 12px;
    color: #767676;
    margin-right: 18px;
`

const ParagraphTime = styled.p`
    font-weight: 400;
    font-size: 10px;
    line-height: 12px;
    color: #767676;
    margin-top: 18px;
`

export default function PostItem() {
    const url = "https://mandarin.api.weniv.co.kr";
    const token = localStorage.getItem("Access Token");
    
    let [userName, setUserName]=useState('');
    let [userId, setUserId]=useState('');
    let [userImage, setUserImage]=useState('');
    let [userContent, setUserContent]=useState('');
    let [heartCount, setHeartCount]=useState(0);
    let [commentCount, setCommentCount]=useState(0);
    let [createdAt, setCreatedAt]=useState(''); 

    const getData= async()=>{
        const res= fetch(url+"/post/feed",{
            headers: {
                "Authorization" : `Bearer ${token}`,
	            "Content-type" : "application/json"
            }
        })
        const resJson= res.json();

        setUserName(resJson.posts["author"].username);
        setUserId(resJson.posts["author"]._id);
        setUserContent(resJson.posts["content"]);
        setUserImage(resJson.posts["image"]);
        setHeartCount(resJson.posts["heartCount"]);
        setCommentCount(resJson.posts["commentCount"]);
        setCreatedAt(resJson.posts["createdAt"]);
    }
    return (
        <DivPost>
            <UserDesc img={userImage} name={userName} id={userId}/>
            <ImageMore src={MoreImg} alt='더보기' />
            <DivContent>
                <ParagraphContent>
                    {userContent}
                </ParagraphContent>
                <ImageContent src={userImage} alt='' />
                <ImageAdditional src={HeartImg} alt='좋아요' />
                <ParagraphAdditional>
                    {heartCount}
                </ParagraphAdditional>
                <ImageAdditional src={CommentImg} alt='댓글' />
                <ParagraphAdditional>
                    {commentCount}
                </ParagraphAdditional>
                <ParagraphTime>
                    {createdAt}
                </ParagraphTime>
            </DivContent>
        </DivPost>
    )
}