import styled from "styled-components";

const WrapMovieItem = styled.div`

    padding: 8px 8px 16px;
    gap: 16px;
    width: 246px;
    height: 413px;
    background: rgba(32, 40, 62, 0.8);
    backdrop-filter: blur(80px);
    border-radius: 12px;
    .movie-item-content{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 20px;
        cursor: pointer;
        .movie-img{
            width: 246px;
            height: 369px;
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
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            display: inline-block;
        }
    }
`

export {
    WrapMovieItem
}