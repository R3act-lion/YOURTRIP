import React, { useRef,useState } from 'react'
import styled from 'styled-components'
import UploadImage from '../../../assets/images/btn-upload-img-fill.svg'
import ProfileImage from '../../../assets/images/profile.svg'

const SectionUpload = styled.section`
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

const ImageLabel= styled.label`
    background-image: url(${UploadImage});
    background-repeat: no-repeat;
    background-size: cover;
    width: 50px;
    height: 50px;
    position:fixed;
    right: 750px;
    bottom: 80px;
    background-color: #FFFFFF;
    cursor: pointer;
`

const ImageUpload = styled.input`
    display: none;
`

const ImageProfile = styled.img`
    width: 42px;
    margin: 20px 10px 0 20px;
    vertical-align: top;
`

const FormPost = styled.form`
    display: inline-block;
`

const TextAreaContent = styled.textarea`
    width: 300px;
    font-size: 16px;
    resize: none;
    border: none;
    outline: none;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    margin: 29px 0 0 70px;
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

const PrevImgList= styled.div`
    display: flex;
    gap: 8px;
    margin-left: 70px;
`

const PrevImg= styled.img`
  width: 168px;
  height: 126px;
`

export default function CommunityUpload() {
    const fileInputRef= useRef();
    const textArea= useRef();
    const handleResizeHeight = () => {
        textArea.current.style.height = 'auto'
        textArea.current.style.height = textArea.current.scrollHeight + 'px'
        textArea.current.style.color = 'black'
    }

    const token= localStorage.getItem("Access Token");
    const url = "https://mandarin.api.weniv.co.kr";
    let [content, setContent]=useState("");
    let [imageFile,setImageFile]=useState([]);
    let [imagesrc,setImagesrc]=useState([]);
    
    // 게시물 포스팅하는 함수
    async function posting(){
      const imgUrls= [];
      const files= imageFile;
      if (files.length <= 3){
        for (let index=0; index< files.length; index++){
          const imgUrl= await uploadImage(files, index);
          imgUrls.push(`${url}/${imgUrl}`);
        }
        try{   
          const res = await fetch(url+"/post", {
                            method: "POST",
                            headers: {
                                "Authorization" : `Bearer ${token}`,
                                "Content-Type": "application/json",
                            },
                            body : JSON.stringify({
                              "post": {
                                  "content": content,
                                  "image": imgUrls.join()
                                }
                            })
                        });
          const resJson = await res.json();
          setImageFile([]);
          setImagesrc([]);
          console.log(resJson);
        } catch(err){
          console.error(err);
        }
      }
      else {
        alert("이미지는 3장까지만 업로드 가능합니다")
      }
      
      }

    // 파일 인풋창 열리는 함수 근데 왜 두번열리는지 모르겠음
    const handleClickFileInput=()=>{
      if (imageFile.length>=3){
        alert("이미지는 3장까지만 업로드 가능합니다")
      } else{
      fileInputRef.current.click();
    }}


    //파일을 이미지 배열에 넣는 함수
    const fileInput=(e)=>{
      const Blob= e.target.files[0];
      
      if (Blob === undefined){
        return;
      }
      setImageFile((prevState)=>[...prevState, Blob]);
    }
      
    // 이미지 서버로 보내고 나서 filename 받는 함수
    const uploadImage= async(files, index) =>{
        const formData= new FormData();
        formData.append("image", files[index]);

        try{
          const res=await fetch(url+"/image/uploadfiles",{
              method: "POST",    
              body : formData
          })
          const resJson= await res.json();
          let makeSrc=url+'/'+resJson[0]["filename"];
          setImagesrc((imagesrc)=>[...imagesrc, makeSrc]);
          console.log(resJson)
          return(resJson[0]["filename"])

        } catch(err) {
          console.error(err);
        }
      }
    
    
    //사진 미리보기 함수
    // const showImage= useMemo(()=>{
    //   if (!imageFile && imageFile == null){
    //     return <img src={BlankImage} alt='사진없음' />
    //   }

    //   return <ShowFileImage src={imageFile.thumbnail} alt={imageFile.type} onClick={handleClickFileInput}/>},[imageFile]) 
    

    return (
        <SectionUpload>
            <ButtonImageUpload>
                <ImageLabel htmlFor='img-file' onClick={handleClickFileInput}/>
                <ImageUpload id="img-file" alt='이미지 업로드 버튼' type="file" accept=".jpg, .gif, .png, .jpeg, .bmp, .tif, .heic" ref={fileInputRef} onChange={fileInput}/>
            </ButtonImageUpload>
            <ImageProfile src={ProfileImage} alt='' />
            <FormPost action="">
                <TextAreaContent ref={textArea} id='postInput' onInput={handleResizeHeight} rows={1} onChange={(e)=> {setContent(e.target.value)}}>게시글 입력하기</TextAreaContent>
                <PrevImgList>
                    <PrevImg src="https://mandarin.api.weniv.co.kr/1672068554121.png"/>
                    <PrevImg src="https://mandarin.api.weniv.co.kr/1672068554121.png"/>
                    <PrevImg src="https://mandarin.api.weniv.co.kr/1672068554121.png"/>
                </PrevImgList>
                  
                <ButtonUpload onClick={posting}>
                    업로드
                </ButtonUpload>
            </FormPost>
        </SectionUpload>
    )
}
