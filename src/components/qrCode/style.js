import styled from "styled-components";

export const ContainerCode = styled.div`
    width: 100%;
    height: 256px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    .no-qr {
        width: 100%;
        height: 100%;
        background: center url("/gif.gif") no-repeat;
        filter: drop-shadow(0px 0px 60px #000);
    }

    @media screen and (min-width: 748.1px ) {
            max-width: 256px;
        }
`