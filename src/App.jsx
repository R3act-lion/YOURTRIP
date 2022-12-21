import { reset } from "styled-reset";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import NavigationLayout from "./components/Layout/NavigationLayout/NavigationLayout";
import LogoHeaderLayout from "./components/Layout/LogoHeaderLayout/LogoHeaderLayout";
import BasicHeaderLayout from "./components/Layout/BasicHeaderLayout/BasicHeaderLayout";
import UploadHeaderLayout from "./components/Layout/UploadHeaderLayout/UploadHeaderLayout";
import SearchHeaderLayout from "./components/Layout/SearchHeaderLayout/SearchHeaderLayout";
import LocationCategory from "./components/LocationCategory/LocationCategory";
import PlaceList from "./components/PlaceList/PlaceList";
import { theme } from "./theme";

import Home from "./pages/Home/Home";

const GlobalStyle = createGlobalStyle`
    ${reset}

    @import url(//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css);

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
`

function App() {
    return (
        <>
            <ThemeProvider theme={theme} >
                <GlobalStyle />

                <BrowserRouter>
                    <Routes>
                        <Route element={<NavigationLayout />}>
                            <Route element={<LogoHeaderLayout />}>
                            {/* <Route element={<BasicHeaderLayout />}> */}
                            {/* <Route element={<UploadHeaderLayout />}> */}
                            {/* <Route element={<SearchHeaderLayout />}> */}
                                <Route path="/" element={<Home />} />
                                <Route path="/location" element={<LocationCategory />} >
                                    <Route path="/location/placeList" element={<PlaceList />}></Route>
                                </Route>
                            </Route>
                        </Route>
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </>
    );
}

export default App;