import React, { useEffect } from 'react'
import { WrapBanner } from './index.style'
import { useDispatch, useSelector } from 'react-redux'

// redux
import { bannerAction } from '../../../../redux/HomeMovie/action'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';

// component
import MovieItem from '../MovieList/MovieItem';
import { hostIMG } from '../../../../keys';
import { useNavigate } from 'react-router';

const Banner = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { listBanner } = useSelector((state) => ({listBanner: state.homeReducer.listBanner}))

    useEffect(() => {
        dispatch(bannerAction())
    }, [])
    
    return (
        <WrapBanner>
            <Swiper
                modules={[Autoplay, Navigation]}
                autoplay
                spaceBetween={50}
                slidesPerView={1}
                // onSlideChange={() => console.log('slide change')}
                // onSwiper={(swiper) => console.log(swiper)}
            >
                {
                    listBanner?.map((item , index) => (
                        <SwiperSlide key={index} onClick={() => navigate(`/detail/${item.id}`)}>
                            <img src={`${hostIMG}${item.backdrop_path || item.poster_path}`} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </WrapBanner>
    )
}

export default Banner
