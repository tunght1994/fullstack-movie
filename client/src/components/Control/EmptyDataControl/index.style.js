import styled from 'styled-components'

const Bound = styled.div`
    display:flex;
    flex-direction:column;
    flex: 1;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    font-style: normal;

    .empty-container{
        display: flex;
        width: 100%;
        height: 100%;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .icon {
        display:flex;
        width:140px;
        height:140px;
        margin-bottom:28px;
    }

    p{
        font-style: normal;
        font-weight: 600;
        font-size: 13px;
        line-height: 18px;
        color: #777777;
        text-align: center;
        display: flex;
    }
`

export { Bound }