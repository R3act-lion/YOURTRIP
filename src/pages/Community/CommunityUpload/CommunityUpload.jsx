import { React, useRef, useState } from 'react'
import styled from 'styled-components'
import UploadImage from '../../../assets/images/btn-upload-img-fill.svg'
import ProfileImage from '../../../assets/images/profile.svg'
import iconX from '../../../assets/images/icon-x.svg'

const SectionUpload = styled.section`
    width: 390px;
    display: flex;
    align-items: flex-start;
    position: relative;
    min-height: calc(100vh - 108px);
`

const ButtonImageUpload = styled.button`
    position: fixed;
    bottom: 72px;
    right: calc(50vw - 179px);
    background-color: rgba(0, 0, 0, 0);
    cursor: pointer;
`

const ImageLabel = styled.label`
    display: block;
    background-image: url(${UploadImage});
    background-repeat: no-repeat;
    background-size: cover;
    width: 50px;
    height: 50px;
    cursor: pointer;
`

const ImageUpload = styled.input`
    display: none;
`

const ImageProfile = styled.img`
    width: 42px;
    margin: 20px 10px 0 20px;

`

const FormPost = styled.form`
    width: 319px;
    display: inline-block;
    margin: 32px 0 16px;
`

const TextAreaContent = styled.textarea`
    width: 300px;
    margin-bottom: 16px;
    padding: 0;
    font-size: 16px;
    resize: none;
    border: none;
    outline: none;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: #C4C4C4;

    &::-webkit-scrollbar {
        display: none;
    }
`

const ButtonUpload = styled.button`
    width: 90px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    background-color: #C9D9F0;
    border-radius: 32px;
    font-weight: 500;
    font-size: 14px;
    position: fixed;
    top: 8px;
    right: calc(50vw - 179px);
    z-index: 30;
    cursor: pointer;
`

const PrevImgList = styled.div`
    width: 100%;
    display: flex;
    gap: 8px;
    overflow-x: scroll;

    &::-webkit-scrollbar {
      display: none;
  }
`

const PrevBigImg = styled.img`
    width: 304px;
    height: 228px;
    border-radius: 10px;
    flex-shrink: 0;
`

const PrevSmallImg = styled.img`
    width: 168px;
    height: 126px;
    border-radius: 10px;
    flex-shrink: 0;
`

const PrevXBtn = styled.img`
    width: 22px;
    height: 22px;
    position : relative;
    right: 35px;
    top: 8px;
`

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
    let [content, setContent] = useState("");
    let [imagesrc, setImagesrc] = useState([]);

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
            console.log(resJson);

        } catch (err) {
            console.error(err);
        }
    }

    // 파일 인풋창 열리는 함수 근데 왜 두번열리는지 모르겠음
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
        <SectionUpload>
            {
                !!localStorage.user
                    ? <>
                        <ImageProfile src={ProfileImage} alt='' />
                        <FormPost action="">
                            <TextAreaContent ref={textArea} id='postInput' onInput={handleResizeHeight} rows={1} onChange={(e) => {
                                setContent(e.target.value)

                            }} defaultValue='게시글 입력하기...' />
                            <PrevImgList>
                                {
                                    imagesrc.map((item) => {
                                        return (
                                            <>
                                                {imagesrc.length === 1
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
                            </PrevImgList>

                        </FormPost>
                        <ButtonImageUpload>
                            <ImageLabel htmlFor='img-file' onClick={handleClickFileInput} />
                            <ImageUpload
                                id="img-file"
                                alt='이미지 업로드 버튼'
                                type="file"
                                accept=".jpg, .gif, .png, .jpeg, .bmp, .tif, .heic"
                                ref={fileInputRef}
                                onChange={fileInput} />
                        </ButtonImageUpload>
                        <ButtonUpload onClick={posting} style={{
                            backgroundColor:
                                ((content == "") && (imagesrc == ""))
                                    ? "#C9D9F0" : "#3C70BC"
                        }}>
                            업로드
                        </ButtonUpload>
                    </>
                    : <></>
            }

        </SectionUpload>
    )
}
