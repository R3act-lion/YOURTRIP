import React from "react";
// import ReactDOM from 'react-dom'; //구버전
import { createRoot } from "react-dom/client";
import App from "./App";
import placeSliceReducer from './store/Data'
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

const store = configureStore({
    reducer: {
        placeData: placeSliceReducer,
    }
})

localStorage.setItem('defaultAccount', JSON.stringify({ 
    "_id": "63b04526b2cb2056638e7999", 
    "username": "yourtrip", 
    "email": "yourtrip@weniv.com", 
    "accountname": "yourtrip_official", 
    "intro": "yourtrip 공식 계정", 
    "image": "http://146.56.183.55:5050/Ellipse.png", 
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYjA0NTI2YjJjYjIwNTY2MzhlNzk5OSIsImV4cCI6MTY3NzY4MTA2OCwiaWF0IjoxNjcyNDk3MDY4fQ.ih6YReZUso--Rb2wgD2q4u17Eyme254vAByB-UOoevY", 
    "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NzI0OTcwNjgsImV4cCI6MTY3MzcwNjY2OH0.66bwX7SlCXBV4VwCysZjibpA30dvO0qxxucupjzfOTM" 
}))

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);