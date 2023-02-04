import styled from "styled-components";
import UploadButton from "../../assets/images/btn-upload-img-fill.svg";

export const ButtonImg = styled.div`
  background-image: url(${UploadButton});
  background-repeat: no-repeat;
  border: 0;
  background-size: cover;
  width: 35px;
  height: 35px;
  cursor: pointer;
  position: absolute;
  top: 85px;
  left: 70px;
`;
