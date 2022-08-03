import styled from "styled-components";

const WrapMovieItem = styled.div`
    // display: flex;
    // flex-direction: column;
    // align-items: flex-start;
    padding: 8px 8px 16px;
    gap: 16px;
    width: 284px;
    height: 480px;
    background: rgba(32, 40, 62, 0.8);
    backdrop-filter: blur(80px);
    border-radius: 12px;

    .movie-item-content{
        height: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        gap: 30px;
        cursor: pointer;
        .movie-img{
            width: 286px;
            height: 400px;
            border-radius: 8px;
            object-fit: cover;
        }
        .movie-item-value{
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 600;
            font-size: 16px;
            line-height: 24px;
            letter-spacing: 0.02em;
            color: #EBEEF5;
        }
    }
`

export {
    WrapMovieItem
}