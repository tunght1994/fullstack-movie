import styled from 'styled-components'

const WrapLoading = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 20;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    p {
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 13.5px;
        line-height: 18px;
        color: #000000;
        padding-top: 5px;
    }
`;

export {
    WrapLoading
}