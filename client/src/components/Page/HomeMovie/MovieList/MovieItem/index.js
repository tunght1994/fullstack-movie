import React from 'react'
import { useNavigate } from 'react-router'
import { hostIMG } from '../../../../../keys'
import { WrapMovieItem } from './index.style'

const MovieItem = ({item}) => {

    const navigate = useNavigate()
    
    return (
        <WrapMovieItem>
            <div className="movie-item-content" onClick={() => navigate(`/detail/${item.resType}/${item.id}`)}>
                <img src={`${hostIMG}${item.backdrop_path || item.poster_path}`} className='movie-img' alt="poster" />
                <div className="movie-item-value">
                    {item.title || item.original_title || item.original_name}
                </div>
            </div>
        </WrapMovieItem>
    )
}

export default MovieItem
