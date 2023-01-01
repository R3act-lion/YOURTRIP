import React from 'react'
import styled from 'styled-components'
import ProfileImage from '../../../assets/images/profile.svg'
import { Link } from 'react-router-dom'

const SectionUserInfo = styled.section`
    padding: 30px 0;
    border-bottom: 5px solid #EFEFEF;
    position: relative;
    text-align: center;
`

const ImageProfile = styled.img`
    width: 110px;
    height: 110px;
    vertical-align: top;
    margin-bottom: 16px;
`

const ParagraphUserName = styled.p`
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    margin-bottom: 6px;
`

const ParagraphEmail = styled.p`
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    margin-bottom: 16px;
    color: #767676;
`

const ParagraphIntroduce = styled.p`
    font-weight: 400;   
    font-size: 14px;
    line-height: 18px;
    color: #767676;
    margin-bottom: 24px;
`

const LinkModify = styled(Link)`
    display: inline-block;
    padding: 8px 26px;
    border: 1px solid #DBDBDB;
    border-radius: 30px;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    color: #767676;
    cursor: pointer;
`

const LinkFollowers = styled(Link)`
    display: flex;
    flex-direction: column;
    gap: 3px;
    position: absolute;
    top: 65px;
    left: 55px;
`
const LinkFollowing = styled(Link)`
    display: flex;
    flex-direction: column;
    gap: 3px;
    position: absolute;
    top: 65px;
    right: 55px;
`

const ParagraphCount = styled.p`
    font-weight: 700;
    font-size: 18px;
    line-height: 23px;
`

const PragraphDesc = styled.p`
    font-weight: 400;
    font-size: 10px;
    line-height: 13px;
    color: #767676;
`

export default function UserInfo() {
    

    return (
        <SectionUserInfo>
            <header>
                <h2 className='irOnly'>
                    유저 정보
                </h2>
            </header>
            <ImageProfile src={ProfileImage} alt='프로필 이미지' />
            <ParagraphUserName>
                이것은 나의 프로필
            </ParagraphUserName>
            <ParagraphEmail>
                @이것은 이메일
            </ParagraphEmail>
            <ParagraphIntroduce>
                이것은 소개 이것은 소개 이것은 소개 이것은 소개
            </ParagraphIntroduce>
            <LinkModify to='/profile/modify'>
                프로필 수정
            </LinkModify>
            <LinkFollowers to='/profile/followers'>
                <ParagraphCount>
                    200
                </ParagraphCount>
                <PragraphDesc>
                    followers
                </PragraphDesc>
            </LinkFollowers>
            <LinkFollowing to='/profile/following'>
                <ParagraphCount>
                    174
                </ParagraphCount>
                <PragraphDesc>
                    following
                </PragraphDesc>
            </LinkFollowing>
        </SectionUserInfo>
    )
}