import styled from "styled-components";

const WrapInput = styled.div`
    width: 344px;
    height: 40px;
    position: relative;

    .input-icon{
        position: absolute;
        left: 18px;
        top: 22px;
    }
    input {
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.1);
        border: 1px solid #323B54;
        outline: none;
        color: #fff;
        padding: 0 8px;
    }
`

export { 
    WrapInput 
}