import React from 'react'
import { WrapHomeMovie } from './index.style'

// component
import Banner from './Banner'
import MovieList from './MovieList'

const HomeMovie = () => {
    return (
        <WrapHomeMovie>
            <Banner /> 
            <MovieList />
        </WrapHomeMovie>
    )
}

export default HomeMovie
