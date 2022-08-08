import React from 'react'

//style
import * as styles from './index.style'
//image
import IcTransactionDefault from '../../../assets/images/IcTransactionDefault'

const EmptyDataControl = (props) => {
    const { icon, text, className } = props
    return (
        <styles.Bound className={className}>
            <div className='empty-container'>
                <div className="icon">
                    {
                        icon ?
                            icon
                            :
                            <IcTransactionDefault />
                    }
                </div>
                <p>{
                    text ?
                        text
                        :
                        "There are currently no new data"
                }</p>
            </div>
        </styles.Bound>
    )
}

export default React.memo(EmptyDataControl)
