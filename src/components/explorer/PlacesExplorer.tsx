import React, { useState } from 'react'
import style from './PlacesExplorer.module.scss'
import RecrusiveTreeComponent from './explorerTree/RecrusiveTree';
import Spinner from '../spinner/Spinner';
import { TPlacesTree } from '../../redux/types';
import clearCrossIcon from '../../assets/icons/clear-cross.svg'
import burgerMenuIcon from '../../assets/icons/burger-menu.svg'

type TProps = {
    placesTree: TPlacesTree[]
    selectedPlace: TPlacesTree
    setSelectedPlaceAction: (place: TPlacesTree) => void
}

const PlacesExplorer: React.FC<TProps> = (props) => {
    const [isMobileOpen, setMobileState] = useState(false)

    function toggleMenu(): void {
        setMobileState(!isMobileOpen)
    }

    return (
        <div className={`${style.explorer} ${isMobileOpen && style.openedMobile}`}>
            <div className={style.explorerHeader}>
                <h1>Помещения</h1>
            </div>
            <div className={style.explorerBody}>
                {props.placesTree.length
                    ? <div className={style.placesTree}>
                            {props.placesTree.map((item) => {
                            return <RecrusiveTreeComponent
                                setSelectedPlaceAction={props.setSelectedPlaceAction}
                                selectedPlace={props.selectedPlace}
                                place={item}
                                key={item.id} />
                        })}</div>
                    : <div className={style.spinnerWrapper}><Spinner width={150} /></div>}
            </div>
            <div onClick={toggleMenu} className={style.menuCloseButtonWrapper}>
                <img src={clearCrossIcon} alt="close-menu" width="40"/>
            </div>
            <div onClick={toggleMenu} className={`${style.menuOpenButtonWrapper} ${isMobileOpen && style.menuOpened}`}>
                <img src={burgerMenuIcon} alt="open-menu" width="40"/>
            </div>
        </div>
    )
    
}
export default PlacesExplorer