import React, { useState } from 'react'
import style from './ExplorerComponent.module.scss'
import arrowIcon from '../../../assets/icons/angle-arrow-down.svg'


function ExplorerTreeItemComponent(props: any) {
    const [isOpened, setOpenStatus] = useState(false)

    function ClickHandler() {
        return setOpenStatus(!isOpened)
    }
    return (
        <div className={style.treeItemWrapper}>
            <div className={`${style.treeItem} ${isOpened
                ? style.treeItemOpened
                : ''}`}
                onClick={ClickHandler}>
                <img
                    className={`${style.arrowIcon} ${isOpened ? style.arrowIconOpened : ''}`}
                    width="10px" src={arrowIcon}
                    alt="arrow" />
                <span className={style.treeItemName}>Parts</span>
                <div className={style.inventoryCounter}><span>22</span></div>
            </div>
        </div>
    )
}

export default ExplorerTreeItemComponent