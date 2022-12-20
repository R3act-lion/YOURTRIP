import reset from "styled-reset";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import NavigationLayout from "./components/Layout/NavigationLayout/NavigationLayout";
import LogoHeaderLayout from "./components/Layout/LogoHeaderLayout/LogoHeaderLayout";

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
            <GlobalStyle />
            
            <BrowserRouter>
                <Routes>
                    <Route element={<NavigationLayout />}>
                        <Route element={<LogoHeaderLayout />}>
                            <Route path="/" element={<Home />} />
                        </Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;