import styled from "styled-components"

const ImgDefault = styled.img`
  object-fit: cover;
  border-radius: ${props => props.borderRadius};
  margin: ${props => props.margin};
  width: ${props => props.width};
  height: ${props => props.height};
`

const Image = ({
  borderRadius,
  margin,
  width,
  height,
  src,
  alt=""
}) => {
  return (
    <ImgDefault
      margin={margin} borderRadius={borderRadius} width={width} height={height} src={src} alt={alt} >
    </ImgDefault>
  )
}

export default Image