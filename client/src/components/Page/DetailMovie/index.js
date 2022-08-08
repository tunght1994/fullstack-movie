import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router'
import { detailMovieAction } from '../../../redux/DetailMovie/action'
import { WrapDetailMovie } from './index.style'

const DetailMovie = () => {
    const {id} = useParams()

    const dispatch = useDispatch()
    const [type, setType] = useState('movie')

    useEffect(() => {
        dispatch(detailMovieAction(type, id))
    }, [])

    return (
        <WrapDetailMovie>
            
        </WrapDetailMovie>
    )
}

export default DetailMovie
