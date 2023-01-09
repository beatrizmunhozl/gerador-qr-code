import { ChromePicker } from "react-color";
import styled from "styled-components";

export const Button = styled.button`
    background-color: #333533;
    color: #f2f2f2;
    letter-spacing: 1px;
    font-size: 1rem;
    font-weight: bolder;
    margin: 8px 0;
    border-radius: 8px;
    border: none;
    height: 2.2rem;
    padding: 0 40px;
    width: fit-content;


    @media screen and (min-width: 748.1px ) {
        width: 100%;
        margin: 20px 0 0 0;
    }

    &:hover{
        transition: all 300ms;
        cursor: pointer;
        background-color: #e5383b;
        color: #242423;
    }
`

export const ColorInput = styled.div`
    
    position: relative;
    display: flex;
    justify-content: center;
    align-items: 'center';
    gap: 16px;

    .color-sample {
        width: 100%;
        padding: 8px 16px;
        border-radius: 8px;
        background-color: #e8eddf;
        display: flex;
        align-items: center;
        gap: 12px;
        .sample{
            border-radius: 50%;
            height: 40px;
            width: 40px;
        }
        span {
            font-family: monospace;
        }
    }
    .container--color-picker{
        position: absolute;
        left: 50px;
        top: 42px;       
    }

`