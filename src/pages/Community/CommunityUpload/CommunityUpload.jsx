import { React, useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import iconX from '../../../assets/images/icon-x.svg';
import * as S from "../style";

export default function CommunityUpload() {
    const fileInputRef = useRef();
    const textArea = useRef();
    const handleResizeHeight = () => {
        textArea.current.style.height = 'auto'
        textArea.current.style.height = textArea.current.scrollHeight + 'px'
        textArea.current.style.color = 'black'
    }

    const token = JSON.parse(localStorage.getItem('defaultAccount')).token;
    const url = "https://mandarin.api.weniv.co.kr";

    const profileImg= JSON.parse(localStorage.getItem("user")).image;
    const accountname = localStorage.getItem("user ID");

    let [content, setContent] = useState("");
    let [imagesrc, setImagesrc] = useState([]);
    let [authorAccountname, setAuthorAccountname] = useState("");
    const navegation = useNavigate();

    // 게시물 포스팅하는 함수
    async function posting() {
        const userData = localStorage.getItem('user');
        const newContent = {
            text: content,
            user: userData
        }

        try {
            const res = await fetch(url + "/post", {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    "post": {
                        "content": 'yourtrip_post_' + JSON.stringify(newContent).replaceAll(/{/g, '(').replaceAll(/}/g, ')'),
                        "image": imagesrc.join()
                    }
                })
            });
            const resJson = await res.json();
            setContent('');
            setImagesrc([]);
            setAuthorAccountname((JSON.parse(JSON.parse
                (resJson.post.content.slice(14).replaceAll(/\(/g, '{').replaceAll(/\)/g, '}')).user)).accountname);

        } catch (err) {
            console.error(err);
        }
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

            try {
                const res = await fetch(url + "/image/uploadfiles", {
                    method: "POST",
                    body: formData
                })
                const resJson = await res.json();
                let makeSrc = url + '/' + resJson[0]["filename"];
                setImagesrc((imagesrc) => [...imagesrc, makeSrc]);
                console.log(imagesrc)

            } catch (err) {
                console.error(err);
            }
        } else {
            alert("사진은 3장까지만 업로드 가능합니다");
        }
    }

    return (
        <S.SectionUpload>
            {
                !!localStorage.user
                    ? <>
                        <S.ImageProfile src={profileImg} alt='' />
                        <S.FormPost action="">
                            <S.TextAreaContent ref={textArea} id='postInput' onInput={handleResizeHeight} rows={1} onChange={(e) => {
                                setContent(e.target.value)

                            }} placeholder='게시글 입력하기...' />
                            <S.PrevImgList>
                                {
                                    imagesrc.map((item) => {
                                        return (
                                            <>
                                                {imagesrc.length === 1
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
                            </S.PrevImgList>

                        </S.FormPost>
                        <S.ButtonImageUpload>
                            <S.ImageLabel onClick={handleClickFileInput} />
                            <S.ImageUpload
                                alt='이미지 업로드 버튼'
                                type="file"
                                accept=".jpg, .gif, .png, .jpeg, .bmp, .tif, .heic"
                                ref={fileInputRef}
                                onChange={fileInput} />
                        </S.ButtonImageUpload>
                        <S.ButtonUpload onClick={() => {
                            posting()
                            navegation('/community')
                        }} style={{
                            backgroundColor:
                                ((content === "") && (imagesrc === ""))
                                    ? "#C9D9F0" : "#3C70BC"
                        }}>
                            업로드
                        </S.ButtonUpload>
                    </>
                    : <></>
            }

        </S.SectionUpload>
    )
}
