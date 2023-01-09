import styled from "styled-components";


export const ScreenApp = styled.div `
    min-height: 100vh;
    min-width: 100vw;
    background-color: #242423;
    padding-top: .1px;
    display: flex;
    justify-content: center;
`

export const Container = styled.div `
    background-color: #cfdbd5;
    height: fit-content;
    padding: 8px;
    border-radius: 12px;
    margin: 1rem;
    display: flex;
    flex-direction: column;

    @media screen and (min-width: 748.1px ) {
        width: 100%;
        height: 100%;
        margin: 40px 0 0 0;
        flex-direction: row;
        gap:30px;
        justify-content: center;
        max-width: 785px;
        max-height: 300px;
        align-items: center;
    }
    
    .input-container {
        font-weight: 500;
        display: flex;
        flex-direction: column;
        gap: 8px;
        text-align: center;
        h1 {
            font-size: 1.3rem;
        }
        p {
            font-weight: 400;
        }

        @media screen and (min-width: 748.1px ) {
            justify-content: space-around;
            height: 100%;
        }
    }

`