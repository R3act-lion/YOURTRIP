import * as S from "./style"

export default function MainContainer({ children }) {
    return (
        <S.Container>
            {children}
        </S.Container>
    )
}