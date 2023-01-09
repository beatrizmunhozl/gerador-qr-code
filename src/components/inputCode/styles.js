import styled from "styled-components";
import { Button } from "../inputColor/style";

export const StyledForm = styled.form`
    margin-top: 8px;
    display: flex;
    flex-direction: column;
    gap: 4px;

    input {
        border: none;
        height: 2rem;
        background-color: #e8eddf;
        padding-left: 16px;
        border-radius: 8px;
    }
    ${Button} {
        align-self: center;
    }
`