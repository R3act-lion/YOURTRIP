import * as S from "./style"

export default function ResultInput() {
    return (
        <>
            <S.LoginValue>
                <S.LoginTitle id="email" type="email" >이메일</S.LoginTitle>
                <S.EmailInput />
                <S.PassWordTitle id="password" type="password">비밀번호</S.PassWordTitle>
                <S.PasswordInput />
            </S.LoginValue>
        </>
    )
}
