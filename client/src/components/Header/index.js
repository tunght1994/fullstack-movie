import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Axios from 'axios'

// images
import Logo from '../../assets/images/logo.png'

// data
import { dataMenu } from '../../data/dataMenu'
import Input from '../Control/Input'
import { WrapHeader } from './index.style'
import { hostAPI, KEY } from '../../keys'
import { useDispatch, useSelector } from 'react-redux'
import { resetSearchMovieAction, searchMovieActione } from '../../redux/HomeMovie/action'

const Header = () => {

    const dispatch = useDispatch()
    const [valueSearch , setValueSearch] = useState('')

    useEffect(() => {
        const timeout = setTimeout(() => {
            if(!valueSearch) dispatch(resetSearchMovieAction())
            dispatch(searchMovieActione(valueSearch))
        },500)
        return () => { 
            clearTimeout(timeout)
        }
    },[valueSearch])

    return (
        <WrapHeader>
            <div className="header-content">
                <Link className="header-logo" to='/'>
                    <img src={Logo} alt="logo" />
                </Link>
                <div className="header-search">
                    <Input
                        value={valueSearch}
                        onChange={(e) => setValueSearch(e.target.value)}
                        placeholder="Nhập tên phim..." 
                    />
                </div>
                <div className="header-menu">
                    {
                        dataMenu.map((item, index) => (
                            <NavLink className="menu-item" to={item.path} key={index}>
                                {item.name}
                            </NavLink>
                        ))
                    }
                </div>
            </div>
        </WrapHeader>
    )
}

export default Header
