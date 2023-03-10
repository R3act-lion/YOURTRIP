import styled from "styled-components";
import uploadbutton from "../../assets/images/btn-write.svg";

export const UploadButton = styled.button`
  background-image: url(${uploadbutton});
  width: 50px;
  height: 50px;
  display: block;
  position: fixed;
  bottom: 10%;
  right: calc(50vw - 170px);
  border: none;
  border-radius: 50%;
  background-color: transparent;
  cursor: pointer;
  z-index: 10;
`;
