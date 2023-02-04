import { Link } from "react-router-dom";
import MoreImg from '../../../assets/images/icon-more.svg';
import SearchImg from '../../../assets/images/icon-search.svg';
import YourtripImg from '../../../assets/images/sub-logo.svg';
import * as S from "./style";

export default function LogoMoreHeader({setMyPostModal}) {
    return (
        <S.HeaderContainer>
            <S.HeadingOneTitle>
                <Link to='/'>
                    <S.ImageLogo src={YourtripImg} alt='YOURTRIP' />
                </Link>
            </S.HeadingOneTitle>
            <S.LinkSearch to='/search'>
                <S.ImageSearch src={SearchImg} alt='검색' />
            </S.LinkSearch>
            
            <S.ButtonMore id='btnMore'>
                <S.ImageMore src={MoreImg} alt='더보기' onClick={()=>{setMyPostModal(true)}}/>
            </S.ButtonMore>
        </S.HeaderContainer>

    )
}
