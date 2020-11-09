import React from 'react'
import style from './Spinner.module.scss'
import loader from '../../assets/gifs/Blocks-1s-207px.svg'

type TProps = {
    width: number
}

const Spinner: React.FC<TProps> = (props) => {
   
    return (
        <div className={style.loaderWrapper}>
            <img src={loader}
                width={props.width}
                className={style.loader} />
        </div>
    )
}
export default Spinner