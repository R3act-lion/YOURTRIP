import styled from "styled-components"

const BtnDefault = styled.button`
  border-radius: 50px;
  margin: ${props => props.margin};
  color: ${props => props.color};
  background-color: ${props => props.backgroundColor};
  width: ${props => props.width};
  height: ${props => props.height};
  font-size: ${props => props.fontSize};
  border: none;
  cursor: pointer;
  &.btnChecked {
    border: 1px solid #dbdbdb;
  }
`

// className으로 border 설정
const Button = ({
  text,
  margin,
  color, 
  backgroundColor,
  width,
  height,
  fontWeight,
  fontSize,
  className,
  onClick
}) => {
  return (
    <BtnDefault
      margin={margin} color={color} backgroundColor={backgroundColor} width={width} height={height} fontWeight={fontWeight} fontSize={fontSize} className={className} onClick={onClick}>
      {text}
    </BtnDefault>
  )
}

export default Button