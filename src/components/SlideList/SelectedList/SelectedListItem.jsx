import * as S from "./style"

export default function SelectedListItem({place}) {
    return (
        <S.ListItemSelected>
            <S.ImageSelected src={place.firstimage} alt='' />
            <S.ParagraphTitle>
                {place.title}
            </S.ParagraphTitle>
        </S.ListItemSelected>
    )
}