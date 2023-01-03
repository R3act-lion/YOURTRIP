import { React, useState, useRef } from 'react'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router'
import { SectionUpload, ButtonImageUpload, ImageLabel, ImageUpload, ImageProfile, FormPost, TextAreaContent, ButtonUpload, PrevImgList, PrevBigImg, PrevSmallImg, PrevXBtn } from "../CommunityUpload/CommunityUpload"
import iconX from '../../../assets/images/icon-x.svg'

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

    const token = JSON.parse(localStorage.getItem('defaultAccount')).token;
    const url = "https://mandarin.api.weniv.co.kr";

    let [content, setContent] = useState(`${location.state.content}`);
    console.log(content)
    let [imagesrc, setImagesrc] = useState(
        location.state.image == [""] 
        ? [] 
        : `${location.state.image}`.split(','));
    console.log(imagesrc)

    // 수정 업로드하는 함수
    const postEditing= async()=>{
        const userData = localStorage.getItem('user');
        const newContent = {
            text: content,
            user: userData
        }

        try {
            const res = await fetch(url + "/post/" + postId, {
                method: "PUT",
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
            console.log(resJson);
                
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

            } catch (err) {
                console.error(err);
            }
        } else {
            alert("사진은 3장까지만 업로드 가능합니다");
        }
    }

    return (
        <SectionUpload>
            {
                !!localStorage.user
                    ? <>
                        <ImageProfile src={writerImg} alt='' />
                        <FormPost action="">
                            <TextAreaContent ref={textArea} id='postInput' onInput={handleResizeHeight} rows={1} onChange={(e) => {
                                setContent(e.target.value)

                            }} placeholder='게시글 입력하기...'>{content}</TextAreaContent>
                            <PrevImgList>
                                <>
                                {
                                    imagesrc.map((item) => {
                                        return (
                                            <>
                                                {imagesrc == "" 
                                                ? null
                                                :
                                                (imagesrc.length === 1)
                                                    ? <PrevBigImg src={item} onClick={() => {
                                                        setImagesrc(imagesrc.filter(src => src !== item))
                                                    }} />

                                                    : <PrevSmallImg src={item} onClick={() => {
                                                        setImagesrc(imagesrc.filter(src => src !== item))
                                                    }} />
                                                }
                                                <PrevXBtn src={iconX} />
                                            </>
                                        )
                                    })
                                }
                                </>
                            </PrevImgList>

                        </FormPost>
                        <ButtonImageUpload>
                            <ImageLabel onClick={handleClickFileInput} />
                            <ImageUpload
                                alt='이미지 업로드 버튼'
                                type="file"
                                accept=".jpg, .gif, .png, .jpeg, .bmp, .tif, .heic"
                                ref={fileInputRef} 
                                onChange={fileInput} 
                                />
                        </ButtonImageUpload>
                        <Link to="/community">
                            <ButtonUpload onClick={postEditing} style={{
                                backgroundColor:
                                    ((content == "") && (imagesrc == ""))
                                        ? "#C9D9F0" : "#3C70BC" }}>
                                업로드
                            </ButtonUpload>
                        </Link>
                    </>
                    : <></>
            }
            
        </SectionUpload>
    )
}
