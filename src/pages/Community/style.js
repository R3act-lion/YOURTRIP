import styled from "styled-components";
import UploadImage from "../../assets/images/btn-upload-img-fill.svg";

export const SectionContainer = styled.section`
  width: 390px;
`;

export const SectionUpload = styled.section`
  width: 390px;
  display: flex;
  align-items: flex-start;
  position: relative;
  min-height: calc(100vh - 108px);
`;

export const ButtonImageUpload = styled.div`
  position: fixed;
  bottom: 72px;
  right: calc(50vw - 179px);
  background-color: rgba(0, 0, 0, 0);
  cursor: pointer;
`;

export const ImageLabel = styled.button`
  display: block;
  background-image: url(${UploadImage});
  background-repeat: no-repeat;
  background-size: cover;
  width: 50px;
  height: 50px;
  cursor: pointer;
`;

export const ImageUpload = styled.input`
  display: none;
`;

export const ImageProfile = styled.img`
  width: 42px;
  height: 42px;
  margin: 20px 10px 0 20px;
  border-radius: 50%;
`;

export const FormPost = styled.form`
  width: 319px;
  display: inline-block;
  margin: 32px 0 16px;
`;

export const TextAreaContent = styled.textarea`
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
  color: #c4c4c4;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ButtonUpload = styled.button`
  width: 90px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: #c9d9f0;
  border-radius: 32px;
  font-weight: 500;
  font-size: 14px;
  position: fixed;
  top: 8px;
  right: calc(50vw - 179px);
  z-index: 30;
  cursor: pointer;
`;

export const PrevImgList = styled.div`
  width: 100%;
  display: flex;
  gap: 8px;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const PrevBigImg = styled.img`
  width: 304px;
  height: 228px;
  border-radius: 10px;
  flex-shrink: 0;
`;

export const PrevSmallImg = styled.img`
  width: 168px;
  height: 126px;
  border-radius: 10px;
  flex-shrink: 0;
`;

export const PrevXBtn = styled.img`
  width: 22px;
  height: 22px;
  position: relative;
  right: 35px;
  top: 8px;
`;

export const DivWrite = styled.div`
  margin-top: 24px;
  border-top: 1px solid #dbdbdb;
`;

export const ListComment = styled.ul`
  padding: 4px 14px;
`;

export const DivPost = styled.div`
  position: relative;
  padding: 20px;
`;

export const ImageMore = styled.img`
  position: absolute;
  top: 30px;
  right: 20px;
  cursor: pointer;
`;

export const DivContent = styled.div`
  padding-left: 54px;
  margin-top: 16px;
`;

export const ParagraphContent = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  margin-bottom: 15px;
`;

export const ImageContent = styled.img`
  width: 290px;
  height: 228px;
  vertical-align: top;
  margin-bottom: 15px;
  border-radius: 10px;
  flex-shrink: 0;
`;

export const ImageAdditional = styled.img`
  width: 15px;
  height: 15px;
  vertical-align: middle;
  margin-right: 8px;
`;

export const ParagraphAdditional = styled.p`
  display: inline-block;
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;
  color: #767676;
  margin-right: 18px;
`;

export const ParagraphTime = styled.p`
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  color: #767676;
  margin-top: 18px;
`;
