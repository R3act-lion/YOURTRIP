import React from 'react'
import styled from 'styled-components'

const Container = styled.main`
    min-height: 100vh;
    padding: 48px 0 60px;
    background-color: white;
    /* overflow: scroll; */
    z-index: 10;

    &::-webkit-scrollbar {
        display: none;
    }
`

export default function MainContainer({children}) {
    return (
        <Container>
            {children}
        </Container>
    )
}