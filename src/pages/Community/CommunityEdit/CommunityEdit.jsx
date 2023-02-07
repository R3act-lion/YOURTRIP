import { React, useRef, useState } from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import iconX from '../../../assets/images/icon-x.svg';
import { editPost, uploadImageFile } from '../../../Upload/api';
import * as S from "../style";

export default function CommunityEdit() {
    const fileInputRef = useRef();
    const textArea = useRef();
    const handleResizeHeight = () => {
        textArea.current.style.height = 'auto'
        textArea.current.style.height = textArea.current.scrollHeight + 'px'
        textArea.current.style.color = 'black'
    }

    const location= useLocation();
    const postId= location.state.postId;
    const writerImg= location.state.writerImg;
    const url = "https://mandarin.api.weniv.co.kr";

    let [content, setContent] = useState(`${location.state.content}`);
    let [imagesrc, setImagesrc] = useState(
        location.state.image == [""] 
        ? [] 
        : `${location.state.image}`.split(','));

    // 수정 업로드하는 함수
    const postEditing= async()=>{
        const userData = localStorage.getItem('user');
        const newContent = {
            text: content,
            user: userData
        }

        const data = {
            "post": {
                    "content": 'yourtrip_post_' + JSON.stringify(newContent).replaceAll(/{/g, '(').replaceAll(/}/g, ')'),
                    "image": imagesrc.join()
                }
        }

        await editPost(postId, data)
    }

    // 파일 인풋창 열리는 함수
    const handleClickFileInput = () => {
        if (imagesrc.length >= 3) {
            alert("이미지는 3장까지만 업로드 가능합니다")
        } else {
            fileInputRef.current.click();
        }
    }

    //파일을 이미지 배열에 넣는 함수
    const fileInput = (e) => {
        const Blob = e.target.files[0];

        if (Blob === undefined) {
            return;
        }
        uploadImage(Blob);
    }

    // 이미지 서버로 보내고 나서 filename 받는 함수
    const uploadImage = async (Blob) => {
        if (imagesrc.length <= 3) {
            const formData = new FormData();
            formData.append("image", Blob);

            const response = await uploadImageFile(formData)
            let makeSrc = url + '/' + response[0]["filename"];
            setImagesrc((imagesrc) => [...imagesrc, makeSrc]);
        } else {
            alert("사진은 3장까지만 업로드 가능합니다");
        }
    }

    return (
        <S.SectionUpload>
            {
                !!localStorage.user
                    ? <>
                        <S.ImageProfile src={writerImg} alt='' />
                        <S.FormPost action="">
                            <S.TextAreaContent ref={textArea} id='postInput' onInput={handleResizeHeight} rows={1} onChange={(e) => {
                                setContent(e.target.value)

                            }} placeholder='게시글 입력하기...'>{content}</S.TextAreaContent>
                            <S.PrevImgList>
                                <>
                                {
                                    imagesrc.map((item) => {
                                        return (
                                            <>
                                                {imagesrc == "" 
                                                ? null
                                                :
                                                (imagesrc.length === 1)
                                                    ? <S.PrevBigImg src={item} onClick={() => {
                                                        setImagesrc(imagesrc.filter(src => src !== item))
                                                    }} />

                                                    : <S.PrevSmallImg src={item} onClick={() => {
                                                        setImagesrc(imagesrc.filter(src => src !== item))
                                                    }} />
                                                }
                                                <S.PrevXBtn src={iconX} />
                                            </>
                                        )
                                    })
                                }
                                </>
                            </S.PrevImgList>

                        </S.FormPost>
                        <S.ButtonImageUpload>
                            <S.ImageLabel onClick={handleClickFileInput} />
                            <S.ImageUpload
                                alt='이미지 업로드 버튼'
                                type="file"
                                accept=".jpg, .gif, .png, .jpeg, .bmp, .tif, .heic"
                                ref={fileInputRef} 
                                onChange={fileInput} 
                                />
                        </S.ButtonImageUpload>
                        <Link to="/community">
                            <S.ButtonUpload onClick={postEditing} style={{
                                backgroundColor:
                                    ((content == "") && (imagesrc == ""))
                                        ? "#C9D9F0" : "#3C70BC" }}>
                                업로드
                            </S.ButtonUpload>
                        </Link>
                    </>
                    : <></>
            }
            
        </S.SectionUpload>
    )
}
