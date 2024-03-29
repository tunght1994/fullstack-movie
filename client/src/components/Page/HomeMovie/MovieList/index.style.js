import styled from "styled-components";

const WrapMovieList = styled.div`
    .movie-title{
        width: 400px;
        height: 38px;
        display: flex;
        align-items: center;
        gap: 32px;
        padding: 8px;
        background: rgba(0, 0, 0, 0.2);
        border-radius: 12px;
        .title-item{
            padding: 8px 32px;
            color: #EBE9F3E;
            cursor: pointer;
            &.active{
                background: #7B6EF6;
                border-radius: 8px;
            }
        }
    }
    .movie-list {
        position: relative;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 10px;
        margin: 20px 0 0 0;
        .wrap-empty{
            width: 100%;
            height: 800px;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
        }
        .loading{
            height: 500px;
        }
    }
`

export {
    WrapMovieList
}