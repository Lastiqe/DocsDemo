import React from 'react'
import style from './InventoryActionButton.module.scss'

type TProps = {
    icon: string
    role: string
    btnClickHandler: (role: string) => void
}

const ActionButton: React.FC<TProps> = (props) => {
    function clickHandler() {
        props.btnClickHandler(props.role)
    }
    return (
        <div onClick={clickHandler} className={`${style.icon}`}>
            <img src={props.icon} alt={`${props.icon}`} />
        </div>
    )
    
}
export default ActionButton