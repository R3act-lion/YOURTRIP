import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { asyncGetPlaceData } from './store/Data';
import { reset } from "styled-reset";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import NavigationLayout from "./components/Layout/NavigationLayout/NavigationLayout";
import LogoHeaderLayout from "./components/Layout/LogoHeaderLayout/LogoHeaderLayout";
import LogoBackHeaderLayout from "./components/Layout/LogoBackHeaderLayout/LogoBackHeaderLayout";
import BasicHeaderLayout from "./components/Layout/BasicHeaderLayout/BasicHeaderLayout";
import ButtonHeaderLayout from "./components/Layout/ButtonHeaderLayout/ButtonHeaderLayout";
import SearchHeaderLayout from "./components/Layout/SearchHeaderLayout/SearchHeaderLayout";
import LogoMoreHeaderLayout from "./components/Layout/LogoMoreHeaderLayout/LogoMoreHeaderLayout";
import CategoryNavigationLayout from "./components/Layout/CategoryNavigationLayout/CategoryNavigationLayout";
import { theme } from "./theme";

import Home from "./pages/Home/Home";
import HomePlaceList from "./pages/Home/HomePlaceList/HomePlaceList";

import Location from "./pages/Location/Location";
import LocationTheme from "./pages/Location/LocationTheme/LocationTheme";
import LocationPlaceList from "./pages/Location/LocationPlaceList/LocationPlaceList";

import Search from "./pages/Search/Search";

import Community from "./pages/Community/Community";
import CommunityDetail from "./pages/Community/CommunityDetail/CommunityDetail";
import CommunityUpload from "./pages/Community/CommunityUpload/CommunityUpload";
import CommunityEdit from "./pages/Community/CommunityEdit/CommunityEdit";

import PlaceDetail from "./pages/PlaceDetail/PlaceDetail";
import Post from "./pages/Post/Post";
import MyPost from "./pages/Post/MyPost/MyPost";

import Profile from "./pages/Profile/Profile";
import ProfileFollowers from "./pages/Profile/ProfileFollowers/ProfileFollowers";
import ProfileFollowing from "./pages/Profile/ProfileFollowing/ProfileFollowing";
import ProfileModify from "./pages/Profile/ProfileModify/ProfileModify";
import ProfileAddQuration from "./pages/Profile/ProfileAddQuration/ProfileAddQuration";
import QurationPlaceList from "./pages/Profile/ProfileAddQuration/QurationPlaceList/QurationPlaceList";

import SignUp from "./pages/SignUp/SignUp";
import SignUpProfile from "./pages/SignUp/SignUpProfile"

import Login from "./pages/Login/Login";

import NotFound from "./pages/NotFound/NotFound";
import { SearchContext } from './context/Context';


const GlobalStyle = createGlobalStyle`
    ${reset}

    *, *::before, *::after {
        box-sizing: border-box;
    }
    
    body {
        background-color: #CCCCCC;
        font-family: 'Spoqa Han Sans Neo', 'sans-serif';
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
    }

    body::-webkit-scrollbar {
        display: none; /* Chrome, Safari, Opera*/
    }

    #root {
        width: 390px;
        margin: 0 auto;
        background-color: white;
    }

    a {
        text-decoration: none;
        color: black;
        border: none;
    }

    button {
        border: none;
        background-color: white;
        padding: 0;
    }

    .irOnly {
        position: absolute;
        clip: rect(0 0 0 0);
        clip-path: inset(50%);
        width: 1px;
        height: 1px;
        margin: -1px;
        overflow: hidden;
    }

    li {
        list-style-type: none;
    }
`

function App() {
    const { placeData } = useSelector(state => state.placeData);
    const dispatch = useDispatch();

    const getPlaceData = () => {
        dispatch(asyncGetPlaceData());
    }

    useEffect(() => {
        getPlaceData();
    }, [])

    return (
        <>
            {
                !!!placeData.area
                ? <></>
                : <ThemeProvider theme={theme} >
                    <GlobalStyle />
                    <BrowserRouter>
                        <Routes>
                            <Route element={<NavigationLayout />}>
                                <Route element={<LogoHeaderLayout />}>
                                    <Route path="/" element={<Home />} />

                                </Route>
                                <Route element={<LogoBackHeaderLayout />}>
                                    <Route path="/home/placelist" element={<HomePlaceList />} />

                                    <Route element={<CategoryNavigationLayout />}>
                                        <Route path="/location" element={<Location />} />
                                        <Route path="/location/theme" element={<LocationTheme />} />
                                        <Route path="/location/placelist" element={<LocationPlaceList />} />
                                    </Route>
                                </Route>
                                <Route element={<BasicHeaderLayout />}>
                                    <Route path="/placedetail/:id" element={<PlaceDetail />} />
                                    <Route path="/post/:id" element={<Post />} />
                                    {/* <Route path="/profile" element={<NotFound />} /> */}
                                    <Route path="/profile/:id" element={<Profile />} />
                                    <Route path="/yourprofile/:id" element={<Profile />} />
                                    <Route path="/profile/followers" element={<ProfileFollowers />} />
                                    <Route path="/profile/following" element={<ProfileFollowing />} />
                                    </Route>
                                <Route element={<SearchHeaderLayout />}>
                                    <Route path="/search" element={<Search />} />
                                        </Route>
                                <Route element={<LogoMoreHeaderLayout />}>
                                    <Route path="/community" element={<Community />} />
                                    <Route path="/mypost" element={<MyPost />} />
                                    <Route path="/community/detail" element={<CommunityDetail />} />
                                </Route>
                                <Route element={<ButtonHeaderLayout />}>
                                    <Route path="/community/upload" element={<CommunityUpload />} />
                                    <Route path="/community/edit" element={<CommunityEdit />} />
                                    <Route path="/profile/modify" element={<ProfileModify />} />
                                    <Route path="/profile/addquration" element={<ProfileAddQuration />} />
                                    <Route path="/profile/addquration/list" element={<QurationPlaceList />} />
                                </Route>
                            </Route>
                            <Route path="/signup" element={<SignUp />} />
                            <Route path="/signup/profile" element={<SignUpProfile />} />

                            <Route path="/login" element={<Login />} />
                            <Route path="/notfound" element={<NotFound />} />
                            <Route path="/profile" element={<NotFound />} />
                        </Routes>
                    </BrowserRouter>
                </ThemeProvider>
            }

        </>
    );
}

export default App;