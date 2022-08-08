import React, { useRef, useEffect } from 'react'
import Lottie from 'lottie-web'

// styles
import { WrapLoading } from './index.styles'

import loading from './loading.json'

const LoadingLocal = () => {
    
    const wrapAnimationRef = useRef()

    useEffect(() => {
        if(!wrapAnimationRef.current) return;
        const timeout = setTimeout(() => {
            Lottie.loadAnimation({
                container: wrapAnimationRef.current,
                animationData: loading
            })
        },300)
        return () => {
            clearTimeout(timeout)
        }
    }, []);

    return (
        <WrapLoading>
            <div 
                ref={wrapAnimationRef}
                style={{ 
                    width: '40px',
                    height: '40px'
                }}
            />
            <p>Đang tải dữ liệu...</p>
        </WrapLoading>
    )
}

export default LoadingLocal
